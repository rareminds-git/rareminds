/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var app = express();
const multer = require("multer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "L1v)28L2ovSw",
  database: "rareminds",
});

con.connect(function (err) {
  if (err) throw err;
});

const mysqlQuery = async (connection, queryConfig) => {
  console.log("query config", queryConfig);
  const config = { ...queryConfig, timeout: 4000 };

  return new Promise((resolve, reject) => {
    return connection.query(config, function (error, results, fields) {
      if (error) {
        reject(error);
      }
      resolve(results);
    });
  });
};

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

function encodeHTML(str) {
  console.log("str", str);
  const code = {
    " ": "&nbsp;",
    "¢": "&cent;",
    "£": "&pound;",
    "¥": "&yen;",
    "€": "&euro;",
    "©": "&copy;",
    "®": "&reg;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&apos;",
  };
  return typeof str === "string"
    ? str.replace(/[\u00A0-\u9999<>\&''""]/gm, (i) => code[i])
    : str;
}

//Allow all requests from all domains & localhost
app.all("/*", function (req, res, next) {
  console.log("call api");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/uploads", express.static("public/images/uploads/"));

const generateAccessToken = (userId) => {
  return jwt.sign(
    { userId },
    "1e43ec24f7ddefb1a824fe6dba87cfb8e387924d8126262bc38b2978c06dddb7",
    { expiresIn: "7d" }
  );
};

const checkRecordExists = async (tableName, column, value) => {
  let result = await mysqlQuery(con, {
    sql: `SELECT * FROM ${tableName} WHERE ${column} = "${value}"`,
  });
  if (result) {
    return result[0];
  } else {
    return false;
  }
};

app.post("/login", async function (req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(400)
      .json({ error: "Email or Password fields cannot be empty!" });
    return;
  }

  try {
    const existingUser = await checkRecordExists(
      "rm_admin_users",
      "AdminLoginId",
      email
    );

    if (existingUser) {
      if (!existingUser.AdminLoginPassword) {
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }

      const passwordMatch = await bcrypt.compare(
        password,
        existingUser.AdminLoginPassword
      );

      if (passwordMatch) {
        res.status(200).json({
          userId: existingUser.AdminUserId,
          email: existingUser.AdminLoginId,
          access_token: generateAccessToken(existingUser.AdminUserId),
        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/pages", function (req, res) {
  con.query("SELECT * FROM rm_pages", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/dashboard", async function (req, res) {
  let blogsData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentTypeId = 41 order by UNIX_TIMESTAMP(CreatedOn) DESC",
  });

  let subscribers = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_subscribers",
  });

  let queries = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_queries",
  });

  res.send({
    blogsData,
    subscribers,
    queries,
  });
});

app.get("/pages/:pageSlug", async function (req, res) {
  const pageSlug = req.params.pageSlug;
  let pageData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_pages WHERE PageSlug = '/" + pageSlug + "'",
  });

  let sectionData = [];

  if (pageSlug === "privacy-policy") {
    sectionData = await mysqlQuery(con, {
      sql: "SELECT * FROM rm_content WHERE ContentTypeId = 45",
    });
  } else if (pageSlug === "terms-&-conditions") {
    sectionData = await mysqlQuery(con, {
      sql: "SELECT * FROM rm_content WHERE ContentTypeId = 46",
    });
  } else if (pageSlug === "about-us") {
    sectionData = await mysqlQuery(con, {
      sql: "SELECT * FROM rm_content WHERE ContentTypeId = 43",
    });
  } else {
    sectionData = await mysqlQuery(con, {
      sql:
        "SELECT * FROM rm_content WHERE PageId = " +
        pageData[0].PageId +
        " AND ContentTypeId != 38",
    });
    sectionData.map(async (ele) => {
      let contentData = await mysqlQuery(con, {
        sql:
          "SELECT ContentSlug from rm_content_types WHERE ContentTypeId = " +
          ele.ContentTypeId,
      });
      if (ele.ContentTypeId === 40 || ele.ContentTypeId === 41) {
        ele.PageSlug = ele.ContentSlug;
      }
      ele.ContentSlug = contentData[0].ContentSlug;
    });
  }

  let serviceData = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_content WHERE PageId = " +
      pageData[0].PageId +
      " AND ContentTypeId = 38",
  });

  let blogsData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentTypeId = 41 order by UNIX_TIMESTAMP(CreatedOn) DESC LIMIT 6 ",
  });

  let achievementsData = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_content WHERE PageId = " +
      pageData[0].PageId +
      " AND ContentTypeId = 7",
  });

  let studyData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentTypeId = 40",
  });

  if (achievementsData.length > 0) {
    let achievements = await mysqlQuery(con, {
      sql:
        "SELECT * FROM rm_content_details WHERE ContentId = " +
        achievementsData[0].ContentId,
    });

    achievementsData[0]["achievements"] = achievements;
  }

  let categories = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentTypeId = 44",
  });

  let testimonialData = [];

  await asyncForEach(categories, async (ele) => {
    let testimonials = await mysqlQuery(con, {
      sql:
        "SELECT * FROM rm_content_details WHERE ContentId = " + ele.ContentId,
    });

    if (testimonials.length > 0) {
      testimonials.map((data) => {
        testimonialData.push(data);
      });
    }
  });

  res.send({
    pageData: pageData[0],
    sectionData,
    serviceData,
    studyData,
    blogsData,
    testimonialData,
    categories,
    achievementsData:
      achievementsData[0] && achievementsData[0]["achievements"],
  });
});

