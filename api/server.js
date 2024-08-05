var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
const e = require("express");
var app = express();

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

//Allow all requests from all domains & localhost
app.all("/*", function (req, res, next) {
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

app.get("/pages", function (req, res) {
  con.query("SELECT * FROM rm_pages", function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/pages/:pageSlug", async function (req, res) {
  const pageSlug = req.params.pageSlug;
  let pageData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_pages WHERE PageSlug = '/" + pageSlug + "'",
  });

  let sectionData = await mysqlQuery(con, {
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

  let serviceData = await mysqlQuery(con, {
    sql:
      "SELECT * FROM rm_content WHERE PageId = " +
      pageData[0].PageId +
      " AND ContentTypeId = 38",
  });

  let blogsData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentTypeId = 41",
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

  res.send({
    pageData: pageData[0],
    sectionData,
    serviceData,
    studyData,
    blogsData,
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

app.get("/:userType/about", async function (req, res) {
  const pageSlug = req.params.userType + "/about";

  let pageData = await mysqlQuery(con, {
    sql: "SELECT * FROM rm_content WHERE ContentSlug = '" + pageSlug + "'",
  });

  res.send({
    pageData: pageData[0],
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

app.listen(6069);
