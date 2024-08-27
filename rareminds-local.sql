-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.36 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for rareminds
CREATE DATABASE IF NOT EXISTS `rareminds` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `rareminds`;

-- Dumping structure for table rareminds.ci_sessions
DROP TABLE IF EXISTS `ci_sessions`;
CREATE TABLE IF NOT EXISTS `ci_sessions` (
  `id` varchar(40) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `timestamp` int unsigned NOT NULL DEFAULT '0',
  `data` blob NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ci_sessions_timestamp` (`timestamp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table rareminds.ci_sessions: ~0 rows (approximately)
DELETE FROM `ci_sessions`;

-- Dumping structure for table rareminds.rm_admin_users
DROP TABLE IF EXISTS `rm_admin_users`;
CREATE TABLE IF NOT EXISTS `rm_admin_users` (
  `AdminUserId` int NOT NULL AUTO_INCREMENT,
  `AdminLoginId` varchar(255) NOT NULL,
  `AdminLoginPassword` varchar(255) NOT NULL,
  `AdminFirstName` varchar(255) NOT NULL,
  `AdminLastName` varchar(255) NOT NULL,
  `AdminUserRole` int NOT NULL,
  `status` int NOT NULL DEFAULT '1',
  `CreatedOn` datetime NOT NULL,
  `ModifiedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `CreatedBy` tinyint NOT NULL,
  `ModifiedBy` tinyint NOT NULL,
  PRIMARY KEY (`AdminUserId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Dumping data for table rareminds.rm_admin_users: ~1 rows (approximately)
DELETE FROM `rm_admin_users`;
INSERT INTO `rm_admin_users` (`AdminUserId`, `AdminLoginId`, `AdminLoginPassword`, `AdminFirstName`, `AdminLastName`, `AdminUserRole`, `status`, `CreatedOn`, `ModifiedOn`, `CreatedBy`, `ModifiedBy`) VALUES
	(1, 'kapil.pant@tecvololabs.com', '$2a$12$3gQg/A/pyv.DRM6TTSg/8.fLeu6ChjCSI4Z4MxztM64Wp1RC18O7i', 'Kapil', 'Pant', 1, 1, '2024-08-26 19:08:40', '2024-08-26 13:49:43', 1, 1);

-- Dumping structure for table rareminds.rm_blogs
DROP TABLE IF EXISTS `rm_blogs`;
CREATE TABLE IF NOT EXISTS `rm_blogs` (
  `ServiceId` int NOT NULL AUTO_INCREMENT,
  `ServiceTitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `ServiceSlug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `ServiceUserType` int NOT NULL DEFAULT '0',
  `ServiceDescription` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ServiceShortDescription` longtext NOT NULL,
  `CreatedOn` datetime NOT NULL DEFAULT (now()),
  `ModifiedOn` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ServiceId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table rareminds.rm_blogs: ~0 rows (approximately)
DELETE FROM `rm_blogs`;

-- Dumping structure for table rareminds.rm_cities
DROP TABLE IF EXISTS `rm_cities`;
CREATE TABLE IF NOT EXISTS `rm_cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `state_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table rareminds.rm_cities: ~0 rows (approximately)
DELETE FROM `rm_cities`;

-- Dumping structure for table rareminds.rm_contacts
DROP TABLE IF EXISTS `rm_contacts`;
CREATE TABLE IF NOT EXISTS `rm_contacts` (
  `ContactId` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(250) NOT NULL,
  `FirstName` varchar(250) NOT NULL,
  `Resume` varchar(250) NOT NULL,
  `Resource` varchar(250) NOT NULL,
  `Phone` varchar(250) NOT NULL,
  `Email` varchar(550) NOT NULL,
  `Company` varchar(550) NOT NULL,
  `Designation` varchar(550) NOT NULL,
  `Message` text NOT NULL,
  `Page` text NOT NULL,
  `QueryType` text NOT NULL,
  `IpAddress` varchar(255) NOT NULL,
  `Referer` text NOT NULL,
  `CreatedOn` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ModifiedOn` date DEFAULT NULL,
  PRIMARY KEY (`ContactId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- Dumping data for table rareminds.rm_contacts: 0 rows
DELETE FROM `rm_contacts`;
/*!40000 ALTER TABLE `rm_contacts` DISABLE KEYS */;
/*!40000 ALTER TABLE `rm_contacts` ENABLE KEYS */;

-- Dumping structure for table rareminds.rm_content
DROP TABLE IF EXISTS `rm_content`;
CREATE TABLE IF NOT EXISTS `rm_content` (
  `ContentId` int NOT NULL AUTO_INCREMENT,
  `PageId` int DEFAULT NULL,
  `ContentTypeId` int DEFAULT NULL,
  `Heading1` text,
  `Heading2` text,
  `SubHeading1` text,
  `SubHeading2` text,
  `Image1` text,
  `Image2` text,
  `Image3` text,
  `Description` longtext,
  `ContentDetails` longtext,
  `ContentSlug` longtext,
  `ContentAcronym` char(50) DEFAULT NULL,
  `Address1` mediumtext,
  `Address2` mediumtext,
  `Contact1` mediumtext,
  `Contact2` mediumtext,
  `EmailAddress` mediumtext,
  `CreatedOn` datetime DEFAULT (curdate()),
  `ModifiedOn` timestamp NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
  `MetaTitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `MetaDescription` varchar(255) DEFAULT NULL,
  `MetaKeywords` varchar(255) DEFAULT NULL,
  `OGTitle` varchar(255) DEFAULT NULL,
  `OGDescription` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ContentId`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table rareminds.rm_content: ~58 rows (approximately)
DELETE FROM `rm_content`;
INSERT INTO `rm_content` (`ContentId`, `PageId`, `ContentTypeId`, `Heading1`, `Heading2`, `SubHeading1`, `SubHeading2`, `Image1`, `Image2`, `Image3`, `Description`, `ContentDetails`, `ContentSlug`, `ContentAcronym`, `Address1`, `Address2`, `Contact1`, `Contact2`, `EmailAddress`, `CreatedOn`, `ModifiedOn`, `MetaTitle`, `MetaDescription`, `MetaKeywords`, `OGTitle`, `OGDescription`) VALUES
	(1, 1, 1, 'Unlock your company\'s full potential with Rareminds - Your ultimate ally in corporate domination.', 'Hiring for our Sales & Marketing teams became more accessible.', 'Gaurav G', 'Jaguar, GMT Manager,', NULL, NULL, NULL, NULL, NULL, '/hero', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-26 17:36:56', NULL, NULL, NULL, NULL, NULL),
	(2, 1, 2, 'Form Fill: Unlock Your Potential!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:10:57', NULL, NULL, NULL, NULL, NULL),
	(3, 1, 3, 'Why Us?', NULL, NULL, NULL, NULL, NULL, NULL, '&lt;p&gt;Are you tired of battling the same old &quot;adulting&quot; dilemmas at work? Sick of drowning in corporate lingo and desperate for a team that&apos;s as diverse as it is dynamic? And setting goals only to watch your team swat them away like flies? Look no further than Rareminds!&lt;/p&gt;', NULL, '/whyus', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-16 23:56:30', NULL, NULL, NULL, NULL, NULL),
	(4, 1, 4, 'Our Services', NULL, NULL, NULL, NULL, NULL, NULL, '&lt;p&gt;Tired of watching top talent slip through your fingers like sand in an hourglass? Fed up with trying to balance diversity like a wire walker on a tightrope? Sick of setting goals only to watch your team dismiss them like confetti at a parade? Well, folks, we&apos;ve been there, done that and come out shining like diamonds.&lt;br&gt;&lt;br&gt;Introducing RareMinds, the ultimate talent management game-changer. We&apos;re not just another vendor; we&apos;re your secret ingredient for success...&lt;/p&gt;', NULL, '/services/corporate', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-20 12:31:05', 'Rareminds - Corporate Services', 'Rareminds services tailored to enhance corporate performance and foster growth.', 'corporate, services, performance', 'Rareminds - Corporate Services', 'Explore services designed to enhance corporate performance and foster growth with Rareminds.'),
	(5, 1, 6, 'Case Studies', NULL, NULL, NULL, NULL, NULL, NULL, 'Prepare to be blown away! Our success stories showcase one dazzling case study from each industry we\'ve partnered with. Dive deep into the functionality and evolution of these triumphs, meticulously curated to resonate with businesses like yours. Stay tuned as we unleash the power of these narratives to inspire and elevate your journey to success.', NULL, '/caseStudies/corporate', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-22 10:49:25', 'Rareminds - Case Studies - Corporate', 'Explore Rareminds case studies showcasing successful projects and solutions implemented for corporate clients.', 'case studies, corporate,\nsuccess', 'Case Studies - Corporate', 'Discover how Rareminds innovative solutions have driven success for corporate clients in these insightful case studies.'),
	(6, 2, 1, 'Unlock your company\'s full potential with Rareminds - Your ultimate ally in corporate domination.', 'Hiring for our Sales & Marketing teams became more accessible.', 'Abhilash. P', 'Jaguar, GMT Manager,', NULL, NULL, NULL, NULL, NULL, '/hero', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-16 22:50:37', NULL, NULL, NULL, NULL, NULL),
	(7, 2, 2, 'Form Fill: Unlock Your Potential!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:10:57', NULL, NULL, NULL, NULL, NULL),
	(8, 3, 3, 'Why Us?', NULL, NULL, NULL, NULL, NULL, NULL, '<p><span style="font-weight: 400;">Are your students ready to conquer the real world beyond grades and vivas? Do they possess the skills to shine as top-notch candidates with exceptional communication and emotional intelligence? It\'s not just about academic prowess anymore; developing soft skills is equally vital for students to thrive in today\'s workforce. But how can you ensure your students have the right skills to excel in their careers?</span></p>', NULL, '/whyUs', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-16 20:47:38', NULL, NULL, NULL, NULL, NULL),
	(9, 2, 4, 'Our Services', NULL, NULL, NULL, NULL, NULL, NULL, '<p>Tired of watching top talent slip through your fingers like sand in an hourglass? Fed up with trying to balance diversity like a wire walker on a tightrope? Sick of setting goals only to watch your team dismiss them like confetti at a parade? Well, folks, we\'ve been there, done that and come out shining like diamonds.<br /><br />Introducing RareMinds, the ultimate talent management game-changer. We\'re not just another vendor; we\'re your secret ingredient for success.</p>', NULL, '/services/institution', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-20 12:29:30', 'Rareminds - Government Services', 'Explore Rareminds range of services catered to the specific needs of government organizations.', 'government, services, specific needs', 'Rareminds - Government Services', 'Discover a comprehensive range of services specifically tailored to meet the needs of government organizations with Rareminds.'),
	(10, 2, 6, 'Case Studies', NULL, NULL, NULL, NULL, NULL, NULL, 'Prepare to be blown away! Our success stories showcase one dazzling case study from each industry we\'ve partnered with. Dive deep into the functionality and evolution of these triumphs, meticulously curated to resonate with businesses like yours. Stay tuned as we unleash the power of these narratives to inspire and elevate your journey to success.', NULL, '/caseStudies/institution', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-20 12:31:40', 'Rareminds - Case Studies - Government', 'Rareminds presents case studies highlighting successful projects and solutions tailored for government organizations.', 'case studies, government, success', 'Case Studies - Government', 'Explore Rareminds case studies showcasing successful projects and solutions implemented for government organizations.'),
	(11, 3, 1, 'Rareminds: Empowering Students to Reach New Heights', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '/hero', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-16 20:48:06', NULL, NULL, NULL, NULL, NULL),
	(12, 3, 2, 'Form Fill: Unlock Your Potential!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:10:57', NULL, NULL, NULL, NULL, NULL),
	(13, 2, 3, 'Why Us?', NULL, NULL, NULL, NULL, NULL, NULL, '<h2><span style="font-weight: 400;">Are you dedicated to enhancing facilities in your jurisdiction? Do you aspire to transform your region into a thriving center of growth and opportunity? At Rareminds, we\'re committed to supporting your vision.</span></h2>', NULL, '/whyUs', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-16 20:48:13', NULL, NULL, NULL, NULL, NULL),
	(14, 3, 4, 'Our Services', NULL, NULL, NULL, NULL, NULL, NULL, '<p>Tired of watching top talent slip through your fingers like sand in an hourglass? Fed up with trying to balance diversity like a wire walker on a tightrope? Sick of setting goals only to watch your team dismiss them like confetti at a parade? Well, folks, we\'ve been there, done that and come out shining like diamonds.<br /><br />Introducing RareMinds, the ultimate talent management game-changer. We\'re not just another vendor; we\'re your secret ingredient for success.</p>', NULL, '/services/government', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-20 12:29:37', 'Rareminds - Institutional Services', 'Unlock the potential of your institution with our specialized services tailored to your unique needs.', 'institution, services, potential, unique needs', 'Rareminds - Institutional Services', 'Rareminds offers specialized services tailored to unlock the potential of your institution and cater to its unique needs.'),
	(15, 3, 6, 'Case Studies', NULL, NULL, NULL, NULL, NULL, NULL, 'Prepare to be blown away! Our success stories showcase one dazzling case study from each industry we\'ve partnered with. Dive deep into the functionality and evolution of these triumphs, meticulously curated to resonate with businesses like yours. Stay tuned as we unleash the power of these narratives to inspire and elevate your journey to success.', NULL, '/caseStudies/government', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-20 12:31:45', 'Rareminds - Case Studies - Institution', 'Explore Rareminds case studies showcasing successful projects and solutions tailored for educational and non-profit institutions.', 'case studies, institution, success', 'Case Studies - Institution', 'Discover how Rareminds innovative solutions have contributed to the success of educational and non-profit institutions in these insightful case studies.'),
	(16, 4, 1, 'Get ready to unleash the boundless potential of our nation\'s future.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '/hero', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-16 20:48:38', NULL, NULL, NULL, NULL, NULL),
	(17, 4, 2, 'Form Fill: Unlock Your Potential!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:10:57', NULL, NULL, NULL, NULL, NULL),
	(18, 4, 3, 'Why Us?', NULL, NULL, NULL, NULL, NULL, NULL, '<h2><span style="font-weight: 400;">Are critical thinking, decision-making and problem-solving your top three priorities to ensure your students stand out? Want them to be more than just book-smart? Well, buckle up because Rareminds is here to turn your students into tomorrow\'s leaders! We offer an annual program and summer camp activities to help your students navigate technology-ridden evenings and foster the attention and emotional strength needed to conquer the world.</span></h2>', NULL, '/whyUs', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-16 20:48:47', NULL, NULL, NULL, NULL, NULL),
	(19, 4, 4, 'Our Services', NULL, NULL, NULL, NULL, NULL, NULL, '<p>Tired of watching top talent slip through your fingers like sand in an hourglass? Fed up with trying to balance diversity like a wire walker on a tightrope? Sick of setting goals only to watch your team dismiss them like confetti at a parade? Well, folks, we\'ve been there, done that and come out shining like diamonds.<br /><br />Introducing RareMinds, the ultimate talent management game-changer. We\'re not just another vendor; we\'re your secret ingredient for success.</p>', NULL, '/services/schools', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-20 12:29:44', 'Rareminds - Tailored School Services', 'Rareminds offers specialized services designed to meet the unique needs of schools, fostering educational growth and development.', 'school, services, specialized, educational growth', 'Rareminds - School Services', 'Rareminds provides specialized services tailored to meet the unique needs of schools, fostering educational growth and development.'),
	(20, 4, 6, 'Case Studies', NULL, NULL, NULL, NULL, NULL, NULL, 'Prepare to be blown away! Our success stories showcase one dazzling case study from each industry we\'ve partnered with. Dive deep into the functionality and evolution of these triumphs, meticulously curated to resonate with businesses like yours. Stay tuned as we unleash the power of these narratives to inspire and elevate your journey to success.', NULL, '/caseStudies/schools', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-20 12:31:49', 'Rareminds - Case Studies - School', 'Delve into Rareminds case studies showcasing successful projects and solutions implemented for schools.', 'case studies, school, success', 'Case Studies - School', 'Discover how Rareminds innovative solutions have driven success for schools in these insightful case studies.'),
	(21, 1, 38, 'Talent Acquisition', NULL, 'Ready to turn the corporate gibberish into action-packed outcomes? Our talent acquisition solutions are…', NULL, NULL, NULL, NULL, 'Ready to turn the corporate gibberish into action-packed outcomes? Our talent acquisition solutions are laser-focused on meeting your unique business goals and requirements. We\'ll dive deep into your needs, crafting a personalised recruitment strategy that hits the bullseye. Our streamlined process ensures access to the cream of the crop candidates, saving you precious time and resources. Elevate your recruitment game with our targeted talent acquisition solutions, designed to deliver top-tier candidates efficiently and cost-effectively. Let\'s transform your talent acquisition dreams into reality today!', NULL, 'corporate/services/talent-acquisition', 'TA', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-05 20:03:42', 'Rareminds - Corporate Talent Acquisition Services | Organizational Consulting', 'Rareminds specializes in corporate talent acquisition solutions tailored to identify and onboard top talent, driving organizational success.', 'corporate, talent acquisition, top talent', 'Rareminds - Corporate Talent Acquisition', 'Rareminds offers specialized corporate talent acquisition solutions to identify and onboard top talent, driving organizational success.'),
	(22, 1, 38, 'Talent Development', NULL, 'Are you facing a high attrition rate? Unsure of how to retain talent and create a high performing team? We\'ve got…', NULL, NULL, NULL, NULL, '<p><span style="font-weight: 400;">Are you facing a high attrition rate? Unsure of how to retain talent and create a high performing team? We\'ve got our ears to the ground, listening keenly to the pulse of organisations like yours. If you are finding yourself in the middle of the ocean with challenges like - How to cover the skills gap? What should we do about leadership development? How to retain resources with budget constraints? How to integrate technology into processes without hampering productivity? And of all, how to measure the impact of all these? Then, our meticulously crafted training programs for Talent Development Programs like Leadership Building, Communication Skills Enhancement, Upskilling and Reskilling will help your organisation reach on the right trajectory.&nbsp;</span></p>', NULL, 'corporate/services/talent-development', 'TD', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-05 20:04:36', 'Rareminds - Corporate Talent Development | Career Development | Learning & Development Programs', 'Rareminds provides specialized talent development solutions to empower corporate clients in nurturing the skills of their workforce.', 'corporate, talent development, workforce skills', 'Rareminds - Corporate Talent Development', 'Rareminds specializes in providing tailored talent development solutions to empower corporate clients in nurturing the skills of their workforce.'),
	(23, 1, 38, 'Talent Management', NULL, 'Ready to turn the corporate gibberish into action-packed outcomes? Our talent management solutions are…', NULL, NULL, NULL, NULL, '<p><span style="font-weight: 400;">Ready to turn the corporate gibberish into action-packed outcomes? Our talent management solutions are the superpowers needed to solve the everyday talent management challenges.&nbsp;</span></p>', NULL, 'corporate/services/talent-management', 'TM', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-05 20:05:25', 'Rareminds - Corporate Talent Management | Succession Planning | Competency Management', 'Rareminds offers comprehensive talent management solutions tailored for corporate clients to foster employee development and retention.', 'corporate, talent management, employee development', 'Rareminds - Corporate Talent Management', 'Rareminds provides comprehensive talent management solutions tailored for corporate clients to foster employee development and retention.'),
	(24, 3, 38, 'Talent Development', NULL, 'Ready to unlock the hidden talents of your students and propel them towards success? Our services are…', NULL, NULL, NULL, NULL, 'Ready to unlock the hidden talents of your students and propel them towards success? Our services are tailored to cater to your institution\'s unique needs including capacity building for faculties. From Engineering to Management, Degree to Architecture, Polytechnic, or ITI colleges, we offer custom training programs and leadership development initiatives that foster personal growth and professional development. Investing in your institution\'s human capital can have a profound impact on your community and we\'re here to help you achieve it. Contact us today to learn more about our talent development services and how we can support your institution\'s growth and success.', NULL, 'institution/services/talent-development', 'TD', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-05 19:58:12', 'Rareminds - Talent Development Services for Institutes | Skills Enhancement and Customized Trainings', 'Rareminds offers specialized talent development solutions for educational and non-profit institutions to empower their workforce.', 'institution, talent development, workforce empowerment', 'Rareminds - Institutional Talent Development', 'Rareminds offers specialized talent development solutions designed for educational and non-profit institutions to empower their workforce.'),
	(25, 3, 38, 'Talent Management', NULL, 'Struggling to keep your academic institution running smoothly? Let us be your…', NULL, NULL, NULL, NULL, 'Struggling to keep your academic institution running smoothly? Let us be your guiding light with our talent management services! We can help you optimize your workforce, minimize redundancies and streamline processes to ensure everything runs like a well-oiled machine. Happy employees are the cornerstone of success and we understand that everyone is unique. Our customised solutions foster a culture of excellence, attracting top talent, retaining current staff and enhancing their skills and capabilities. Plus, we can help you build your HRD Center, making it even easier to achieve your goals and take your institution to the next level!', NULL, 'institution/services/talent-management', 'TM', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-05 19:57:10', 'Rareminds - Talent Management Services for Institutes | Human Resource Management | Employee Engagment', 'Rareminds provides comprehensive talent management solutions for educational and non-profit institutions to foster employee growth and retention.', 'institution, talent management, employee growth', 'Rareminds - Institutional Talent Management', 'Rareminds offers comprehensive talent management solutions designed for educational and non-profit institutions to foster employee growth and retention.'),
	(26, 4, 38, 'Talent Development', NULL, 'Our training programs are dynamic tailor-made for the next generation of leaders eager to make a difference.', NULL, NULL, NULL, NULL, '<p><span style="font-weight: 400;">Our dynamic training programs are meticulously crafted for the next generation of leaders, poised to redefine success in a rapidly evolving world. With a focus on cutting-edge technologies like blockchain and AI, our comprehensive courses are designed to equip students with the skills and knowledge necessary to lead with integrity and innovation. From effective communication to critical thinking, decision-making and problem-solving, our training modules instill essential leadership qualities essential for navigating the complexities of tomorrow\'s challenges. Join us today and let\'s embark on a transformative journey of personal and professional growth!</span></p>', NULL, 'schools/services/talent-development', 'TD', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-05 19:50:38', 'Rareminds - Talent Development Services for Schools | Professional Development | Soft Skills ', 'Rareminds offers specialized talent development solutions for schools to empower students and facilitate holistic growth and learning.', 'school, talent development, student empowerment', 'Rareminds - School Talent Development', 'Rareminds offers specialized talent development solutions for schools to empower students and facilitate holistic growth and learning.'),
	(27, 2, 38, 'Talent Acquisition', NULL, 'Revolutionize your talent search! Our cutting-edge Talent Acquisition services employ the latest technologies', NULL, NULL, NULL, NULL, 'Transform your talent search with our innovative Talent Acquisition services! We harness cutting-edge technologies and recruitment strategies to discover top-notch candidates for your organization. Whether you\'re seeking short term contractual resources or long term hires, we\'ve got you covered.', NULL, 'government/services/talent-acquisition', 'TA', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-05 19:52:41', 'Rareminds - Talent Acquisition Services for Government | Customized Talent Solutions', 'Rareminds specializes in talent acquisition solutions tailored to meet the unique needs of government organizations, ensuring workforce excellence.', 'government, talent acquisition, workforce excellence', 'Rareminds - Govt. Talent Acquisition', 'Rareminds offers specialized talent acquisition solutions to meet the unique needs of government organizations, ensuring workforce excellence.'),
	(28, 2, 38, 'Talent Development', NULL, 'Unlock the hidden potential within your teams with our tailored Talent Development programs.... ', NULL, NULL, NULL, NULL, '&lt;p&gt;Unlock the hidden potential within your teams with our tailored Talent Development programs. From Engineering to Management, Degree to Architecture and beyond, our expert trainers specialize in crafting bespoke initiatives to elevate your institution across all departments. We boast a robust history of success in diverse sectors such as Agriculture and Farmers&apos; Welfare, Commerce and Industry, Electronics and Information Technology, Heavy Industries, Jal Shakti, Tourism, Power and beyond...&lt;/p&gt;', NULL, 'government/services/talent-development', 'TD', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-20 11:45:58', 'Rareminds - Talent Development Services for Government | Skills Development and Customized Trainings', 'Rareminds provides specialized talent development solutions to empower government organizations in nurturing the skills of their workforce.', 'government, talent development, workforce skills program', 'Rareminds - Govt. Talent Development', 'Rareminds specializes in providing tailored talent development solutions to empower government organizations in nurturing the skills of their workforce.'),
	(29, 2, 38, 'Talent Management', NULL, 'Ready to propel your city\'s educational landscape to new heights? Our dynamic Talent Management services are ...', NULL, NULL, NULL, NULL, 'Ready to propel your city\'s educational landscape to new heights? Our dynamic Talent Management services are the catalyst for transformation. From streamlining operations to optimizing your workforce, we\'ll work with you to develop a customised strategy for unparalleled success and productivity. Whether you\'re in academia, communications, or any public department, we\'re here to support your journey towards excellence.', NULL, 'government/services/talent-management', 'TM', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-05 19:54:57', 'Rareminds - Talent Management Services for Government | Recruitment and Workforce Planning', 'Rareminds offers comprehensive talent management solutions tailored for government organizations to nurture and retain top talent.', 'government, talent management, top talent', 'Rareminds - Govt. Talent Management', 'Rareminds provides comprehensive talent management solutions tailored for government organizations to nurture and retain top talent.'),
	(30, 1, 7, 'Till Now We’ve Benefitted', NULL, NULL, NULL, NULL, NULL, NULL, 'Need proof of our prowess? Scroll through our treasure trove of client testimonials handpicked from a diverse range of industries. From healthcare to technology, finance to manufacturing, and beyond, hear firsthand accounts of how Rareminds has revolutionised businesses just like yours. Let our satisfied clients\' voices reassure you of the transformative impact we can bring to your industry. Witness the Rareminds magic in action!', NULL, '/achievements', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-16 20:49:20', '', '', '', '', ''),
	(31, 2, 7, 'Till Now We’ve Benefitted', NULL, NULL, NULL, NULL, NULL, NULL, 'Need proof of our prowess? Scroll through our treasure trove of client testimonials handpicked from a diverse range of industries. From healthcare to technology, finance to manufacturing, and beyond, hear firsthand accounts of how Rareminds has revolutionised businesses just like yours. Let our satisfied clients\' voices reassure you of the transformative impact we can bring to your industry. Witness the Rareminds magic in action!', NULL, '/achievements', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-16 20:49:22', NULL, NULL, NULL, NULL, NULL),
	(32, 3, 7, 'Till Now We’ve Benefitted', NULL, NULL, NULL, NULL, NULL, NULL, 'Need proof of our prowess? Scroll through our treasure trove of client testimonials handpicked from a diverse range of industries. From healthcare to technology, finance to manufacturing, and beyond, hear firsthand accounts of how Rareminds has revolutionised businesses just like yours. Let our satisfied clients\' voices reassure you of the transformative impact we can bring to your industry. Witness the Rareminds magic in action!', NULL, '/achievements', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-16 20:49:24', NULL, NULL, NULL, NULL, NULL),
	(33, 4, 7, 'Till Now We’ve Benefitted', NULL, NULL, NULL, NULL, NULL, NULL, 'Need proof of our prowess? Scroll through our treasure trove of client testimonials handpicked from a diverse range of industries. From healthcare to technology, finance to manufacturing, and beyond, hear firsthand accounts of how Rareminds has revolutionised businesses just like yours. Let our satisfied clients\' voices reassure you of the transformative impact we can bring to your industry. Witness the Rareminds magic in action!', NULL, '/achievements', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-08-16 20:49:26', NULL, NULL, NULL, NULL, NULL),
	(34, 7, 39, 'Locations New', 'Seeking support? Look no further! Our squad is here to lend a hand in every way imaginable. Whether you\'re craving advice, resources, or just a friendly chat, we\'ve got your back. Fill out the form below and discover how we can light up your journey. Your success is our top priority and we\'re itching to hear from you!', 'Contact Address', 'Registered Office', NULL, NULL, NULL, NULL, NULL, 'locations-new', NULL, 'IndiQube Octagon No.643, 80ft Road, Opp. Swathi Maharaja Hotel, 4th Block, Koramangala, Bengaluru, Karnataka – 560034.', 'Rareminds India Pvt Ltd., Indiranagar, Bengaluru, Karnataka.', NULL, NULL, NULL, '2024-06-17 00:00:00', '2024-08-17 12:37:02', NULL, NULL, NULL, NULL, NULL),
	(35, 7, 39, 'Inquiry Hotline ', 'Prefer the warmth of human connection? Give us a buzz on our inquiry hotline and one of our friendly representatives will be on the line to tackle any queries you\'ve got. We\'re standing by, ready to dive in and help out whenever you need it!', 'Contact Number', 'Email Address', NULL, NULL, NULL, 'For University / Colleges', NULL, 'inquiry-hotline-', NULL, NULL, NULL, '+91 819 707 1905', '+91 819 707 1949', 'info@rareminds.in', '2024-06-17 00:00:00', '2024-08-17 12:39:56', NULL, NULL, NULL, NULL, NULL),
	(36, 1, 40, 'Transforming Talent at a Leading Global Alco Organization', 'At Rareminds, our commitment to transforming workplaces through innovative talent solutions is exem', NULL, NULL, 'ss1.svg', NULL, NULL, NULL, NULL, 'corporate/case-studies/transforming-talent-at-a-leading-global-alco-bev-organization', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-22 10:45:20', 'Transforming Talent at a Leading Global Alco Organization', NULL, NULL, 'Transforming Talent at a Leading Global Alco Organization', NULL),
	(37, 1, 40, 'Institutional Case Study', 'Rareminds\' commitment to talent development and placement has', NULL, NULL, 'ss2.svg', NULL, NULL, NULL, NULL, 'corporate/case-studies/institutional-case-study', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:42:03', NULL, NULL, NULL, NULL, NULL),
	(38, 1, 40, 'Institutional Case Study', 'Rareminds\' commitment to talent development and placement has', NULL, NULL, 'ss2.svg', NULL, NULL, NULL, NULL, 'corporate/case-studies/institutional-case-study', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:42:07', NULL, NULL, NULL, NULL, NULL),
	(39, 1, 40, 'Transforming Talent at a Leading Global Alco-bev Organization', 'At Rareminds, our commitment to transforming workplaces through innovative talent solutions is exem', NULL, NULL, 'ss1.svg', NULL, NULL, NULL, NULL, 'corporate/case-studies/transforming-talent-at-a-leading-global-alco-bev-organization', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:42:11', NULL, NULL, NULL, NULL, NULL),
	(40, 9, 41, 'The Never – Ending Journey of Learning: Path to Engineering Excellence', 'In the world of engineering, you’ve dedicated years to pursuing your college degree, immersing yourself in complex concepts and emerging as a capable graduate. As you step into the real world, it’s natural to believe that the days of relentless studying and learning are behind you', NULL, NULL, 'https://rareminds.in/wp-content/uploads/2023/07/Continuous-learning.jpg', NULL, NULL, NULL, NULL, 'the-never-ending-journey-of-learning-path-to-engineering-excellence', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-04 00:00:00', '2024-06-23 21:39:09', NULL, NULL, NULL, NULL, NULL),
	(41, 9, 41, 'From #MeToo to Action: The Importance of POSH Awareness Training in workplace ', 'In the wake of the #MeToo movement, workplace harassment has emerged as a critical issue that organizations can no longer ignore. In today’s world, where education and awareness are highly valued, one might question the necessity of POSH (Prevention of Sexual Harassment) training', NULL, NULL, 'https://rareminds.in/wp-content/uploads/2023/06/Posh-awarness-training.jpg', NULL, NULL, NULL, NULL, 'importance-posh-awareness-training-in-workplace', NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-24 00:00:00', '2024-06-23 21:38:57', NULL, NULL, NULL, NULL, NULL),
	(42, 9, 41, 'Can school-pass out students rewrite their story from dropout to success? Explore the opportunities.', 'School dropout rates in India paint a stark reality, limiting the potential of countless students. According to recent statistics, the dropout rate for secondary-level students in India stood at 14.6% in 2020-21, only slightly decreasing to 12.6% in 2021-22 (as per UDISE+ data). ', NULL, NULL, 'https://rareminds.in/wp-content/uploads/2023/06/Untitled-design-3.jpg', NULL, NULL, NULL, NULL, 'story-from-school-dropout-to-success', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-14 00:00:00', '2024-06-23 21:39:14', NULL, NULL, NULL, NULL, NULL),
	(43, 9, 41, 'Boosting Employee Development: The Benefits of Corporate Outbound Activities', 'As globalization and technological advancements continue to accelerate, corporate houses and start-ups are mushrooming rapidly. These organizations are in a race to maximize their channels of income and profitability, which often leads to a situation where employees are caught between', NULL, NULL, 'https://rareminds.in/wp-content/uploads/2023/05/Outbound-training-1.jpg', NULL, NULL, NULL, NULL, 'boosting-employee-development-the-benefits-of-corporate-outbound-activities', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-06-23 21:38:43', NULL, NULL, NULL, NULL, NULL),
	(44, 10, 42, 'Greetings, Trailblazers!', 'Are you ready to embark on a journey of unparalleled success? You are at your destination! Rareminds is your gateway to tailor-made talent solutions that elevate your game. Let\'s join forces and craft the path to greatness together!', 'Ready to make waves? Let\'s dive in and unlock your full potential!', 'Let\'s Connect!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-26 00:00:00', '2024-06-25 21:28:48', NULL, NULL, NULL, NULL, NULL),
	(45, 2, 40, 'Transforming Talent at a Leading Global Alco-bev Organization', 'At Rareminds, our commitment to transforming workplaces through innovative talent solutions is exem', NULL, NULL, 'ss1.svg', NULL, NULL, NULL, NULL, 'government/case-studies/transforming-talent-at-a-leading-global-alco-bev-organization', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:42:24', NULL, NULL, NULL, NULL, NULL),
	(46, 2, 40, 'Institutional Case Study', 'Rareminds\' commitment to talent development and placement has', NULL, NULL, 'ss2.svg', NULL, NULL, NULL, NULL, 'government/case-studies/institutional-case-study', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:42:34', NULL, NULL, NULL, NULL, NULL),
	(47, 2, 40, 'Institutional Case Study', 'Rareminds\' commitment to talent development and placement has', NULL, NULL, 'ss2.svg', NULL, NULL, NULL, NULL, 'government/case-studies/institutional-case-study', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:43:16', NULL, NULL, NULL, NULL, NULL),
	(48, 2, 40, 'Transforming Talent at a Leading Global Alco-bev Organization', 'At Rareminds, our commitment to transforming workplaces through innovative talent solutions is exem', NULL, NULL, 'ss1.svg', NULL, NULL, NULL, NULL, 'government/case-studies/transforming-talent-at-a-leading-global-alco-bev-organization', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:43:29', NULL, NULL, NULL, NULL, NULL),
	(49, 3, 40, 'Transforming Talent at a Leading Global Alco-bev Organization', 'At Rareminds, our commitment to transforming workplaces through innovative talent solutions is exem', NULL, NULL, 'ss1.svg', NULL, NULL, NULL, NULL, 'institutions/case-studies/transforming-talent-at-a-leading-global-alco-bev-organization', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:45:24', NULL, NULL, NULL, NULL, NULL),
	(50, 3, 40, 'Institutional Case Study', 'Rareminds\' commitment to talent development and placement has', NULL, NULL, 'ss2.svg', NULL, NULL, NULL, NULL, 'institutions/case-studies/institutional-case-study', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:45:28', NULL, NULL, NULL, NULL, NULL),
	(51, 3, 40, 'Institutional Case Study', 'Rareminds\' commitment to talent development and placement has', NULL, NULL, 'ss2.svg', NULL, NULL, NULL, NULL, 'institutions/case-studies/institutional-case-study', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:45:30', NULL, NULL, NULL, NULL, NULL),
	(52, 3, 40, 'Transforming Talent at a Leading Global Alco-bev Organization', 'At Rareminds, our commitment to transforming workplaces through innovative talent solutions is exem', NULL, NULL, 'ss1.svg', NULL, NULL, NULL, NULL, 'institutions/case-studiestransforming-talent-at-a-leading-global-alco-bev-organization', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:44:54', NULL, NULL, NULL, NULL, NULL),
	(53, 4, 40, 'Transforming Talent at a Leading Global Alco-bev Organization', 'At Rareminds, our commitment to transforming workplaces through innovative talent solutions is exem', NULL, NULL, 'ss1.svg', NULL, NULL, NULL, NULL, 'schools/case-studiestransforming-talent-at-a-leading-global-alco-bev-organization', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:44:08', NULL, NULL, NULL, NULL, NULL),
	(54, 4, 40, 'Institutional Case Study', 'Rareminds\' commitment to talent development and placement has', NULL, NULL, 'ss2.svg', NULL, NULL, NULL, NULL, 'schools/case-studies/institutional-case-study', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:44:27', NULL, NULL, NULL, NULL, NULL),
	(55, 4, 40, 'Institutional Case Study', 'Rareminds\' commitment to talent development and placement has', NULL, NULL, 'ss2.svg', NULL, NULL, NULL, NULL, 'schools/case-studies/institutional-case-study', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:44:34', NULL, NULL, NULL, NULL, NULL),
	(56, 4, 40, 'Transforming Talent at a Leading Global Alco-bev Organization', 'At Rareminds, our commitment to transforming workplaces through innovative talent solutions is exem', NULL, NULL, 'ss1.svg', NULL, NULL, NULL, NULL, 'schools/case-studies/transforming-talent-at-a-leading-global-alco-bev-organization', NULL, NULL, NULL, NULL, NULL, NULL, '2024-06-24 00:00:00', '2024-08-05 20:45:02', NULL, NULL, NULL, NULL, NULL),
	(57, 2, 43, 'About Rareminds - Government', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'government/about', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 00:00:00', '2024-08-05 21:08:31', 'About Rareminds - Government', 'Learn about Rareminds commitment to excellence in providing specialized services tailored for government organizations, driving innovation and success.', 'about, government, services, innovation', 'About Rareminds - Government', 'Explore Rareminds commitment to excellence in providing specialized services tailored for government organizations, driving innovation and success.'),
	(58, 1, 43, 'About Rareminds - Corporate', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'corporate/about', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 00:00:00', '2024-08-05 21:08:37', 'About Rareminds - Corporate', 'Explore Rareminds mission to revolutionize corporate performance through innovative solutions tailored to drive growth, efficiency and success.', 'about, corporate, mission, innovation', 'About Rareminds - Corporate', 'Discover Rareminds mission to revolutionize corporate performance through innovative solutions tailored to drive growth, efficiency and success.'),
	(59, 3, 43, 'About Rareminds - Institution', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'institutions/about', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 00:00:00', '2024-08-05 21:14:48', 'About Rareminds - Institution', 'Learn about Rareminds dedication to empowering educational and non-profit institutions through tailored services designed to enhance growth and success.', 'about, institution, dedication, growth', 'About Rareminds - Institution', 'Explore Rareminds dedication to empowering educational and non-profit institutions through tailored services designed to enhance growth and success.'),
	(60, 4, 43, 'About Rareminds - School', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'schools/about', NULL, NULL, NULL, NULL, NULL, NULL, '2024-08-06 00:00:00', '2024-08-05 21:14:52', 'About Rareminds - School', 'Discover Rareminds commitment to supporting educational institutions with tailored solutions for success.', 'about, school, commitment', 'About Rareminds - School', 'Explore Rareminds commitment to supporting educational institutions with tailored solutions for success.');

-- Dumping structure for table rareminds.rm_content_details
DROP TABLE IF EXISTS `rm_content_details`;
CREATE TABLE IF NOT EXISTS `rm_content_details` (
  `ContentDetailId` int NOT NULL AUTO_INCREMENT,
  `ContentId` int DEFAULT NULL,
  `ContentTitle` varchar(255) DEFAULT NULL,
  `ContentDescription` longtext,
  `ContentSubDescription` longtext,
  `CreatedOn` datetime DEFAULT (curdate()),
  `ModifiedOn` timestamp NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
  `AuthorImage` text,
  `ContentImage` longtext,
  PRIMARY KEY (`ContentDetailId`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table rareminds.rm_content_details: ~54 rows (approximately)
DELETE FROM `rm_content_details`;
INSERT INTO `rm_content_details` (`ContentDetailId`, `ContentId`, `ContentTitle`, `ContentDescription`, `ContentSubDescription`, `CreatedOn`, `ModifiedOn`, `AuthorImage`, `ContentImage`) VALUES
	(1, 21, 'Performance Management', '<p><strong>&nbsp;</strong>At RareMinds, we\'re all about turbocharging performance to rocket your organisation to success! We understand that effective performance management is essential for organisational success. We partner with you to design and implement performance evaluation systems that align with your company objectives. From goal setting to performance reviews and feedback mechanisms, we make sure your employees are revved up, engaged and propelling productivity to interstellar heights!</p>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:51:55', NULL, NULL),
	(2, 21, 'Compensation and Benefits', '<p>Crafting a competitive compensation package is crucial for attracting and retaining top talent. Our crew specializes in crafting compensation structures and benefits plans that are tailor-made for your organization\'s mission. We find the sweet spot between fueling motivation and keeping costs grounded, ensuring your compensation strategy supports your business goals.</p>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:51:55', NULL, NULL),
	(3, 21, 'Employee Relations and Engagement', '<p>A positive work culture is the cornerstone of employee satisfaction and retention. At RareMinds, we offer comprehensive employee relations services to promote harmony in the workplace. From conflict resolution to employee surveys and engagement programs, we cultivate a supportive atmosphere where every team member feels like they\'re part of a galactic adventure. Additionally, our employee recognition</p>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:51:55', NULL, NULL),
	(4, 21, 'HR Compliance and Legal Support', '<p>Staying compliant with employment laws and regulations is non-negotiable, Our dedicated HR compliance team is your trusty co-pilot. Providing expert guidance on labor laws, workplace safety and anti-discrimination policies. We conduct HR audits and risk assessments to ensure that your organization remains legally compliant at all times, giving you peace of mind and minimizing legal risks.</p>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:51:55', NULL, NULL),
	(5, 22, 'Leadership Development', '<ul><li>Equip your current and future leaders with the fuel they need to inspire and motivate their teams for stellar performance.<li>Our leadership development programs cover topics such as communication, decision-making and strategic thinking.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:55:52', NULL, NULL),
	(6, 22, 'Technical Skills Enhancement', '<ul><li>Stay ahead of the curve with our technical skill enhancement programs designed to keep your workforce up-to-date with the latest industry trends.<li>From mastering IT certifications to traversing the uncharted territories of emerging technologies, we\'ve got your back – and your warp engines!</ul>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:55:52', NULL, NULL),
	(7, 22, 'Team Building Workshops', '<ul><li>Launch your team into the orbit, foster a culture of collaboration and innovation with our team building workshops.<li>Our interactive sessions focus on improving communication, resolving conflicts and trust-building exercises that are light-years beyond the ordinary.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:55:52', NULL, NULL),
	(8, 22, 'Soft Skills Training', '<ul><li>Leverage our secret weapon for conquering the galaxies of emotional intelligence, adaptability and resilience. Develop these essential soft skills with workshops and training programs.<li>Our farsightedness helps employees navigate challenges in the workplace and thrive in diverse environments.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:58:10', NULL, NULL),
	(9, 22, 'Professional Certification Programs', '<ul><li>We offer a constellation of certification options to suit your organisation\'s needs. From project management to digital marketing, we’ve it all. Get ready to make your mark on the universe with RareMinds at your side!.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:58:10', NULL, NULL),
	(10, 22, 'Customised Training Solutions', '<ul><li>We work hand-in-hand with you to develop customised programs that hit the bullseye of your objectives and align seamlessly with your organisation\'s culture. <li>With RareMinds, the sky – and beyond – is the limit!</ul>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:59:41', NULL, NULL),
	(11, 23, 'Performance Management Systems', '<ul><li>Customised performance management systems tailored to align with your organisation\'s objectives and values.<li>Implementation of goal-setting frameworks, performance reviews and feedback mechanisms to drive employee productivity and engagement.<li>Regular performance evaluations and assessments to track progress and identify areas for improvement.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:00:47', NULL, NULL),
	(12, 23, 'Employee Engagement Initiatives', '<ul><li>Innovative employee engagement initiatives aimed at creating a positive work culture and enhancing employee satisfaction.<li>Employee recognition programs to acknowledge and reward outstanding performance and contributions.<li>Employee surveys and feedback mechanisms to gather insights and improve overall employee experience.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:01:38', NULL, NULL),
	(13, 23, 'HR Compliance and Legal Support', '<ul><li>Expert guidance on HR compliance and legal matters to ensure adherence to employment laws and regulations.<li>Assistance with HR audits and risk assessments to identify and mitigate potential compliance issues.<li>Support in developing and implementing workplace policies and procedures to maintain legal compliance and mitigate risks.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:01:38', NULL, NULL),
	(14, 24, 'Emerging Leaders Program', '<ul><li>Tailored leadership skills programs designed to nurture and enhance the skills of the emerging leaders.<li>Focus on key leadership competencies such as strategic thinking, decision-making and team management.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:01:38', NULL, NULL),
	(15, 24, 'Performance Tracking Systems', '<ul><li>Customised performance management systems to effectively track, evaluate and improve student performance.<li>Training and hands-on workshops on goal-setting frameworks.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:14:21', NULL, NULL),
	(16, 24, 'Skill Enhancement Modules', '<ul><li>Interactive workshops and training sessions focused on enhancing skills helping them attain new skills like AI, Machine Learning equipped with Creative Thinking.<li>Broad topics include communication skills, problem-solving and adaptability to prepare for future challenges.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:15:24', NULL, NULL),
	(17, 25, 'Leadership Development Programs', '<ul><li><span>Tailored programs designed to nurture current and emerging leaders.</span><li><span>Focus on key competencies like strategic thinking and team management.</span></ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:16:22', NULL, NULL),
	(18, 25, 'Performance Management Systems', '<ul><li>Customised systems to track, evaluate and improve performance.<li>Includes goal-setting frameworks and regular performance reviews.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:17:07', NULL, NULL),
	(19, 25, 'Engagement Initiatives', '<ul><li>Innovative programs to foster a positive environment and a culture of appreciation.<li>Strategies include recognition programs and team-building activities.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:17:45', NULL, NULL),
	(20, 25, 'Talent Development Workshops', '<ul><li>Interactive sessions focused on enhancing skills.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:17:45', NULL, NULL),
	(21, 26, 'Leadership Development Workshops', 'Gain essential leadership skills through interactive workshops focused on decision-making, teamwork and strategic thinking.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46', NULL, NULL),
	(22, 26, 'Communication Skills Training', 'Hone your communication abilities through targeted training sessions, including public speaking, effective writing and interpersonal communication.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46', NULL, NULL),
	(23, 26, 'Problem-Solving Seminars', 'Develop critical thinking and problem-solving skills through engaging seminars and case studies designed to challenge and inspire.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46', NULL, NULL),
	(24, 26, 'Career Readiness Workshops', 'Prepare for the professional world with workshops on resume writing, interview skills and job search strategies.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46', NULL, NULL),
	(25, 26, 'Industry-Specific Training', 'Explore specialized training programs tailored to various industries, providing insights and skills relevant to specific career paths.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46', NULL, NULL),
	(26, 27, 'Recruitment', 'This includes creating job descriptions, posting job openings on relevant platforms and utilizing recruitment networks to reach a diverse pool of candidates for resources on contract or short term. ', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46', NULL, NULL),
	(27, 27, 'Building a Talent Pipeline', 'Understanding the requirements of various government departments, we can build and maintain a pipeline of qualified candidates for current and future hiring needs. By proactively sourcing and engaging with potential candidates, they ensure a steady supply of talent to meet the organization\'s demands.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46', NULL, NULL),
	(28, 27, 'Diversity and Inclusion Initiatives', 'We help government departments develop and implement diversity and inclusion strategies to attract a diverse workforce. This includes outreach efforts to underrepresented groups, diversity training programs and initiatives to foster an inclusive workplace culture.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46', NULL, NULL),
	(29, 27, 'Consulting', 'Our consulting services cater to different government sectors, addressing a wide range of talent acquisition challenges. From sourcing the ideal talent promptly and for the required duration to advising on future resource needs, we offer comprehensive support. Our expertise spans from providing contracted resources to strategic consultations on forthcoming staffing requirements.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46', NULL, NULL),
	(30, 28, 'Customised Training Programs', '&lt;p&gt;We design and deliver tailored training programs specific to the needs and objectives of government departments. These programs are carefully crafted to enhance the skills, knowledge and capabilities of the staff, empowering them to contribute more effectively to the department&apos;s mission.&lt;/p&gt;', NULL, '2024-05-25 00:00:00', '2024-08-20 12:02:41', NULL, NULL),
	(31, 28, 'Leadership Development', '&lt;p&gt;Our strategies are designed to prepare the next generation of government leaders. Through targeted coaching and skills development, we help in preparing the officials for higher leadership roles and ensuring a smooth succession process.&lt;/p&gt;', NULL, '2024-05-25 00:00:00', '2024-08-20 12:02:41', NULL, NULL),
	(32, 28, 'Performance Improvement', 'Working closely with government departments to identify the areas for performance improvement and developing plans to address them effectively. To drive measurable results and elevate performance across the department remains a major objective throughout.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:26:17', NULL, NULL),
	(33, 28, 'Change Management', 'In a constantly evolving landscape, change is inevitable. We ensure adaptability by providing you with extensive change management programs to help navigate transitions smoothly and minimise disruption. ', NULL, '2024-05-25 00:00:00', '2024-05-25 00:26:17', NULL, NULL),
	(34, 28, 'Continuous Improvement Initiatives', 'Through regular feedback mechanisms and benchmarking against industry best practices, we ensure that our programs are relevant, contemporary and aligned with the future needs of the government agencies and sectors like Public Works, Energy Department, Higher Education, MSMEs, Agriculture, Fisheries and more.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:26:17', NULL, NULL),
	(35, 30, 'Individuals Transformed', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '300,000', '2024-06-17 02:41:36', '2024-06-16 21:11:38', NULL, NULL),
	(36, 30, 'Organisations Collaborated', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '75', '2024-06-17 02:41:36', '2024-06-16 21:11:38', NULL, NULL),
	(37, 30, 'Institutions enhanced', '', '80', '2024-06-17 02:41:36', '2024-06-16 21:11:38', NULL, NULL),
	(38, 31, 'Individuals Transformed', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '300,000', '2024-06-17 02:41:36', '2024-06-16 21:11:38', NULL, NULL),
	(39, 31, 'Organisations Collaborated', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '75', '2024-06-17 02:41:36', '2024-06-16 21:11:38', NULL, NULL),
	(40, 31, 'Institutions enhanced', '', '80', '2024-06-17 02:41:36', '2024-06-16 21:11:38', NULL, NULL),
	(41, 32, 'Individuals Transformed', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '300,000', '2024-06-17 02:41:36', '2024-06-16 21:11:38', NULL, NULL),
	(42, 32, 'Organisations Collaborated', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '75', '2024-06-17 02:41:36', '2024-06-16 21:11:38', NULL, NULL),
	(43, 32, 'Institutions enhanced', '', '80', '2024-06-17 02:41:36', '2024-06-16 21:11:38', NULL, NULL),
	(44, 33, 'Individuals Transformed', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '300,000', '2024-06-17 02:41:36', '2024-06-16 21:11:38', NULL, NULL),
	(45, 33, 'Organisations Collaborated', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '75', '2024-06-17 02:41:36', '2024-06-16 21:11:38', NULL, NULL),
	(46, 33, 'Institutions enhanced', '', '80', '2024-06-17 02:41:36', '2024-06-16 21:11:38', NULL, NULL),
	(47, 36, 'Transforming Talent at a Leading Global Alco-bev Organization', '&lt;h4&gt;### Rareminds Corporate Case Study: Elevating Organizational Performance through Comprehensive Talent Solutions&lt;/h4&gt;\r\n&lt;p&gt;At Rareminds, our &lt;strong&gt;commitment &lt;/strong&gt;to transforming workplaces through innovative talent solutions is exemplified in our comprehensive approach to talent acquisition, development, and management. Our strategic interventions have significantly elevated organizational performance and employee satisfaction, as demonstrated in our recent collaboration with a leading global corporation.&lt;/p&gt;\r\n&lt;ul&gt;\r\n&lt;li&gt;Talent Acquisition:&lt;br&gt;&lt;br&gt;Our first step was to revolutionize the talent acquisition process. We introduced Assessment Centres, a structured platform designed to identify and onboard top-tier talent efficiently. This initiative not only streamlined the recruitment process for HR professionals but also ensured that candidates found fulfilling careers aligned with their skills and interests. The result was a win-win: a smoother recruitment journey and a workforce poised for success from day one.&lt;/li&gt;\r\n&lt;li&gt;Talent Development:&lt;br&gt;&lt;br&gt;Recognizing the importance of continuous learning, we implemented a Learning Management System (LMS) that became the cornerstone of talent development within the organization. This platform facilitated 100% compliance training, equipping employees with the essential skills and knowledge to excel in their roles. The impact was clear: enhanced professional competence, improved career prospects, and a culture of lifelong learning.&lt;/li&gt;\r\n&lt;li&gt;Talent Management:&lt;br&gt;&lt;br&gt;Our approach to talent management focused on optimizing operational efficiency and aligning with industry best practices, particularly within the Financial Shared Services domain. We meticulously reviewed and enhanced Compensation &amp;amp; Benefits for over 300 roles, emphasizing our dedication to fairness and equity. Furthermore, our bespoke Recognition &amp;amp; Rewards program highlighted the value of individual contributions, fostering a culture of appreciation and fulfillment.&lt;/li&gt;\r\n&lt;/ul&gt;', NULL, '2024-06-17 00:00:00', '2024-08-22 10:40:13', NULL, '1724164509892_ss1.svg'),
	(48, 37, 'Institutional Case Study', '<h4><strong>### Rareminds Corporate Case Study: Elevating Organizational Performance through Comprehensive Talent Solutions</strong></h4>\r\n<br/>\r\n<p>At Rareminds, our commitment to transforming workplaces through innovative talent solutions is exemplified in our comprehensive approach to talent acquisition, development, and management. Our strategic interventions have significantly elevated organizational performance and employee satisfaction, as demonstrated in our recent collaboration with a leading global corporation.</p>\r\n<ul>\r\n<li>Talent Acquisition:<br /><br />Our first step was to revolutionize the talent acquisition process. We introduced Assessment Centres, a structured platform designed to identify and onboard top-tier talent efficiently. This initiative not only streamlined the recruitment process for HR professionals but also ensured that candidates found fulfilling careers aligned with their skills and interests. The result was a win-win: a smoother recruitment journey and a workforce poised for success from day one.</li>\r\n  \r\n<li>Talent Development:<br /><br />Recognizing the importance of continuous learning, we implemented a Learning Management System (LMS) that became the cornerstone of talent development within the organization. This platform facilitated 100% compliance training, equipping employees with the essential skills and knowledge to excel in their roles. The impact was clear: enhanced professional competence, improved career prospects, and a culture of lifelong learning.</li>\r\n<li>Talent Management:<br /><br />Our approach to talent management focused on optimizing operational efficiency and aligning with industry best practices, particularly within the Financial Shared Services domain. We meticulously reviewed and enhanced Compensation &amp; Benefits for over 300 roles, emphasizing our dedication to fairness and equity. Furthermore, our bespoke Recognition &amp; Rewards program highlighted the value of individual contributions, fostering a culture of appreciation and fulfillment.</li>\r\n</ul>', NULL, '2024-06-17 00:00:00', '2024-06-23 21:20:46', NULL, NULL),
	(49, 38, 'Institutional Case Study', '<h4><strong>### Rareminds Corporate Case Study: Elevating Organizational Performance through Comprehensive Talent Solutions</strong></h4>\r\n<br/>\r\n<p>At Rareminds, our commitment to transforming workplaces through innovative talent solutions is exemplified in our comprehensive approach to talent acquisition, development, and management. Our strategic interventions have significantly elevated organizational performance and employee satisfaction, as demonstrated in our recent collaboration with a leading global corporation.</p>\r\n<ul>\r\n<li>Talent Acquisition:<br /><br />Our first step was to revolutionize the talent acquisition process. We introduced Assessment Centres, a structured platform designed to identify and onboard top-tier talent efficiently. This initiative not only streamlined the recruitment process for HR professionals but also ensured that candidates found fulfilling careers aligned with their skills and interests. The result was a win-win: a smoother recruitment journey and a workforce poised for success from day one.</li>\r\n  \r\n<li>Talent Development:<br /><br />Recognizing the importance of continuous learning, we implemented a Learning Management System (LMS) that became the cornerstone of talent development within the organization. This platform facilitated 100% compliance training, equipping employees with the essential skills and knowledge to excel in their roles. The impact was clear: enhanced professional competence, improved career prospects, and a culture of lifelong learning.</li>\r\n<li>Talent Management:<br /><br />Our approach to talent management focused on optimizing operational efficiency and aligning with industry best practices, particularly within the Financial Shared Services domain. We meticulously reviewed and enhanced Compensation &amp; Benefits for over 300 roles, emphasizing our dedication to fairness and equity. Furthermore, our bespoke Recognition &amp; Rewards program highlighted the value of individual contributions, fostering a culture of appreciation and fulfillment.</li>\r\n</ul>', NULL, '2024-06-17 00:00:00', '2024-06-23 21:20:50', NULL, NULL),
	(50, 39, 'Transforming Talent at a Leading Global Alco-bev Organization', '<h4><strong>### Rareminds Corporate Case Study: Elevating Organizational Performance through Comprehensive Talent Solutions</strong></h4>\r\n<br/>\r\n<p>At Rareminds, our commitment to transforming workplaces through innovative talent solutions is exemplified in our comprehensive approach to talent acquisition, development, and management. Our strategic interventions have significantly elevated organizational performance and employee satisfaction, as demonstrated in our recent collaboration with a leading global corporation.</p>\r\n<ul>\r\n<li>Talent Acquisition:<br /><br />Our first step was to revolutionize the talent acquisition process. We introduced Assessment Centres, a structured platform designed to identify and onboard top-tier talent efficiently. This initiative not only streamlined the recruitment process for HR professionals but also ensured that candidates found fulfilling careers aligned with their skills and interests. The result was a win-win: a smoother recruitment journey and a workforce poised for success from day one.</li>\r\n  \r\n<li>Talent Development:<br /><br />Recognizing the importance of continuous learning, we implemented a Learning Management System (LMS) that became the cornerstone of talent development within the organization. This platform facilitated 100% compliance training, equipping employees with the essential skills and knowledge to excel in their roles. The impact was clear: enhanced professional competence, improved career prospects, and a culture of lifelong learning.</li>\r\n<li>Talent Management:<br /><br />Our approach to talent management focused on optimizing operational efficiency and aligning with industry best practices, particularly within the Financial Shared Services domain. We meticulously reviewed and enhanced Compensation &amp; Benefits for over 300 roles, emphasizing our dedication to fairness and equity. Furthermore, our bespoke Recognition &amp; Rewards program highlighted the value of individual contributions, fostering a culture of appreciation and fulfillment.</li>\r\n</ul>', NULL, '2024-06-17 00:00:00', '2024-06-23 21:20:53', NULL, NULL),
	(51, 40, 'The Never – Ending Journey of Learning: Path to Engineering Excellence', '<div class="blog-description">\r\n        <p>In the world of engineering, you’ve dedicated years to pursuing your college degree, immersing yourself in complex concepts and emerging as a capable graduate. As you step into the real world, it’s natural to believe that the days of relentless studying and learning are behind you. However, here’s a revelation: your journey as an engineer has just begun, and continuous learning holds the key to your success.</p><p>&nbsp;</p><h2 class="wp-block-heading"><strong>Imagine this scenario / Picture this</strong> :</h2><p>&nbsp;</p><p>You encounter a real-world engineering challenge, intricate and demanding. The solutions you learned in college fall short of addressing its complexities.</p><p>This is where continuous learning comes into play. It’s not just about acquiring more qualifications . But What specific skills, adaptability, and mindset would you need to develop to address the ever-evolving demands of the industry in this context?</p><p>&nbsp;</p><h3 class="wp-block-heading"><strong>So why is continuous learning vital in your day-to-day life as an <a href="https://rareminds.in/blog/why-take-an-internship/" data-type="URL" data-id="https://rareminds.in/blog/why-take-an-internship/">engineer?</a> Let’s delve into its practical aspects:</strong></h3><p>&nbsp;</p><figure class="wp-block-gallery has-nested-images columns-default is-cropped wp-block-gallery-1 is-layout-flex wp-block-gallery-is-layout-flex"><figure class="wp-block-image size-large"><img decoding="async" width="1024" height="768" data-id="3002" class="wp-image-3002" src="https://rareminds.in/wp-content/uploads/2023/07/AI-learning-1024x768.jpg" alt="" srcset="https://rareminds.in/wp-content/uploads/2023/07/AI-learning-1024x768.jpg 1024w, https://rareminds.in/wp-content/uploads/2023/07/AI-learning-300x225.jpg 300w, https://rareminds.in/wp-content/uploads/2023/07/AI-learning-768x576.jpg 768w, https://rareminds.in/wp-content/uploads/2023/07/AI-learning-80x60.jpg 80w, https://rareminds.in/wp-content/uploads/2023/07/AI-learning.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px"></figure></figure><p>&nbsp;</p><h4 class="wp-block-heading"><strong>Adapting to Technological Advancements:</strong></h4><p>How might an aerospace engineer struggle to design advanced and efficient aircraft components if they are not familiar with additive manufacturing techniques like Selective Laser Sintering (SLS)?</p><p>&nbsp;</p><h4 class="wp-block-heading"><strong>Problem-Solving and Troubleshooting:</strong></h4><p>Civil engineers without the latest ground-penetrating radar (GPR) technology may encounter difficulties in accurately assessing subsurface conditions when resolving foundation issues, potentially leading to ineffective solutions and safety risks.</p><p>&nbsp;</p><h4 class="wp-block-heading"><strong>Innovation and Creativity:&nbsp;</strong></h4><p>As a mechanical engineer, have you upskilled yourself to face the challenges of automation and additive manufacturing with the rapid advancements in AI/ML techniques and 3D Printing technologies?</p><p>&nbsp;</p><h4 class="wp-block-heading"><strong>Connect and Collaborate:</strong>&nbsp;</h4><p>As an electrical engineer, will you prioritize mastering basic electrical terms for seamless integration? How do you plan to connect, collaborate, and find mentors to ensure a fulfilling and successful journey in your field?</p><p>&nbsp;</p><h5 class="wp-block-heading"><strong>Conclusion :&nbsp;</strong></h5><p>The world is changing with AI and automation. <a href="https://rareminds.in/blog/digital-transformation-the-new-normal/" data-type="URL" data-id="https://rareminds.in/blog/digital-transformation-the-new-normal/">Are you prepared?</a>&nbsp;</p><p>Acquire skills now, or get left behind because “AI won’t take your job, but someone skilled in AI will.”&nbsp;</p><p>Dive into the world of learning, where coding, robotics, Machine learning, designing sustainable infrastructure, and endless knowledge await. Join our Student Transformation Program, conquer AI, and soar above the competition.&nbsp;</p><p>Be prepared for the changing world of automation.</p><p><a href="https://rareminds.in/contact-us/" data-type="URL" data-id="https://rareminds.in/contact-us/">Contact us</a> now and<a href="https://staging.rareminds.in/blog/how-to-increase-your-college-placements/" data-type="URL" data-id="https://staging.rareminds.in/blog/how-to-increase-your-college-placements/"> seize endless opportunities</a>.&nbsp;</p>    </div>', NULL, '2024-06-24 00:00:00', '2024-06-23 21:35:20', NULL, NULL),
	(52, 41, 'From #MeToo to Action: The Importance of POSH Awareness Training in workplace ', '<div class="blog-description">\r\n        <p>&nbsp;</p><p>In the wake of the #MeToo movement, workplace harassment has emerged as a critical issue that organizations can no longer ignore. In today’s world, where education and awareness are highly valued, one might question the necessity of POSH (Prevention of Sexual Harassment) training if everyone in an organization is already educated and aware. However, the truth is that sexual harassment knows no boundaries of education, and it is essential to grasp the significance of POSH training. In this , we will delve into the concept of POSH training and understand why it is crucial, regardless of educational background.</p><h2 class="wp-block-heading">Understanding the Impact of #MeToo</h2><p>&nbsp;</p><p>The #MeToo movement has exposed the pervasive nature of workplace harassment, urging organizations to address the issue head-on. However, awareness alone is insufficient. POSH training takes the movement’s momentum and channels it into comprehensive education and actionable steps.</p><h3 class="wp-block-heading">Understanding POSH Training</h3><p>&nbsp;</p><p>POSH training assists employees in recognizing and distinguishing between suitable and inappropriate workplace behavior. It goes beyond education and equips participants with a comprehensive understanding of the legal aspects of the POSH Act. Through this training, employees gain a firm knowledge of what constitutes sexual harassment and the importance of creating a safe and respectful work environment.</p><figure class="wp-block-image size-large"><img decoding="async" width="1024" height="576" class="wp-image-2986" src="https://rareminds.in/wp-content/uploads/2023/06/Importance-of-POSH-training-1024x576.jpg" alt="Importance of POSH Training" srcset="https://rareminds.in/wp-content/uploads/2023/06/Importance-of-POSH-training-1024x576.jpg 1024w, https://rareminds.in/wp-content/uploads/2023/06/Importance-of-POSH-training-300x169.jpg 300w, https://rareminds.in/wp-content/uploads/2023/06/Importance-of-POSH-training-768x432.jpg 768w, https://rareminds.in/wp-content/uploads/2023/06/Importance-of-POSH-training-1536x864.jpg 1536w, https://rareminds.in/wp-content/uploads/2023/06/Importance-of-POSH-training.jpg 2000w" sizes="(max-width: 1024px) 100vw, 1024px"></figure><p>&nbsp;</p><h3 class="wp-block-heading">Why POSH Training Matters</h3><p>&nbsp;</p><h4 class="wp-block-heading has-text-align-left">Bridging the Gap between Organizational Culture and Social Impact:</h4><p>Organizations have their own set of principles and values, but the impact of social culture on <a href="https://rareminds.in/blog/boosting-employee-development-the-benefits-of-corporate-outbound-activities/" data-type="URL" data-id="https://rareminds.in/blog/boosting-employee-development-the-benefits-of-corporate-outbound-activities/">corporate culture </a>cannot be overlooked. Unintentionally, employers may bring social learning and behaviors into the workplace that are acceptable in society but not appropriate at work. POSH training bridges this gap by aligning employees’ understanding of acceptable conduct in the workplace, regardless of societal influences.</p><h4 class="wp-block-heading">Creating a Safe and Respectful Work Environment:</h4><p>POSH training plays a crucial role in fostering a safe and respectful work environment. It empowers employees by equipping them with the knowledge and skills to identify and address instances of sexual harassment. By promoting a culture of respect and zero tolerance for harassment, organizations can ensure that every employee feels safe, valued, and supported.</p><h4 class="wp-block-heading">Addressing Workplace Harassment in Various Sectors :&nbsp;</h4><p>Workplace harassment knows no boundaries, affecting employees across industries. In sectors like corporate, education, <a href="https://rareminds.in/blog/healthcare-recruitment-and-staffing-trends-in-2021/" data-type="URL" data-id="https://rareminds.in/blog/healthcare-recruitment-and-staffing-trends-in-2021/">healthcare</a>, hospitality, manufacturing, IT, and entertainment, POSH training is essential.&nbsp;</p><p>We all know in the civil industry, where a male-dominated workforce is prevalent, promoting gender equality through awareness and training is essential. It ensures equal opportunities and fosters an inclusive work environment for all.</p><p>Manufacturing facilities, with their fast-paced production lines, require teamwork and coordination. By implementing respectful communication channels and training programs, we can prevent harassment incidents and maintain a harmonious work environment.</p><p>Posh training empowers professionals to prevent harassment and fosters safe, inclusive work environments. Together, let’s create a culture of respect and ensure everyone feels valued and protected. #WorkplaceHarassment #POSHTraining</p><h4 class="wp-block-heading">Compliance with Legal Requirements:</h4><p>Implementing POSH training is not only an ethical responsibility but also a legal requirement in many jurisdictions. By providing employees with POSH training, organizations fulfill their legal obligations and demonstrate their commitment to creating a harassment-free workplace. Compliance with the law is not only essential for organizational reputation but also for mitigating legal risks and potential liabilities.</p><h4 class="wp-block-heading">Preventing Potential Consequences:</h4><p>Sexual harassment incidents can have severe consequences for individuals and organizations alike. By investing in POSH training, organizations proactively prevent such incidents from occurring. By increasing awareness and providing employees with tools to respond appropriately, organizations minimize the risk of legal disputes, reputational damage, and the negative impact on employee morale and productivity.</p><h4 class="wp-block-heading">Empowering Employees and Encouraging Reporting:</h4><p>POSH training empowers employees to recognize their rights and the importance of reporting any incidents of sexual harassment. It helps create a supportive environment where employees feel encouraged to come forward without fear of retaliation. By fostering a culture of trust and open communication, organizations can address issues promptly and take appropriate action.</p><h3 class="wp-block-heading">Conclusion</h3><p>While education is undoubtedly important, it alone cannot guarantee a harassment-free workplace. POSH training goes beyond education by providing employees with the knowledge and skills to recognize, prevent, and respond to sexual harassment. It bridges the gap between organizational culture and social impact, creates a safe work environment, ensures compliance with legal requirements, empowers employees, and mitigates potential consequences. By embracing POSH training, organizations demonstrate their commitment to fostering a respectful and inclusive workplace for all employees.</p><p>Ready to address workplace harassment and create a safer work environment?&nbsp;</p><p>Join our POSH training program today and empower your organization with the knowledge and tools to prevent harassment. Contact us now to learn more about our training programs and initiatives.</p>    </div>', NULL, '2024-06-24 00:00:00', '2024-06-23 21:36:09', NULL, NULL),
	(53, 42, 'Can school-pass out students rewrite their story from dropout to success? Explore the opportunities.', '<div class="blog-description">\r\n        <p>School dropout rates in India paint a stark reality, limiting the potential of countless students. According to recent statistics, the dropout rate for secondary-level students in India stood at 14.6% in 2020-21, only slightly decreasing to 12.6% in 2021-22 (as per UDISE+ data). This calls for urgent attention and concerted efforts to reverse the trend.</p><h2 class="wp-block-heading">Understanding the Reasons:</h2><p>To address the problem effectively, we must identify the underlying factors that lead to students dropping out of school. Financial challenges, lack of guidance, gender biases, and social inequalities often play significant roles.</p><h2 class="wp-block-heading">Government Investments in Supporting Programs:</h2><p>The Indian government invests a significant portion of its budget (approximately 20.3%) in running Skill India programs and other skill development initiatives. These investments ensure the effectiveness and sustainability of skill development initiatives.</p><h3 class="wp-block-heading">Dropout Rate Analysis:</h3><p>The dropout rate at the secondary level has come down to 1.5% in the latest report compared to 1.8% in the 3 academic year. However, certain states still have a higher dropout rate. For instance, Bihar, Gujarat, Madhya Pradesh, Karnataka, and Jharkhand have dropout rates higher than the national average. In West Bengal, more than 15% of districts have a dropout rate exceeding 15% at the secondary school level.</p><h3 class="wp-block-heading">Companies Hiring 10th Pass Candidates:</h3><p>Leading companies embracing 10th pass candidates include Tata Motors, Reliance Retail, Hindustan Unilever Limited, Flipkart, Big Bazaar, Bharti Airtel, Indian Oil Corporation Limited, and LIC. These companies offer a wide range of job opportunities such as retail sales associates, customer service representatives, delivery associates, warehouse associates, field operators, technicians, insurance agents, sales representatives, trade apprentices, and office attendants.</p><p></p><figure class="wp-block-image size-large"><img decoding="async" width="1024" height="576" src="https://rareminds.in/wp-content/uploads/2023/06/Neon-Yellow-Photocentric-Blogger-Bio-Link-Website-1024x576.jpg" alt="School dropout students" class="wp-image-2955" srcset="https://rareminds.in/wp-content/uploads/2023/06/Neon-Yellow-Photocentric-Blogger-Bio-Link-Website-1024x576.jpg 1024w, https://rareminds.in/wp-content/uploads/2023/06/Neon-Yellow-Photocentric-Blogger-Bio-Link-Website-300x169.jpg 300w, https://rareminds.in/wp-content/uploads/2023/06/Neon-Yellow-Photocentric-Blogger-Bio-Link-Website-768x432.jpg 768w, https://rareminds.in/wp-content/uploads/2023/06/Neon-Yellow-Photocentric-Blogger-Bio-Link-Website.jpg 1366w" sizes="(max-width: 1024px) 100vw, 1024px"></figure><p></p><h3 class="wp-block-heading">Programs Supporting Candidates:</h3><p>Skill development initiatives like Skill India and job placement services such as the National Career Service offer specialized training, career counseling<mark class="has-inline-color has-black-color">,</mark> and job search support for 10th pass candidates. These programs aim to enhance employability and facilitate meaningful career paths.</p><h4 class="wp-block-heading">Effectiveness and Results:</h4><p>These programs enhance employability, increase job placements, and contribute to socioeconomic development. They empower individuals, reduce unemployment rates, uplift families from poverty, and foster personal growth and development.</p><h4 class="wp-block-heading">Conclusion:</h4><p>By providing opportunities and investing in students, the government and educational institutions must prioritize awareness and effective skill development programs. Offering specialized training and vocational courses alongside academic studies, students can enhance their <a href="https://rareminds.in/blog/the-journey-to-your-dream-job/">employability</a> and explore various career paths. It is crucial to address the underlying reasons for dropout rates and continue working towards creating a supportive and inclusive educational system that allows every student to rewrite their story from dropout to success.</p><p></p><p>Craving for more information ? Delve into the delectable<a href="https://rareminds.in/blog/food-processing-industry-aka-sunrise-business/" data-type="URL" data-id="https://rareminds.in/blog/food-processing-industry-aka-sunrise-business/"> world of the food industry.</a></p>    </div>', NULL, '2024-06-24 00:00:00', '2024-06-23 21:36:09', NULL, NULL),
	(54, 43, 'Boosting Employee Development: The Benefits of Corporate Outbound Activities', '<div class="blog-description">\r\n        <p>As globalization and technological advancements continue to accelerate, corporate houses and start-ups are mushrooming rapidly. These organizations are in a race to maximize their channels of income and profitability, which often leads to a situation where employees are caught between their personal and professional lives. In order to meet this problem, businesses have turned to outbound programs, which use experiential learning in a foreign, outdoor setting to help employees develop their skills and talents. Through off-site training, outbound training focuses on soft skills like leadership, teamwork, and communication.</p><p>Organisations can use a variety of outbound activities to energize staff members and raise productivity levels. Among these activities are:</p><div class="wp-block-group"><div class="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained"><p>Multidirectional Tug of War: A competitive team exercise that requires strength, strategy, and communication to succeed.</p>\r\n\r\n<p>Phoenix : A team-building activity that requires communication to complete.</p>\r\n\r\n<p>Treasure Hunt :&nbsp; A game that involves using clues to locate hidden objects and needs teamwork and mental agility.</p>\r\n\r\n<p>Sheep and Shepherd: A task based on communication that requires planning and strategy to perform as quickly and accurately as possible.</p></div></div><figure class="wp-block-image size-large"><img decoding="async" width="1024" height="538" src="https://rareminds.in/wp-content/uploads/2023/05/outbound-activities-1024x538.jpg" alt="Outbound activities teamwork" class="wp-image-2949" srcset="https://rareminds.in/wp-content/uploads/2023/05/outbound-activities-1024x538.jpg 1024w, https://rareminds.in/wp-content/uploads/2023/05/outbound-activities-300x158.jpg 300w, https://rareminds.in/wp-content/uploads/2023/05/outbound-activities-768x403.jpg 768w, https://rareminds.in/wp-content/uploads/2023/05/outbound-activities-590x310.jpg 590w, https://rareminds.in/wp-content/uploads/2023/05/outbound-activities.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px"><figcaption class="wp-element-caption">Boost teamwork and employee growth with corporate outbound activities. Encourage the success of your team. \r\n</figcaption></figure><p>The benefits of outbound activities for employees are manifold. These welfare programs and outbound activities help staff members develop their skills and work more effectively. Some of the benefits include:</p><ul><li>Proper assessment: Outbound training allows the company to supervise every employee and assess them better than they could be evaluated by their work in the office.</li>\r\n\r\n<li>Trust: Completing a given activity requires each team member to depend on the other, which creates a mentality of trust and comfort among team members.</li>\r\n\r\n<li>Talent check: Outbound activities give staff members a chance to showcase their talent to their supervisors and team members.</li>\r\n\r\n<li>Accelerates team performance: Offsite activities help the workforce gain a better perspective about teamwork and the goals that can be achieved by working together.</li>\r\n\r\n<li>Personality development: These corporate offsite activities help build confidence within an employee when they achieve a target or complete an assigned task.</li></ul><p>Looking to create a contented, effective, and successful workforce?&nbsp;</p><p>Try our proven outbound activities program, which is intended to improve teamwork, leadership, and communication skills.&nbsp;Our program is customized to your organization’s specific requirements, ensuring maximum involvement and outcomes. Get in touch with us right away to find out more and start building a more effective team!</p>    </div>', NULL, '2024-06-24 00:00:00', '2024-06-23 21:37:30', NULL, NULL);

-- Dumping structure for table rareminds.rm_content_types
DROP TABLE IF EXISTS `rm_content_types`;
CREATE TABLE IF NOT EXISTS `rm_content_types` (
  `ContentTypeId` int NOT NULL AUTO_INCREMENT,
  `ContentName` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `ContentSlug` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `Status` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedOn` timestamp NOT NULL,
  PRIMARY KEY (`ContentTypeId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- Dumping data for table rareminds.rm_content_types: ~12 rows (approximately)
DELETE FROM `rm_content_types`;
INSERT INTO `rm_content_types` (`ContentTypeId`, `ContentName`, `ContentSlug`, `Status`, `CreatedOn`, `ModifiedOn`) VALUES
	(1, 'Hero', 'hero', '1', NULL, '2024-05-10 21:44:45'),
	(2, 'CTAForm', 'cta', '1', NULL, '2024-05-10 21:44:48'),
	(3, 'WhyUs', 'whyus', '1', NULL, '2024-05-10 21:45:13'),
	(4, 'OurServices', 'services', '1', NULL, '2024-05-10 21:59:16'),
	(5, 'Testimonials', 'testimonials', '1', NULL, '2024-05-10 21:59:24'),
	(6, 'CaseStudies', 'successstories', '1', NULL, '2024-05-10 21:59:29'),
	(7, 'Benefits', 'achievements', '1', NULL, '2024-05-10 21:59:49'),
	(8, 'Blog', 'blog', '1', NULL, '2024-05-10 21:59:53'),
	(38, 'ServiceDetails', 'servicedetails', '1', NULL, '2024-05-10 21:59:53'),
	(39, 'ContactUs', 'contactus', '1', '2024-06-17 03:28:42', '2024-06-16 21:58:47'),
	(40, 'CaseStudies', 'casestudies', '1', '2024-06-24 01:51:29', '2024-06-23 20:21:30'),
	(41, 'Blogs', 'blogs', '1', '2024-06-24 02:58:40', '2024-06-23 21:28:42'),
	(42, 'QueryForm', 'queryform', '1', '2024-06-26 02:56:54', '2024-06-25 21:26:57'),
	(43, 'About', 'about', '1', '2024-08-06 02:31:07', '2024-08-05 21:01:15');

-- Dumping structure for table rareminds.rm_countries
DROP TABLE IF EXISTS `rm_countries`;
CREATE TABLE IF NOT EXISTS `rm_countries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sortname` varchar(3) NOT NULL,
  `name` varchar(150) NOT NULL,
  `phonecode` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- Dumping data for table rareminds.rm_countries: ~0 rows (approximately)
DELETE FROM `rm_countries`;

-- Dumping structure for table rareminds.rm_custom_settings
DROP TABLE IF EXISTS `rm_custom_settings`;
CREATE TABLE IF NOT EXISTS `rm_custom_settings` (
  `CustomSettingId` int NOT NULL AUTO_INCREMENT,
  `SiteName` varchar(255) NOT NULL,
  `ShowFeaturedCategoriesOnHome` tinyint NOT NULL DEFAULT '1',
  `ShowFeaturedPostsOnHome` tinyint NOT NULL DEFAULT '1',
  `ShowFeaturedVideoPostsOnHome` tinyint NOT NULL DEFAULT '1',
  `ShowLatestPostsOnHome` tinyint NOT NULL DEFAULT '1',
  `ShowTestimonialsOnHome` tinyint NOT NULL DEFAULT '1',
  `ShowAboutOnHome` tinyint NOT NULL DEFAULT '1',
  `HomeMainTitle` text NOT NULL,
  `HomeSubTitle` text NOT NULL,
  `HomeBanner` text NOT NULL,
  `AboutSite` text NOT NULL,
  `ContactNo1` text NOT NULL,
  `ContactNo2` text NOT NULL,
  `Email1` text NOT NULL,
  `Email2` text NOT NULL,
  `AddressLine1` text NOT NULL,
  `AddressLine2` text NOT NULL,
  `City` text NOT NULL,
  `State` text NOT NULL,
  `Country` text NOT NULL,
  `ZipCode` text NOT NULL,
  `SiteGaCode` text NOT NULL,
  `FacebookLink` text NOT NULL,
  `LinkedinLink` text NOT NULL,
  `TwitterLink` text NOT NULL,
  `InstagramLink` text NOT NULL,
  `PinterestLink` text NOT NULL,
  `ModifiedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`CustomSettingId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Dumping data for table rareminds.rm_custom_settings: 0 rows
DELETE FROM `rm_custom_settings`;
/*!40000 ALTER TABLE `rm_custom_settings` DISABLE KEYS */;
/*!40000 ALTER TABLE `rm_custom_settings` ENABLE KEYS */;

-- Dumping structure for table rareminds.rm_journey
DROP TABLE IF EXISTS `rm_journey`;
CREATE TABLE IF NOT EXISTS `rm_journey` (
  `JourneyId` int NOT NULL AUTO_INCREMENT,
  `Image` varchar(50) NOT NULL,
  `Year` varchar(50) NOT NULL DEFAULT '',
  `Description` text NOT NULL,
  `CreatedOn` datetime NOT NULL,
  `ModifiedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`JourneyId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table rareminds.rm_journey: ~0 rows (approximately)
DELETE FROM `rm_journey`;

-- Dumping structure for table rareminds.rm_pages
DROP TABLE IF EXISTS `rm_pages`;
CREATE TABLE IF NOT EXISTS `rm_pages` (
  `PageId` int NOT NULL AUTO_INCREMENT,
  `PageSlug` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `PageName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `PageSubTitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `MetaKeywords` varchar(255) NOT NULL DEFAULT '0',
  `MetaTitle` varchar(255) NOT NULL DEFAULT '0',
  `OGTitle` varchar(255) NOT NULL DEFAULT '0',
  `OGDescription` varchar(255) NOT NULL DEFAULT '0',
  `MetaDescription` varchar(255) NOT NULL DEFAULT '0',
  `Status` int DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedOn` timestamp NULL DEFAULT NULL,
  `PageType` int DEFAULT NULL,
  PRIMARY KEY (`PageId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table rareminds.rm_pages: ~12 rows (approximately)
DELETE FROM `rm_pages`;
INSERT INTO `rm_pages` (`PageId`, `PageSlug`, `PageName`, `PageSubTitle`, `MetaKeywords`, `MetaTitle`, `OGTitle`, `OGDescription`, `MetaDescription`, `Status`, `CreatedOn`, `ModifiedOn`, `PageType`) VALUES
	(1, '/corporate', 'Corporate', 'Where giants excel and aspirations become a reality', 'corporate, solutions, talent management,\ntalent development', 'Rareminds - Corporate Solutions', 'Rareminds - Corporate Solutions', 'Discover rareminds crafting innovative solutions tailored to meet corporate settings demands, empowering your organization for growth.', 'Explore innovative solutions tailored for corporate needs. Empower your organization with Rareminds expertise in talent management and development.', 1, NULL, NULL, 1),
	(2, '/government', 'Government', 'Where innovation meets bureaucracy head-on', 'government, solutions, talent acquisition, talent management, talent development', 'Rareminds - Government Solutions', 'Rareminds - Government Solutions', 'Explore a comprehensive range of solutions specifically crafted to tackle the challenges faced by government sectors, supported by Rareminds expertise.', 'Discover solutions designed to address government sector challenges. Rareminds offers expertise in talent acquisition, management and development for public sector.', 1, NULL, NULL, 1),
	(3, '/institutions', 'Institutions', 'Liberating the minds of tomorrow\'s leaders', 'institution, solutions, talent acquisition, talent management, talent development', 'Rareminds - Institutional Solutions', 'Rareminds - Institutional Solutions', 'Unlock growth potential with tailored solutions for educational and non-profit institutions. Rareminds specializes in talent acquisition, management and development.', 'Unlock growth potential with tailored solutions for institutional requirements. Rareminds specializes in talent acquisition, management and development for educational institutions.', 1, NULL, NULL, 1),
	(4, '/schools', 'Schools', 'Empowering young minds for a brighter future', 'school, solutions, talent acquisition, talent management, talent development', 'Rareminds - Tailored Solutions for Schools', 'Rareminds - School Solutions', 'Unlock educational excellence with Rareminds. Our tailored solutions empower schools with expertise in talent acquisition, management and development.', 'Transform educational outcomes with Rareminds\' expertise in talent acquisition, management and development. Explore tailored solutions designed for schools and educational institutions.', 1, NULL, NULL, 1),
	(7, '/contact-us', 'Contact Us', 'Contact Us', 'contact, inquiry, contact us', 'Rareminds - Contact Us', 'Rareminds - Contact Us', 'Get in touch with Rareminds for inquiries, collaborations, or any assistance.', 'Get in touch with Rareminds for inquiries, collaborations, or any assistance you may need.', 1, NULL, NULL, 2),
	(9, '/blogs', 'Blogs', 'Blogs', 'blog, articles', 'Rareminds - Blog', 'Rareminds - Blog', 'Discover insightful articles, news and updates on education, talent management and organizational success of Rareminds.', 'Explore insightful articles, news and updates on education, talent management and organizational success.', 1, NULL, NULL, 2),
	(10, '/unlock-your-potential', 'Unlock Your Potential', 'Unlock Your Potential', '0', '0', '0', '0', '0', 1, NULL, NULL, 2),
	(11, '/terms-&-conditions', 'Terms & Conditions', 'Terms & Conditions', '0', '0', '0', '0', '0', 1, NULL, NULL, 2),
	(12, '/privacy-policy', 'Privacy Policy', 'Privacy Policy', '0', '0', '0', '0', '0', 1, NULL, NULL, 2),
	(13, '/about-us', 'About Us', 'About Us', '0', 'Rareminds - About us', '0', '0', '0', 1, NULL, NULL, 2);

-- Dumping structure for table rareminds.rm_page_sections
DROP TABLE IF EXISTS `rm_page_sections`;
CREATE TABLE IF NOT EXISTS `rm_page_sections` (
  `SectionId` int NOT NULL AUTO_INCREMENT,
  `PageId` int NOT NULL DEFAULT '0',
  `SectionName` varchar(255) NOT NULL,
  `SectionFileName` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `Status` varchar(255) NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedOn` timestamp NOT NULL,
  PRIMARY KEY (`SectionId`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

-- Dumping data for table rareminds.rm_page_sections: ~35 rows (approximately)
DELETE FROM `rm_page_sections`;
INSERT INTO `rm_page_sections` (`SectionId`, `PageId`, `SectionName`, `SectionFileName`, `Status`, `CreatedOn`, `ModifiedOn`) VALUES
	(1, 1, 'Hero', 'hero', '1', NULL, '2024-05-10 21:44:45'),
	(2, 1, 'CTAForm', 'cta', '1', NULL, '2024-05-10 21:44:48'),
	(3, 1, 'WhyUs', 'whyus', '1', NULL, '2024-05-10 21:45:13'),
	(4, 1, 'OurServices', 'services', '1', NULL, '2024-05-10 21:59:16'),
	(5, 1, 'Testimonials', 'testimonials', '1', NULL, '2024-05-10 21:59:24'),
	(6, 1, 'SuccessStories', 'successstories', '1', NULL, '2024-05-10 21:59:29'),
	(7, 1, 'Benefits', 'achievements', '1', NULL, '2024-05-10 21:59:49'),
	(8, 1, 'Blog', 'blog', '1', NULL, '2024-05-10 21:59:53'),
	(9, 2, 'Hero', NULL, '1', NULL, '2024-05-10 21:32:26'),
	(10, 2, 'CTAForm', NULL, '1', NULL, '2024-05-10 21:32:55'),
	(11, 2, 'WhyUs', NULL, '1', NULL, '2024-05-10 21:33:16'),
	(12, 2, 'OurServices', NULL, '1', NULL, '2024-05-10 21:33:41'),
	(13, 2, 'Testimonials', NULL, '1', NULL, '2024-05-10 21:34:04'),
	(14, 2, 'SuccessStories', NULL, '1', NULL, '2024-05-10 21:34:22'),
	(15, 2, 'Benefits', NULL, '1', NULL, '2024-05-10 21:34:22'),
	(16, 2, 'Blog', NULL, '1', NULL, '2024-05-10 21:35:06'),
	(17, 3, 'Hero', NULL, '1', NULL, '2024-05-10 21:32:26'),
	(18, 3, 'CTAForm', NULL, '1', NULL, '2024-05-10 21:32:55'),
	(19, 3, 'WhyUs', NULL, '1', NULL, '2024-05-10 21:33:16'),
	(20, 3, 'Hero', NULL, '1', NULL, '2024-05-10 21:32:26'),
	(21, 3, 'CTAForm', NULL, '1', NULL, '2024-05-10 21:32:55'),
	(22, 3, 'WhyUs', NULL, '1', NULL, '2024-05-10 21:33:16'),
	(23, 3, 'OurServices', NULL, '1', NULL, '2024-05-10 21:33:41'),
	(24, 3, 'Testimonials', NULL, '1', NULL, '2024-05-10 21:34:04'),
	(25, 3, 'SuccessStories', NULL, '1', NULL, '2024-05-10 21:34:22'),
	(26, 3, 'Benefits', NULL, '1', NULL, '2024-05-10 21:34:22'),
	(27, 3, 'Blog', NULL, '1', NULL, '2024-05-10 21:35:06'),
	(28, 4, 'Hero', NULL, '1', NULL, '2024-05-10 21:32:26'),
	(29, 4, 'CTAForm', NULL, '1', NULL, '2024-05-10 21:32:55'),
	(30, 4, 'WhyUs', NULL, '1', NULL, '2024-05-10 21:33:16'),
	(31, 4, 'OurServices', NULL, '1', NULL, '2024-05-10 21:33:41'),
	(32, 4, 'Testimonials', NULL, '1', NULL, '2024-05-10 21:34:04'),
	(33, 4, 'SuccessStories', NULL, '1', NULL, '2024-05-10 21:34:22'),
	(34, 4, 'Benefits', NULL, '1', NULL, '2024-05-10 21:34:22'),
	(35, 4, 'Blog', NULL, '1', NULL, '2024-05-10 21:35:06'),
	(36, 6, 'Hero', 'hero', '1', NULL, '2024-05-11 22:40:17'),
	(37, 6, 'ProgramDetails', 'ProgramDetails', '1', NULL, '2024-05-11 22:40:45');

-- Dumping structure for table rareminds.rm_podcast_spotify
DROP TABLE IF EXISTS `rm_podcast_spotify`;
CREATE TABLE IF NOT EXISTS `rm_podcast_spotify` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ContentId` int DEFAULT NULL,
  `audio` varchar(255) NOT NULL,
  `spotify_name` varchar(255) NOT NULL,
  `spotify_duration` int NOT NULL,
  `spotify_description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table rareminds.rm_podcast_spotify: ~0 rows (approximately)
DELETE FROM `rm_podcast_spotify`;

-- Dumping structure for table rareminds.rm_queries
DROP TABLE IF EXISTS `rm_queries`;
CREATE TABLE IF NOT EXISTS `rm_queries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `FullName` varchar(50) DEFAULT NULL,
  `CompanyName` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `PhoneNumber` varchar(50) DEFAULT NULL,
  `Jobtitle` varchar(50) DEFAULT NULL,
  `Services` longtext,
  `ReferralSource` varchar(50) DEFAULT NULL,
  `Comment` varchar(255) DEFAULT NULL,
  `CreatedAt` datetime DEFAULT (now()),
  `UpdatedAt` timestamp NULL DEFAULT (now()),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table rareminds.rm_queries: ~4 rows (approximately)
DELETE FROM `rm_queries`;
INSERT INTO `rm_queries` (`id`, `FullName`, `CompanyName`, `Email`, `PhoneNumber`, `Jobtitle`, `Services`, `ReferralSource`, `Comment`, `CreatedAt`, `UpdatedAt`) VALUES
	(1, 'Gaurav Girdhar', 'Tecvolo Labs', 'gauravgirdhar1994@gmail.com', '8527504198', 'Developer', 'TA, TM', 'Website', 'Comments', '2024-07-10 13:36:52', '2024-07-10 08:06:54'),
	(2, 'Gaurav Girdhar', 'Tecvolo Labs', 'gauravgirdhar1994@gmail.com', '8527504198', 'Developer', 'TA, TM', 'Website', 'Comments', '2024-07-10 13:58:45', '2024-07-10 08:28:45'),
	(3, 'Gaurav Girdhar', 'Tecvolo Labs', 'gauravgirdhar1994@gmail.com', '8527504198', 'Developer', 'TA, TM', 'Website', 'Comment', '2024-07-10 14:06:39', '2024-07-10 08:36:39'),
	(4, 'Gaurav Girdhar', 'Tecvolo Labs', 'gauravgirdhar1994@gmail.com', '8527504198', 'Developer', 'TA, TM', 'Website', 'Comment', '2024-07-10 14:11:08', '2024-07-10 08:41:08'),
	(5, 'Gaurav Girdhar', 'Tecvolo Labs', 'gauravgirdhar1994@gmail.com', '8527504198', 'Developer', 'TA, TM', 'Website', 'Comment', '2024-07-10 14:21:12', '2024-07-10 08:51:12');

-- Dumping structure for table rareminds.rm_section_to_data
DROP TABLE IF EXISTS `rm_section_to_data`;
CREATE TABLE IF NOT EXISTS `rm_section_to_data` (
  `SectionDataId` int NOT NULL AUTO_INCREMENT,
  `SectionId` int NOT NULL DEFAULT '0',
  `Title` text NOT NULL,
  `SubHeading1` text,
  `SubHeading2` text,
  `Description` text,
  `Icon` text,
  `MainImage` text,
  `Year` text,
  `StatsNumber` text,
  `Category` text,
  `Icon1` text,
  `IconTitle1` text,
  `IconDesc1` text,
  `IconTitle3` text,
  `Icon2` text,
  `IconDesc2` text,
  `IconTitle2` text,
  `Icon3` text,
  `IconDesc3` text,
  `Icon4` text,
  `IconTitle4` text,
  `IconDesc4` text,
  `Icon5` text,
  `IconTitle5` text,
  `IconDesc5` text,
  `YoutubeLink` text,
  `Location` text,
  `LocationName` text,
  `LocationAddress` text,
  `LocationEmail` text,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedOn` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`SectionDataId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table rareminds.rm_section_to_data: ~4 rows (approximately)
DELETE FROM `rm_section_to_data`;
INSERT INTO `rm_section_to_data` (`SectionDataId`, `SectionId`, `Title`, `SubHeading1`, `SubHeading2`, `Description`, `Icon`, `MainImage`, `Year`, `StatsNumber`, `Category`, `Icon1`, `IconTitle1`, `IconDesc1`, `IconTitle3`, `Icon2`, `IconDesc2`, `IconTitle2`, `Icon3`, `IconDesc3`, `Icon4`, `IconTitle4`, `IconDesc4`, `Icon5`, `IconTitle5`, `IconDesc5`, `YoutubeLink`, `Location`, `LocationName`, `LocationAddress`, `LocationEmail`, `CreatedOn`, `ModifiedOn`) VALUES
	(1, 1, 'Unlock your company\'s full potential with Rareminds - Your ultimate ally in corporate domination.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-10 21:42:04'),
	(2, 2, 'Form Fill: Unlock Your Potential!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-11 19:02:14'),
	(3, 3, 'Why Us?', NULL, NULL, 'Are you tired of battling the same old "adulting" dilemmas at work? Sick of drowning in corporate lingo and desperate for a team that\'s as diverse as it is dynamic? And setting goals only to watch your team swat them away like flies? Look no further than Rareminds!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-11 19:02:18'),
	(4, 4, 'Our Services', NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-11 19:02:20'),
	(5, 6, 'Success Stories so far', NULL, NULL, 'Prepare to be blown away! Our success stories showcase one dazzling case study from each industry we\'ve partnered with. Dive deep into the functionality and evolution of these triumphs, meticulously curated to resonate with businesses like yours. Stay tuned as we unleash the power of these narratives to inspire and elevate your journey to success.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-11 19:02:33');

-- Dumping structure for table rareminds.rm_services
DROP TABLE IF EXISTS `rm_services`;
CREATE TABLE IF NOT EXISTS `rm_services` (
  `ServiceId` int NOT NULL AUTO_INCREMENT,
  `ServiceTitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `ServiceUrlSlug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `ServiceUserType` int NOT NULL DEFAULT '0',
  `ServiceShortForm` char(50) NOT NULL DEFAULT '0',
  `ServiceShortDescription` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ServiceDescription` longtext NOT NULL,
  `CreatedOn` datetime NOT NULL DEFAULT (now()),
  `ModifiedOn` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ServiceId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table rareminds.rm_services: ~3 rows (approximately)
DELETE FROM `rm_services`;
INSERT INTO `rm_services` (`ServiceId`, `ServiceTitle`, `ServiceUrlSlug`, `ServiceUserType`, `ServiceShortForm`, `ServiceShortDescription`, `ServiceDescription`, `CreatedOn`, `ModifiedOn`) VALUES
	(1, 'Talent Acquisition', 'corporate/talent-acquisition', 1, 'TA', 'Ready to turn the corporate gibberish into action-packed outcomes? Our talent acquisition solutions are…', 'Ready to turn the corporate gibberish into action-packed outcomes? Our talent acquisition solutions are laser-focused on meeting your unique business goals and requirements. We\'ll dive deep into your needs, crafting a personalised recruitment strategy that hits the bullseye. Our streamlined process ensures access to the cream of the crop candidates, saving you precious time and resources. Elevate your recruitment game with our targeted talent acquisition solutions, designed to deliver top-tier candidates efficiently and cost-effectively. Let\'s transform your talent acquisition dreams into reality today!', '2024-05-11 03:19:50', '2024-05-11 21:49:35'),
	(2, 'Talent Development', 'corporate/talent-development', 1, 'TD', 'We\'ve got our ears to the ground, listening keenly to the pulse of organisations like yours. Your employees\' concerns…', 'Investing in your team\'s growth isn\'t just important—it\'s essential for success. With Rareminds, you\'re not just investing; you\'re making a power move. Our tailored training programs are the secret sauce for unlocking your team\'s full potential. Whether it\'s mastering leadership skills or honing technical wizardry, we\'ve got you covered. Let\'s guide your team towards excellence with specialized programs tailored to their needs. Equip them with the skills and knowledge to boost productivity and propel your business to new heights. Don\'t delay—empower your team with our proven training programs and witness your business ascend!', '2024-05-11 03:21:19', '2024-05-11 21:49:39'),
	(3, 'Talent Management', 'corporate/talent-management', 1, 'TM', 'Ready to turn the corporate gibberish into action-packed outcomes? Our talent development solutions are…', 'Crafting bespoke solutions to address your organization\'s talent needs, we specialize in talent management, ensuring every employee feels valued and heard. With our arsenal of tools and years of research, we empower leaders to drive growth and success.', '2024-05-11 03:21:19', '2024-05-11 21:49:41');

-- Dumping structure for table rareminds.rm_service_programs
DROP TABLE IF EXISTS `rm_service_programs`;
CREATE TABLE IF NOT EXISTS `rm_service_programs` (
  `ProgramId` int NOT NULL AUTO_INCREMENT,
  `ServiceId` int DEFAULT NULL,
  `ProgramTitle` varchar(255) DEFAULT NULL,
  `ProgramDescription` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `Status` int DEFAULT NULL,
  `CreatedOn` datetime DEFAULT (now()),
  `ModifiedOn` timestamp NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ProgramId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table rareminds.rm_service_programs: ~9 rows (approximately)
DELETE FROM `rm_service_programs`;
INSERT INTO `rm_service_programs` (`ProgramId`, `ServiceId`, `ProgramTitle`, `ProgramDescription`, `Status`, `CreatedOn`, `ModifiedOn`) VALUES
	(1, 1, 'Performance Management', 'Effective performance management ensures that employees are aligned with company objectives. We help you design and implement performance evaluation systems, including goal setting, performance reviews and feedback mechanisms, to drive productivity and engagement.', 1, '2024-05-12 04:32:43', '2024-05-11 23:02:57'),
	(2, 1, 'Compensation and Benefits', 'Creating a competitive compensation package is vital for attracting and retaining talent. We assist in designing compensation structures, benefits plans and incentive programs that motivate employees while maintaining cost-effectiveness.', 1, '2024-05-12 04:32:43', '2024-05-11 23:02:57'),
	(3, 1, 'Employee Relations and Engagement', 'A positive work culture drives employee satisfaction and retention. Our employee relations services include conflict resolution, employee surveys and engagement programs to promote a harmonious workplace. We also help with employee recognition initiatives to boost morale.', 1, '2024-05-12 04:32:43', '2024-05-11 23:02:57'),
	(4, 1, 'HR Compliance and Legal Support', 'Staying compliant with employment laws and regulations is critical for any business. Our HR compliance team provides guidance on labor laws, workplace safety and anti-discrimination policies. We also offer support for HR audits and risk assessments to ensure legal compliance.', 1, '2024-05-12 04:32:43', '2024-05-11 23:02:57'),
	(5, 2, 'Leadership Development', '<ul><li aria-level=2><span>Equip your current and future leaders with the fuel they need to inspire and motivate their teams for stellar performance.</span><li aria-level=2><span>Our leadership development programs cover topics such as communication, decision-making and strategic thinking.</span></ul>', 1, '2024-05-12 04:32:43', '2024-05-11 23:34:28'),
	(6, 2, 'Technical Skills Enhancement', '<ul><li aria-level=2><span>Stay ahead of the curve with our technical skill enhancement programs designed to keep your workforce up-to-date with the latest industry trends.</span><li aria-level=2><span>From mastering IT certifications to traversing the uncharted territories of emerging technologies, we\'ve got your back – and your warp engines!</span></ul>', 1, '2024-05-12 04:32:43', '2024-05-11 23:34:28'),
	(7, 2, 'Team Building Workshops', '<ul><li aria-level=2><span>Launch your team into the orbit, foster a culture of collaboration and innovation with our team building workshops.</span><li aria-level=2><span>Our interactive sessions focus on improving communication, resolving conflicts and trust-building exercises that are light-years beyond the ordinary.</span></ul>', 1, '2024-05-12 04:32:43', '2024-05-11 23:35:58'),
	(8, 2, 'Soft Skills Training', '<ul><li aria-level=2><span>Leverage our secret weapon for conquering the galaxies of emotional intelligence, adaptability, and resilience. Develop these essential soft skills with workshops and training programs.</span><li aria-level=2><span>Our farsightedness helps employees navigate challenges in the workplace and thrive in diverse environments.</span></ul>', 1, '2024-05-12 04:32:43', '2024-05-11 23:36:50'),
	(9, 2, 'Professional Certification Programs', '<ul><li aria-level=2><span>We offer a constellation of certification options to suit your organization\'s needs. From project management to digital marketing, we’ve it all. Get ready to make your mark on the universe with RareMinds at your side!.</span></ul>', 1, '2024-05-12 04:32:43', '2024-05-11 23:37:34'),
	(10, 2, 'Customized Training Solutions', '<ul><li aria-level=2><span>We work hand-in-hand with you to develop customized programs that hit the bullseye of your objectives and align seamlessly with your organization\'s culture. </span><li aria-level=2><span>With RareMinds, the sky – and beyond – is the limit!</span></ul>', 1, '2024-05-12 04:32:43', '2024-05-11 23:37:34');

-- Dumping structure for table rareminds.rm_subscribers
DROP TABLE IF EXISTS `rm_subscribers`;
CREATE TABLE IF NOT EXISTS `rm_subscribers` (
  `SubscriberId` int NOT NULL AUTO_INCREMENT,
  `SubscriberEmail` varchar(255) NOT NULL,
  `CreatedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`SubscriberId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Dumping data for table rareminds.rm_subscribers: 0 rows
DELETE FROM `rm_subscribers`;
/*!40000 ALTER TABLE `rm_subscribers` DISABLE KEYS */;
/*!40000 ALTER TABLE `rm_subscribers` ENABLE KEYS */;

-- Dumping structure for table rareminds.rm_testimonials
DROP TABLE IF EXISTS `rm_testimonials`;
CREATE TABLE IF NOT EXISTS `rm_testimonials` (
  `TestimonialId` int NOT NULL AUTO_INCREMENT,
  `Testimonials` text,
  `Name` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `Designation` varchar(255) DEFAULT NULL,
  `Company` varchar(255) DEFAULT NULL,
  `YoutubeLink` varchar(255) DEFAULT NULL,
  `Status` int NOT NULL DEFAULT '0',
  `CreatedOn` date DEFAULT NULL,
  `ModifiedOn` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`TestimonialId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Dumping data for table rareminds.rm_testimonials: 0 rows
DELETE FROM `rm_testimonials`;
/*!40000 ALTER TABLE `rm_testimonials` DISABLE KEYS */;
/*!40000 ALTER TABLE `rm_testimonials` ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