app.get("/services/:slug", async function (req, res) {
  const pageSlug = req.params.slug;
  let pageData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_pages WHERE PageSlug = '/" + pageSlug + "'",
  });

  let servicePageData = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_content WHERE PageId = " +
      pageData[0].PageId +
      " AND ContentTypeId = 4",
  });

  let serviceData = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_content WHERE PageId = " +
      pageData[0].PageId +
      " AND ContentTypeId = 38",
  });

  res.send({
    serviceData: serviceData,
    servicePageData: servicePageData[0],
  });
});

app.get("/services/:userType/:serviceName", async function (req, res) {
  const { userType, serviceName } = req.params;

  let serviceSlug = userType + "/services/" + serviceName;

  let serviceData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentSlug = '" + serviceSlug + "'",
  });

  let servicePrograms = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_content_details WHERE ContentId = " +
      serviceData[0].ContentId,
  });

  res.send({
    serviceData: serviceData[0],
    servicePrograms,
  });
});

app.post("/services/edit/:slug", async function (req, res) {
  const { slug } = req.params;

  const formData = req.body;

  let serviceSlug = "/services/" + slug;

  let serviceData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentSlug = '" + serviceSlug + "'",
  });

  const contentSlug = formData.ContentSlug;

  delete formData.ContentSlug;

  let updateString = Object.keys(formData).map((key) => {
    return `${key} = "${encodeHTML(formData[key])}"`;
  });

  updateData = await mysqlQuery(con, {
    sql: `UPDATE rm_content SET ${updateString} WHERE ContentId = "${serviceData[0].ContentId}"`,
  });

  console.log(updateData);

  res.send({
    status: 200,
    message: "Data updated successfully",
  });
});

app.post(
  "/editService/:userType/:slug/:contentSlug",
  upload.single("Image1"),
  async function (req, res) {
    const { userType, slug, contentSlug } = req.params;

    const { body, file } = req;

    console.log({ body, file });

    const formData = req.body;

    let serviceSlug = userType + "/services/" + slug;

    let serviceData = await mysqlQuery(con, {
      sql: "SELECT * FROM rm_content WHERE ContentSlug = '" + serviceSlug + "'",
    });

    delete formData.ContentSlug;

    let updateData = "";
    if (contentSlug === "servicePrograms") {
      let contentData = Object.keys(formData).map((key) => {
        let data = {};
        data.ContentDetailId = key;
        if (formData[key].ContentTitle) {
          data.ContentTitle = formData[key].ContentTitle;
        }
        if (formData[key].ContentDescription) {
          data.ContentDescription = formData[key].ContentDescription;
        }

        return data;
      });

      contentData.map(async (ele) => {
        let updateString = Object.keys(ele).map((key) => {
          return `${key} = "${encodeHTML(ele[key])}"`;
        });
        updateData = await mysqlQuery(con, {
          sql: `UPDATE rm_content_details SET ${updateString} WHERE ContentDetailId = "${ele.ContentDetailId}"`,
        });
      });
    } else if (contentSlug === "serviceData") {
      console.log("form data", formData);
      let data = {};
      let contentData = [];
      if (Object.keys(formData).length > 0) {
        contentData = Object.keys(formData).map((key) => {
          data[key] = formData[key];
          data.Image1 = req?.file?.filename;
          return data;
        });
      } else {
        contentData.push({ Image1: req?.file?.filename });
      }

      console.log("content data", contentData);

      let updateString = Object.keys(contentData[0]).map((key) => {
        console.log("data key", contentData[0][key]);
        if (contentData[0][key] !== undefined) {
          return `${key} = "${encodeHTML(contentData[0][key])}"`;
        }
      });
      console.log("update string", updateString);
      updateData = await mysqlQuery(con, {
        sql: `UPDATE rm_content SET ${updateString.filter(Boolean)} WHERE ContentSlug = "${serviceSlug}"`,
      });
    } else {
      let updateString = Object.keys(formData).map((key) => {
        return `${key} = "${encodeHTML(formData[key])}"`;
      });

      updateData = await mysqlQuery(con, {
        sql: `UPDATE rm_content SET ${updateString} WHERE ContentId = "${serviceData[0].ContentId}"`,
      });
    }

    console.log(updateData);

    res.send({
      status: 200,
      message: "Data updated successfully",
    });
  }
);

app.post(
  "/editStudy/:userType/:slug/:contentSlug",
  upload.single("ContentImage"),
  async function (req, res) {
    const { userType, slug } = req.params;

    const { body, file } = req;

    console.log({ body, file });

    const formData = req.body;

    let serviceSlug = userType + "/case-studies/" + slug;

    let serviceData = await mysqlQuery(con, {
      sql: "SELECT * FROM rm_content WHERE ContentSlug = '" + serviceSlug + "'",
    });

    const contentSlug = formData.ContentSlug;

    delete formData.ContentSlug;

    let updateData = "";
    if (contentSlug === "studyDetails") {
      console.log("form data", formData);
      let data = {};
      let contentData = Object.keys(formData).map((key) => {
        data[key] = formData[key];
        data.ContentImage = req?.file?.filename;
        return data;
      });
      console.log("content data", contentData);

      let updateString = Object.keys(contentData[0]).map((key) => {
        console.log("data key", contentData[0][key]);
        if (contentData[0][key] !== undefined) {
          return `${key} = "${encodeHTML(contentData[0][key])}"`;
        }
      });
      console.log("update string", updateString);
      updateData = await mysqlQuery(con, {
        sql: `UPDATE rm_content_details SET ${updateString.filter(Boolean)} WHERE ContentDetailId = "${contentData[0].ContentDetailId}"`,
      });
    } else {
      console.log("form data", formData);
      let updateString = Object.keys(formData).map((key) => {
        return `${key} = "${encodeHTML(formData[key])}"`;
      });

      updateData = await mysqlQuery(con, {
        sql: `UPDATE rm_content SET ${updateString} WHERE ContentId = "${serviceData[0].ContentId}"`,
      });
    }

    console.log(updateData);

    res.send({
      status: 200,
      message: "Data updated successfully",
    });
  }
);

app.get("/services/:slug", async function (req, res) {
  const pageSlug = req.params.slug;
  let pageData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_pages WHERE PageSlug = '/" + pageSlug + "'",
  });

  let servicePageData = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_content WHERE PageId = " +
      pageData[0].PageId +
      " AND ContentTypeId = 4",
  });

  let serviceData = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_content WHERE PageId = " +
      pageData[0].PageId +
      " AND ContentTypeId = 38",
  });

  res.send({
    serviceData: serviceData,
    servicePageData: servicePageData[0],
  });
});

app.get("/about", async function (req, res) {
  const pageSlug = req.params.userType + "/about";

  let pageData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE Heading1 = 'Our Story'",
  });

  let coreValues = await mysqlQuery(con, {
    sql: "SELECT * from rm_content WHERE Heading1 = 'Core Values'",
  });

  let visionMission = await mysqlQuery(con, {
    sql: "SELECT * from rm_content WHERE (Heading1 = 'Mission' OR Heading1 = 'Vision')",
  });

  let awards = await mysqlQuery(con, {
    sql: "SELECT * from rm_content WHERE Heading1 = 'Awards'",
  });

  let partners = await mysqlQuery(con, {
    sql: "SELECT * from rm_content WHERE Heading1 = 'Partners' ",
  });

  let achievementsData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE PageId = 2 AND ContentTypeId = 7",
  });

  if (achievementsData.length > 0) {
    let achievements = await mysqlQuery(con, {
      sql:
        "SELECT * FROM rm_content_details WHERE ContentId = " +
        achievementsData[0].ContentId,
    });

    achievementsData[0]["achievements"] = achievements;
  }

  res.send({
    pageData: pageData[0],
    coreValues,
    visionMission,
    awards,
    partners,
    achievementsData,
    // achievements,
  });
});

app.get("/:slug/case-studies", async function (req, res) {
  const pageSlug = req.params.slug;
  let pageData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_pages WHERE PageSlug = '/" + pageSlug + "'",
  });

  let StudyPageData = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_content WHERE PageId = " +
      pageData[0].PageId +
      " AND ContentTypeId = 6",
  });

  let studyDetails = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_content WHERE ContentTypeId = 40 AND PageId = " +
      pageData[0].PageId,
  });

  res.send({
    studyData: studyDetails,
    pageData: StudyPageData[0],
  });
});

app.get("/:slug/case-studies", async function (req, res) {
  const pageSlug = req.params.slug;
  let pageData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_pages WHERE PageSlug = '/" + pageSlug + "'",
  });

  let StudyPageData = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_content WHERE PageId = " +
      pageData[0].PageId +
      " AND ContentTypeId = 6",
  });

  let studyDetails = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentTypeId = 40",
  });

  res.send({
    studyData: studyDetails,
    pageData: StudyPageData[0],
  });
});

app.get(
  "/case-studies/:userType/case-studies/:slug",
  async function (req, res) {
    const { slug, userType } = req.params;

    const searchSlug = userType + "/case-studies/" + slug;

    let studyData = await mysqlQuery(con, {
      sql: "SELECT * FROM rm_content WHERE ContentSlug = '" + searchSlug + "'",
    });

    let studyDetails = await mysqlQuery(con, {
      sql:
        "SELECT * FROM rm_content_details WHERE ContentId = " +
        studyData[0].ContentId,
    });

    res.send({
      studyData: studyData[0],
      studyDetails,
    });
  }
);

app.post("/case-studies/edit/:slug", async function (req, res) {
  const { slug } = req.params;

  const formData = req.body;

  let serviceSlug = "/caseStudies/" + slug;

  let serviceData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentSlug = '" + serviceSlug + "'",
  });

  const contentSlug = formData.ContentSlug;

  delete formData.ContentSlug;

  let updateString = Object.keys(formData).map((key) => {
    return `${key} = "${encodeHTML(formData[key])}"`;
  });

  updateData = await mysqlQuery(con, {
    sql: `UPDATE rm_content SET ${updateString} WHERE ContentId = "${serviceData[0].ContentId}"`,
  });

  console.log(updateData);

  res.send({
    status: 200,
    message: "Data updated successfully",
  });
});

app.post("/editPage/:slug", async function (req, res) {
  let formData = req.body;
  const ContentSlug = formData.ContentSlug;
  const pageSlug = req.params.slug;
  let pageData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_pages WHERE PageSlug = '/" + pageSlug + "'",
  });

  if (formData.ContentSlug === "/metadata" || pageSlug === "about-us") {
    delete formData.ContentSlug;
  }

  let updateString = Object.keys(formData).map((key) => {
    return `${key} = "${encodeHTML(formData[key])}"`;
  });

  let updateData = "";

  if (ContentSlug === "/metadata") {
    updateData = await mysqlQuery(con, {
      sql: `UPDATE rm_pages SET ${updateString} WHERE PageSlug = "/${pageSlug}"`,
    });
  } else if (pageSlug === "contact-us" || pageSlug === "about-us") {
    updateData = await mysqlQuery(con, {
      sql: `UPDATE rm_content SET ${updateString} WHERE ContentId = "${formData.ContentId}"`,
    });
  } else if (pageSlug === "privacy-policy") {
    updateData = await mysqlQuery(con, {
      sql: `UPDATE rm_content SET ${updateString} WHERE ContentTypeId = 45`,
    });
  } else if (pageSlug === "terms-&-conditions") {
    updateData = await mysqlQuery(con, {
      sql: `UPDATE rm_content SET ${updateString} WHERE ContentTypeId = 46`,
    });
  } else {
    updateData = await mysqlQuery(con, {
      sql: `UPDATE rm_content SET ${updateString} WHERE ContentSlug = "${formData.ContentSlug}" AND PageId = ${pageData[0].PageId}`,
    });
  }

  console.log(updateData);

  if (updateData) {
    res.send({
      status: 200,
      message: "Data updated successfully",
    });
  } else {
    res.send({
      status: 500,
      message:
        "Details could not be submitted at this time. Please try again after sometime.",
    });
  }
});

app.get("/queries", async function (req, res) {
  let queries = await mysqlQuery(con, {
    sql: "SELECT * from `rm_queries` ORDER BY CreatedAt DESC",
  });

  res.send({
    queries,
  });
});

app.post("/submit-query-form", async function (req, res) {
  const formData = req.body;

  let insertData = await mysqlQuery(con, {
    sql:
      "INSERT INTO `rm_queries` (`FullName`, `CompanyName`, `Email`, `PhoneNumber`, `Jobtitle`, `Services`, `ReferralSource`, `Comment`) VALUES ('" +
      formData.FullName +
      "', '" +
      formData.CompanyName +
      "', '" +
      formData.Email +
      "', '" +
      formData.PhoneNumber +
      "', '" +
      formData.JobTitle +
      "', '" +
      formData.Services +
      "', '" +
      formData.ReferralSource +
      "', '" +
      formData.Comment +
      "')",
  });

  if (insertData) {
    res.send({
      status: 200,
      message:
        "Thank you for submitting your details. We will contact your shortly.",
    });
  } else {
    res.send({
      status: 500,
      message:
        "Details could not be submitted at this time. Please try again after sometime.",
    });
  }
});

app.post("/subscribers", async function (req, res) {
  const formData = req.body;

  let insertData = await mysqlQuery(con, {
    sql:
      "INSERT INTO `rm_subscribers` (`SubscriberEmail`) VALUES ('" +
      formData.SubscriberEmail +
      "')",
  });

  if (insertData) {
    res.send({
      status: 200,
      message:
        "Thank you for submitting your details. We will contact your shortly.",
    });
  } else {
    res.send({
      status: 500,
      message:
        "Details could not be submitted at this time. Please try again after sometime.",
    });
  }
});

app.get("/blogs", async function (req, res) {
  let blogData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentTypeId = '41' order by UNIX_TIMESTAMP(CreatedOn)",
  });

  let blogDetails = [];

  await asyncForEach(blogData, async (ele) => {
    let data = await mysqlQuery(con, {
      sql:
        "SELECT * FROM rm_content_details WHERE ContentId = " + ele.ContentId,
    });

    blogDetails.push(data[0]);
    console.log("blog details", blogDetails);
  });

  res.send({
    blogData,
    blogDetails,
  });
});

app.get("/blogs/:slug", async function (req, res) {
  const { slug } = req.params;

  let blogData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentSlug = '" + slug + "'",
  });

  let blogDetails = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_content_details WHERE ContentId = " +
      blogData[0].ContentId,
  });

  res.send({
    blogData: blogData[0],
    blogDetails,
  });
});

app.post("/addBlog", upload.single("Image1"), async function (req, res) {
  const { body, file } = req;

  console.log({ body, file });

  const formData = req.body;

  let blogData = JSON.parse(formData.blogData);
  blogData.Image1 = req.file.filename;
  let blogDetails = JSON.parse(formData.blogDetails);
  let metadata = JSON.parse(formData.metadata);

  if (Object.keys(blogData).length > 0) {
    let updateData = await mysqlQuery(con, {
      sql:
        "INSERT into `rm_content` (`Heading1`,  `Heading2`, `Image1`, `ContentSlug`, `PageId`, `ContentTypeId`, `MetaTitle`, `MetaDescription`, `MetaKeywords`,`OGTitle`, `OGDescription`, `CreatedOn`) VALUES ('" +
        blogData.Heading1 +
        "', '" +
        blogData.Heading2 +
        "', '" +
        blogData.Image1 +
        "', '" +
        convertToSlug(blogData.Heading1) +
        "', '9', '41', '" +
        (metadata.MetaTitle || "") +
        "','" +
        (metadata.MetaDescription || "") +
        "','" +
        (metadata.MetaKeywords || "") +
        "','" +
        (metadata.OGTitle || "") +
        "','" +
        (metadata.OGDescription || "") +
        "', '" +
        (blogData.CreatedOn || "") +
        "')",
    });

    if (updateData && Object.keys(blogDetails).length > 0) {
      await mysqlQuery(con, {
        sql:
          "INSERT into `rm_content_details` (`ContentTitle`,  `ContentDescription`, `ContentId`) VALUES ('" +
          blogDetails.ContentTitle +
          "', '" +
          encodeHTML(blogDetails.ContentDescription) +
          "', '" +
          updateData.insertId +
          "')",
      });
    }
  }

  res.send({
    status: 200,
    message: "Data updated successfully",
  });
});

app.post(
  "/editBlog/:slug/:contentSlug",
  upload.single("Image1"),
  async function (req, res) {
    const { slug, contentSlug } = req.params;

    const { body, file } = req;

    console.log({ body, file });

    const formData = req.body;

    let blogData = await mysqlQuery(con, {
      sql: "SELECT * FROM rm_content WHERE ContentSlug = '" + slug + "'",
    });

    delete formData.ContentSlug;

    let updateData = "";
    if (contentSlug === "blogData") {
      console.log("form data", formData);
      let data = {};
      let contentData = [];
      if (Object.keys(formData).length > 0) {
        Object.keys(formData).map((key) => {
          data[key] = formData[key];
          data.Image1 = req?.file?.filename;
          contentData.push(data);
        });
      } else {
        contentData.push({
          Image1: req?.file?.filename,
        });
      }

      console.log("content data", contentData);

      let updateString = Object.keys(contentData[0]).map((key) => {
        console.log("data key", contentData[0][key]);
        if (contentData[0][key] !== undefined) {
          return `${key} = "${encodeHTML(contentData[0][key])}"`;
        }
      });
      console.log("update string", updateString);
      updateData = await mysqlQuery(con, {
        sql: `UPDATE rm_content SET ${updateString.filter(Boolean)} WHERE ContentSlug = "${slug}"`,
      });
    } else {
      console.log("form data", formData);
      let updateString = Object.keys(formData).map((key) => {
        return `${key} = "${encodeHTML(formData[key])}"`;
      });

      if (contentSlug === "metadata") {
        updateData = await mysqlQuery(con, {
          sql: `UPDATE rm_content SET ${updateString.filter(Boolean)} WHERE ContentSlug = "${slug}"`,
        });
      } else {
        updateData = await mysqlQuery(con, {
          sql: `UPDATE rm_content_details SET ${updateString} WHERE ContentId = "${blogData[0].ContentId}"`,
        });
      }
    }

    console.log(updateData);

    res.send({
      status: 200,
      message: "Data updated successfully",
    });
  }
);

app.get("/testimonialCategories", async function (req, res) {
  let categories = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentTypeId = 44",
  });

  res.send({
    categories,
  });
});

app.get("/testimonials/:id", async function (req, res) {
  let testimonialDetails = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_content_details WHERE ContentDetailId = " +
      req.params.id,
  });

  res.send({
    testimonialDetails,
  });
});

app.get("/testimonials", async function (req, res) {
  let categories = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentTypeId = 44",
  });

  let testimonialData = [];

  await asyncForEach(categories, async (ele) => {
    let testimonials = await mysqlQuery(con, {
      sql:
        "SELECT * FROM rm_content_details WHERE ContentId = " + ele.ContentId,
    });

    if (testimonials.length > 0) {
      testimonials.map((data) => {
        testimonialData.push(data);
      });
    }
  });

  res.send({
    categories,
    testimonialData,
  });
});

app.post(
  "/addTestimonial",
  upload.single("ContentImage"),
  async function (req, res) {
    const { body, file } = req;

    console.log({ body, file });

    const formData = req.body;

    let testimonialData = JSON.parse(formData.testimonialDetails);
    testimonialData.AuthorImage = req.file.filename;

    if (Object.keys(testimonialData).length > 0) {
      await mysqlQuery(con, {
        sql:
          "INSERT into `rm_content_details` (`ContentTitle`,  `ContentDescription`, `ContentId`, `AuthorImage`) VALUES ('" +
          testimonialData.ContentTitle +
          "', '" +
          testimonialData.ContentDescription +
          "', '" +
          testimonialData.ContentId +
          "', '" +
          testimonialData.AuthorImage +
          "')",
      });
    }

    res.send({
      status: 200,
      message: "Data updated successfully",
    });
  }
);

app.post(
  "/editTestimonial/:id",
  upload.single("ContentImage"),
  async function (req, res) {
    const { id } = req.params;
    const { body, file } = req;

    console.log({ body, file });

    const formData = req.body;

    let updateData = "";
    console.log("form data", formData);
    let data = {};
    let contentData = [];
    if (Object.keys(formData.testimonialDetails).length > 0) {
      Object.keys(formData.testimonialDetails).map((key) => {
        data[key] = formData.testimonialDetails[key];
        data.AuthorImage = req?.file?.filename;
        contentData.push(data);
      });
    } else {
      contentData.push({
        AuthorImage: req?.file?.filename,
      });
    }

    console.log("content data", contentData);

    let updateString = Object.keys(contentData[0]).map((key) => {
      console.log("data key", contentData[0][key]);
      if (contentData[0][key] !== undefined) {
        return `${key} = "${encodeHTML(contentData[0][key])}"`;
      }
    });
    console.log("update string", updateString);
    updateData = await mysqlQuery(con, {
      sql: `UPDATE rm_content_details SET ${updateString.filter(Boolean)} WHERE ContentDetailId = "${id}"`,
    });

    console.log(updateData);

    res.send({
      status: 200,
      message: "Data updated successfully",
    });
  }
);

app.post("/addEvent", upload.single("Image1"), async function (req, res) {
  const { body, file } = req;

  console.log({ body, file });

  const formData = req.body;

  let eventData = JSON.parse(formData.eventData);
  eventData.Image1 = req.file.filename;
  let eventSchedule = JSON.parse(formData.eventSchedule);
  let eventAgenda = JSON.parse(formData.eventAgenda);
  let updateData = "";
  if (Object.keys(eventData).length > 0) {
    updateData = await mysqlQuery(con, {
      sql:
        "INSERT into `rm_content` (`Heading1`,  `Heading2`, `SubHeading1`, `SubHeading2`, `Image1`, `PageId`, `ContentTypeId`, `ContentSlug`, `Address1`, `EventDate`, `Status`, `Description`) VALUES ('" +
        eventData.Heading1 +
        "', '" +
        eventData.Heading2 +
        "', '" +
        eventData.SubHeading1 +
        "', '" +
        eventData.SubHeading2 +
        "', '" +
        eventData.Image1 +
        "', '0', '47', '" +
        (eventData.ContentSlug || "") +
        "','" +
        (eventData.Address1 || "") +
        "','" +
        (eventData.EventDate || "") +
        "','" +
        eventData.Status +
        "','" +
        (eventData.Description || "") +
        "')",
    });
  }

  if (updateData && Object.keys(eventSchedule).length > 0) {
    eventSchedule.map(async (rowData) => {
      await mysqlQuery(con, {
        sql:
          "INSERT into `rm_event_schedule` (`Title`,  `Date`, `EventId`) VALUES ('" +
          rowData.Title +
          "', '" +
          rowData.Date +
          "', '" +
          updateData.insertId +
          "')",
      });
    });
  }

  if (updateData && Object.keys(eventAgenda).length > 0) {
    eventAgenda.map(async (rowData) => {
      await mysqlQuery(con, {
        sql:
          "INSERT into `rm_event_agenda` (`Title`,  `Time`, `Description`, `EventId`) VALUES ('" +
          rowData.Title +
          "', '" +
          rowData.Time +
          "', '" +
          rowData.Description +
          "', '" +
          updateData.insertId +
          "')",
      });
    });
  }

  res.send({
    status: 200,
    message: "Data updated successfully",
  });
});

app.get("/events/:id", async function (req, res) {
  let eventData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentId = '" + req.params.id + "'",
  });

  console.log("event data", eventData);
  let eventSchedule = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_event_schedule WHERE EventId = " +
      eventData[0].ContentId,
  });
  let eventAgenda = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_event_agenda WHERE EventId = " + eventData[0].ContentId,
  });

  res.send({
    eventData,
    eventSchedule,
    eventAgenda,
  });
});

app.get("/events", async function (req, res) {
  let eventData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content where ContentTypeId = 47",
  });

  res.send({
    eventsData: eventData,
  });
});

app.get("/events/hackathon/:eventCategory/:slug", async function (req, res) {
  let eventSlug =
    "hackathon/" + req.params.eventCategory + "/" + req.params.slug;
  let eventData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentSlug = '" + eventSlug + "/'",
  });

  console.log("event data", eventData);
  let eventSchedule = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_event_schedule WHERE EventId = " +
      eventData[0].ContentId,
  });
  let eventAgenda = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_event_agenda WHERE EventId = " + eventData[0].ContentId,
  });

  res.send({
    eventData,
    eventSchedule,
    eventAgenda,
  });
});

app.listen(6069);
