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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table rareminds.rm_admin_users: ~0 rows (approximately)
DELETE FROM `rm_admin_users`;

-- Dumping structure for table rareminds.rm_blogs
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
CREATE TABLE IF NOT EXISTS `rm_cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `state_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table rareminds.rm_cities: ~0 rows (approximately)
DELETE FROM `rm_cities`;

-- Dumping structure for table rareminds.rm_contacts
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
  PRIMARY KEY (`ContentId`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table rareminds.rm_content: ~35 rows (approximately)
DELETE FROM `rm_content`;
INSERT INTO `rm_content` (`ContentId`, `PageId`, `ContentTypeId`, `Heading1`, `Heading2`, `SubHeading1`, `SubHeading2`, `Image1`, `Image2`, `Image3`, `Description`, `ContentDetails`, `ContentSlug`, `ContentAcronym`, `Address1`, `Address2`, `Contact1`, `Contact2`, `EmailAddress`, `CreatedOn`, `ModifiedOn`) VALUES
	(1, 1, 1, 'Unlock your company\'s full potential with Rareminds - Your ultimate ally in corporate domination.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:10:57'),
	(2, 1, 2, 'Form Fill: Unlock Your Potential!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:10:57'),
	(3, 1, 3, 'Why Us?', NULL, NULL, NULL, NULL, NULL, NULL, '<p><span style="font-weight: 400;">Are you tired of battling the same old "adulting" dilemmas at work? Sick of drowning in corporate lingo and desperate for a team that\'s as diverse as it is dynamic? And setting goals only to watch your team swat them away like flies? Look no further than Rareminds!</span></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:26:38'),
	(4, 1, 4, 'Our Services', NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:15:34'),
	(5, 1, 6, 'Success Stories so far', NULL, NULL, NULL, NULL, NULL, NULL, 'Prepare to be blown away! Our success stories showcase one dazzling case study from each industry we\'ve partnered with. Dive deep into the functionality and evolution of these triumphs, meticulously curated to resonate with businesses like yours. Stay tuned as we unleash the power of these narratives to inspire and elevate your journey to success.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:15:31'),
	(6, 2, 1, 'Don\'t settle for mediocrity when greatness is within reach.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:19:16'),
	(7, 2, 2, 'Form Fill: Unlock Your Potential!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:10:57'),
	(8, 3, 3, 'Why Us?', NULL, NULL, NULL, NULL, NULL, NULL, '<p><span style="font-weight: 400;">Are your students ready to conquer the real world beyond grades and vivas? Do they possess the skills to shine as top-notch candidates with exceptional communication and emotional intelligence? It\'s not just about academic prowess anymore; developing soft skills is equally vital for students to thrive in today\'s workforce. But how can you ensure your students have the right skills to excel in their careers?</span></p>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:39:37'),
	(9, 2, 4, 'Our Services', NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:15:34'),
	(10, 2, 6, 'Success Stories so far', NULL, NULL, NULL, NULL, NULL, NULL, 'Prepare to be blown away! Our success stories showcase one dazzling case study from each industry we\'ve partnered with. Dive deep into the functionality and evolution of these triumphs, meticulously curated to resonate with businesses like yours. Stay tuned as we unleash the power of these narratives to inspire and elevate your journey to success.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:15:31'),
	(11, 3, 1, 'Rareminds: Empowering Students to Reach New Heights', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:21:39'),
	(12, 3, 2, 'Form Fill: Unlock Your Potential!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:10:57'),
	(13, 2, 3, 'Why Us?', NULL, NULL, NULL, NULL, NULL, NULL, '<h2><span style="font-weight: 400;">Are you dedicated to enhancing facilities in your jurisdiction? Do you aspire to transform your region into a thriving center of growth and opportunity? At Rareminds, we\'re committed to supporting your vision.</span></h2>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:45:49'),
	(14, 3, 4, 'Our Services', NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:15:34'),
	(15, 3, 6, 'Success Stories so far', NULL, NULL, NULL, NULL, NULL, NULL, 'Prepare to be blown away! Our success stories showcase one dazzling case study from each industry we\'ve partnered with. Dive deep into the functionality and evolution of these triumphs, meticulously curated to resonate with businesses like yours. Stay tuned as we unleash the power of these narratives to inspire and elevate your journey to success.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:15:31'),
	(16, 4, 1, 'Get ready to unleash the boundless potential of our nation\'s future.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:23:47'),
	(17, 4, 2, 'Form Fill: Unlock Your Potential!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:10:57'),
	(18, 4, 3, 'Why Us?', NULL, NULL, NULL, NULL, NULL, NULL, '<h2><span style="font-weight: 400;">Are critical thinking, decision-making and problem-solving your top three priorities to ensure your students stand out? Want them to be more than just book-smart? Well, buckle up because Rareminds is here to turn your students into tomorrow\'s leaders! We offer an annual program and summer camp activities to help your students navigate technology-ridden evenings and foster the attention and emotional strength needed to conquer the world.</span></h2>', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:47:01'),
	(19, 4, 4, 'Our Services', NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:15:34'),
	(20, 4, 6, 'Success Stories so far', NULL, NULL, NULL, NULL, NULL, NULL, 'Prepare to be blown away! Our success stories showcase one dazzling case study from each industry we\'ve partnered with. Dive deep into the functionality and evolution of these triumphs, meticulously curated to resonate with businesses like yours. Stay tuned as we unleash the power of these narratives to inspire and elevate your journey to success.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 22:15:31'),
	(21, 1, 38, 'Talent Acquisition', NULL, 'Ready to turn the corporate gibberish into action-packed outcomes? Our talent acquisition solutions are…', NULL, NULL, NULL, NULL, 'Ready to turn the corporate gibberish into action-packed outcomes? Our talent acquisition solutions are laser-focused on meeting your unique business goals and requirements. We\'ll dive deep into your needs, crafting a personalised recruitment strategy that hits the bullseye. Our streamlined process ensures access to the cream of the crop candidates, saving you precious time and resources. Elevate your recruitment game with our targeted talent acquisition solutions, designed to deliver top-tier candidates efficiently and cost-effectively. Let\'s transform your talent acquisition dreams into reality today!', NULL, 'corporate/talent-acquisition', 'TA', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 23:34:35'),
	(22, 1, 38, 'Talent Development', NULL, 'Are you facing a high attrition rate? Unsure of how to retain talent and create a high performing team? We\'ve got…', NULL, NULL, NULL, NULL, '<p><span style="font-weight: 400;">Are you facing a high attrition rate? Unsure of how to retain talent and create a high performing team? We\'ve got our ears to the ground, listening keenly to the pulse of organisations like yours. If you are finding yourself in the middle of the ocean with challenges like - How to cover the skills gap? What should we do about leadership development? How to retain resources with budget constraints? How to integrate technology into processes without hampering productivity? And of all, how to measure the impact of all these? Then, our meticulously crafted training programs for Talent Development Programs like Leadership Building, Communication Skills Enhancement, Upskilling and Reskilling will help your organisation reach on the right trajectory.&nbsp;</span></p>', NULL, 'corporate/talent-development', 'TD', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 23:35:19'),
	(23, 1, 38, 'Talent Management', NULL, 'Ready to turn the corporate gibberish into action-packed outcomes? Our talent management solutions are…', NULL, NULL, NULL, NULL, '<p><span style="font-weight: 400;">Ready to turn the corporate gibberish into action-packed outcomes? Our talent management solutions are the superpowers needed to solve the everyday talent management challenges.&nbsp;</span></p>', NULL, 'corporate/talent-management', 'TM', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 23:35:21'),
	(24, 3, 38, 'Talent Development', NULL, 'Ready to unlock the hidden talents of your students and propel them towards success? Our services are…', NULL, NULL, NULL, NULL, 'Ready to unlock the hidden talents of your students and propel them towards success? Our services are tailored to cater to your institution\'s unique needs including capacity building for faculties. From Engineering to Management, Degree to Architecture, Polytechnic, or ITI colleges, we offer custom training programs and leadership development initiatives that foster personal growth and professional development. Investing in your institution\'s human capital can have a profound impact on your community and we\'re here to help you achieve it. Contact us today to learn more about our talent development services and how we can support your institution\'s growth and success.', NULL, 'institution/talent-development', 'TD', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 23:36:28'),
	(25, 3, 38, 'Talent Management', NULL, 'Struggling to keep your academic institution running smoothly? Let us be your…', NULL, NULL, NULL, NULL, 'Struggling to keep your academic institution running smoothly? Let us be your guiding light with our talent management services! We can help you optimize your workforce, minimize redundancies and streamline processes to ensure everything runs like a well-oiled machine. Happy employees are the cornerstone of success and we understand that everyone is unique. Our customised solutions foster a culture of excellence, attracting top talent, retaining current staff and enhancing their skills and capabilities. Plus, we can help you build your HRD Center, making it even easier to achieve your goals and take your institution to the next level!', NULL, 'institution/talent-management', 'TM', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 23:36:34'),
	(26, 4, 38, 'Talent Development', NULL, 'Our training programs are dynamic tailor-made for the next generation of leaders eager to make a difference.', NULL, NULL, NULL, NULL, '<p><span style="font-weight: 400;">Our dynamic training programs are meticulously crafted for the next generation of leaders, poised to redefine success in a rapidly evolving world. With a focus on cutting-edge technologies like blockchain and AI, our comprehensive courses are designed to equip students with the skills and knowledge necessary to lead with integrity and innovation. From effective communication to critical thinking, decision-making and problem-solving, our training modules instill essential leadership qualities essential for navigating the complexities of tomorrow\'s challenges. Join us today and let\'s embark on a transformative journey of personal and professional growth!</span></p>', NULL, 'schools/talent-development', 'TD', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 23:37:16'),
	(27, 2, 38, 'Talent Acquisition', NULL, 'Revolutionize your talent search! Our cutting-edge Talent Acquisition services employ the latest technologies', NULL, NULL, NULL, NULL, 'Transform your talent search with our innovative Talent Acquisition services! We harness cutting-edge technologies and recruitment strategies to discover top-notch candidates for your organization. Whether you\'re seeking short term contractual resources or long term hires, we\'ve got you covered.', NULL, 'government/talent-acquisition', 'TA', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 23:37:34'),
	(28, 2, 38, 'Talent Development', NULL, 'Unlock the hidden potential within your teams with our tailored Talent Development programs.... ', NULL, NULL, NULL, NULL, 'Unlock the hidden potential within your teams with our tailored Talent Development programs. From Engineering to Management, Degree to Architecture and beyond, our expert trainers specialize in crafting bespoke initiatives to elevate your institution across all departments. We boast a robust history of success in diverse sectors such as Agriculture and Farmers\' Welfare, Commerce and Industry, Electronics and Information Technology, Heavy Industries, Jal Shakti, Tourism, Power and beyond.', NULL, 'government/talent-development', 'TD', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 23:37:44'),
	(29, 2, 38, 'Talent Management', NULL, 'Ready to propel your city\'s educational landscape to new heights? Our dynamic Talent Management services are ...', NULL, NULL, NULL, NULL, 'Ready to propel your city\'s educational landscape to new heights? Our dynamic Talent Management services are the catalyst for transformation. From streamlining operations to optimizing your workforce, we\'ll work with you to develop a customised strategy for unparalleled success and productivity. Whether you\'re in academia, communications, or any public department, we\'re here to support your journey towards excellence.', NULL, 'government/talent-management', 'TM', NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-05-24 23:37:52'),
	(30, 1, 7, 'Till Now We’ve Benefitted', NULL, NULL, NULL, NULL, NULL, NULL, 'Need proof of our prowess? Scroll through our treasure trove of client testimonials handpicked from a diverse range of industries. From healthcare to technology, finance to manufacturing, and beyond, hear firsthand accounts of how Rareminds has revolutionised businesses just like yours. Let our satisfied clients\' voices reassure you of the transformative impact we can bring to your industry. Witness the Rareminds magic in action!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-06-16 21:08:47'),
	(31, 2, 7, 'Till Now We’ve Benefitted', NULL, NULL, NULL, NULL, NULL, NULL, 'Need proof of our prowess? Scroll through our treasure trove of client testimonials handpicked from a diverse range of industries. From healthcare to technology, finance to manufacturing, and beyond, hear firsthand accounts of how Rareminds has revolutionised businesses just like yours. Let our satisfied clients\' voices reassure you of the transformative impact we can bring to your industry. Witness the Rareminds magic in action!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-06-16 21:08:47'),
	(32, 3, 7, 'Till Now We’ve Benefitted', NULL, NULL, NULL, NULL, NULL, NULL, 'Need proof of our prowess? Scroll through our treasure trove of client testimonials handpicked from a diverse range of industries. From healthcare to technology, finance to manufacturing, and beyond, hear firsthand accounts of how Rareminds has revolutionised businesses just like yours. Let our satisfied clients\' voices reassure you of the transformative impact we can bring to your industry. Witness the Rareminds magic in action!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-06-16 21:08:47'),
	(33, 4, 7, 'Till Now We’ve Benefitted', NULL, NULL, NULL, NULL, NULL, NULL, 'Need proof of our prowess? Scroll through our treasure trove of client testimonials handpicked from a diverse range of industries. From healthcare to technology, finance to manufacturing, and beyond, hear firsthand accounts of how Rareminds has revolutionised businesses just like yours. Let our satisfied clients\' voices reassure you of the transformative impact we can bring to your industry. Witness the Rareminds magic in action!', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-05-25 00:00:00', '2024-06-16 21:08:47'),
	(34, 7, 39, 'Locations', 'Seeking support? Look no further! Our squad is here to lend a hand in every way imaginable. Whether you\'re craving advice, resources, or just a friendly chat, we\'ve got your back. Fill out the form below and discover how we can light up your journey. Your success is our top priority and we\'re itching to hear from you!', 'Contact Address', 'Registered Office', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'IndiQube Octagon No.643, 80ft Road, Opp. Swathi Maharaja Hotel, 4th Block, Koramangala, Bengaluru, Karnataka – 560034.', 'Rareminds India Pvt Ltd., Indiranagar, Bengaluru, Karnataka.', NULL, NULL, NULL, '2024-06-17 00:00:00', '2024-06-16 22:04:52'),
	(35, 7, 39, 'Inquiry Hotline', 'Prefer the warmth of human connection? Give us a buzz on our inquiry hotline and one of our friendly representatives will be on the line to tackle any queries you\'ve got. We\'re standing by, ready to dive in and help out whenever you need it!', 'Contact Number', 'Email Address', NULL, NULL, NULL, 'For University / Colleges', NULL, NULL, NULL, NULL, NULL, '+91 819 707 1905', '+91 819 707 1949', 'info@rareminds.in', '2024-06-17 00:00:00', '2024-06-16 22:23:23');

-- Dumping structure for table rareminds.rm_content_details
CREATE TABLE IF NOT EXISTS `rm_content_details` (
  `ContentDetailId` int NOT NULL AUTO_INCREMENT,
  `ContentId` int DEFAULT NULL,
  `ContentTitle` varchar(255) DEFAULT NULL,
  `ContentDescription` longtext,
  `ContentSubDescription` longtext,
  `CreatedOn` datetime DEFAULT (curdate()),
  `ModifiedOn` timestamp NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ContentDetailId`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table rareminds.rm_content_details: ~34 rows (approximately)
DELETE FROM `rm_content_details`;
INSERT INTO `rm_content_details` (`ContentDetailId`, `ContentId`, `ContentTitle`, `ContentDescription`, `ContentSubDescription`, `CreatedOn`, `ModifiedOn`) VALUES
	(1, 21, 'Performance Management', '<p><strong>&nbsp;</strong>At RareMinds, we\'re all about turbocharging performance to rocket your organisation to success! We understand that effective performance management is essential for organisational success. We partner with you to design and implement performance evaluation systems that align with your company objectives. From goal setting to performance reviews and feedback mechanisms, we make sure your employees are revved up, engaged and propelling productivity to interstellar heights!</p>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:51:55'),
	(2, 21, 'Compensation and Benefits', '<p>Crafting a competitive compensation package is crucial for attracting and retaining top talent. Our crew specializes in crafting compensation structures and benefits plans that are tailor-made for your organization\'s mission. We find the sweet spot between fueling motivation and keeping costs grounded, ensuring your compensation strategy supports your business goals.</p>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:51:55'),
	(3, 21, 'Employee Relations and Engagement', '<p>A positive work culture is the cornerstone of employee satisfaction and retention. At RareMinds, we offer comprehensive employee relations services to promote harmony in the workplace. From conflict resolution to employee surveys and engagement programs, we cultivate a supportive atmosphere where every team member feels like they\'re part of a galactic adventure. Additionally, our employee recognition</p>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:51:55'),
	(4, 21, 'HR Compliance and Legal Support', '<p>Staying compliant with employment laws and regulations is non-negotiable, Our dedicated HR compliance team is your trusty co-pilot. Providing expert guidance on labor laws, workplace safety and anti-discrimination policies. We conduct HR audits and risk assessments to ensure that your organization remains legally compliant at all times, giving you peace of mind and minimizing legal risks.</p>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:51:55'),
	(5, 22, 'Leadership Development', '<ul><li>Equip your current and future leaders with the fuel they need to inspire and motivate their teams for stellar performance.<li>Our leadership development programs cover topics such as communication, decision-making and strategic thinking.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:55:52'),
	(6, 22, 'Technical Skills Enhancement', '<ul><li>Stay ahead of the curve with our technical skill enhancement programs designed to keep your workforce up-to-date with the latest industry trends.<li>From mastering IT certifications to traversing the uncharted territories of emerging technologies, we\'ve got your back – and your warp engines!</ul>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:55:52'),
	(7, 22, 'Team Building Workshops', '<ul><li>Launch your team into the orbit, foster a culture of collaboration and innovation with our team building workshops.<li>Our interactive sessions focus on improving communication, resolving conflicts and trust-building exercises that are light-years beyond the ordinary.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:55:52'),
	(8, 22, 'Soft Skills Training', '<ul><li>Leverage our secret weapon for conquering the galaxies of emotional intelligence, adaptability and resilience. Develop these essential soft skills with workshops and training programs.<li>Our farsightedness helps employees navigate challenges in the workplace and thrive in diverse environments.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:58:10'),
	(9, 22, 'Professional Certification Programs', '<ul><li>We offer a constellation of certification options to suit your organisation\'s needs. From project management to digital marketing, we’ve it all. Get ready to make your mark on the universe with RareMinds at your side!.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:58:10'),
	(10, 22, 'Customised Training Solutions', '<ul><li>We work hand-in-hand with you to develop customised programs that hit the bullseye of your objectives and align seamlessly with your organisation\'s culture. <li>With RareMinds, the sky – and beyond – is the limit!</ul>', NULL, '2024-05-25 00:00:00', '2024-05-24 23:59:41'),
	(11, 23, 'Performance Management Systems', '<ul><li>Customised performance management systems tailored to align with your organisation\'s objectives and values.<li>Implementation of goal-setting frameworks, performance reviews and feedback mechanisms to drive employee productivity and engagement.<li>Regular performance evaluations and assessments to track progress and identify areas for improvement.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:00:47'),
	(12, 23, 'Employee Engagement Initiatives', '<ul><li>Innovative employee engagement initiatives aimed at creating a positive work culture and enhancing employee satisfaction.<li>Employee recognition programs to acknowledge and reward outstanding performance and contributions.<li>Employee surveys and feedback mechanisms to gather insights and improve overall employee experience.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:01:38'),
	(13, 23, 'HR Compliance and Legal Support', '<ul><li>Expert guidance on HR compliance and legal matters to ensure adherence to employment laws and regulations.<li>Assistance with HR audits and risk assessments to identify and mitigate potential compliance issues.<li>Support in developing and implementing workplace policies and procedures to maintain legal compliance and mitigate risks.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:01:38'),
	(14, 24, 'Emerging Leaders Program', '<ul><li>Tailored leadership skills programs designed to nurture and enhance the skills of the emerging leaders.<li>Focus on key leadership competencies such as strategic thinking, decision-making and team management.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:01:38'),
	(15, 24, 'Performance Tracking Systems', '<ul><li>Customised performance management systems to effectively track, evaluate and improve student performance.<li>Training and hands-on workshops on goal-setting frameworks.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:14:21'),
	(16, 24, 'Skill Enhancement Modules', '<ul><li>Interactive workshops and training sessions focused on enhancing skills helping them attain new skills like AI, Machine Learning equipped with Creative Thinking.<li>Broad topics include communication skills, problem-solving and adaptability to prepare for future challenges.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:15:24'),
	(17, 25, 'Leadership Development Programs', '<ul><li><span>Tailored programs designed to nurture current and emerging leaders.</span><li><span>Focus on key competencies like strategic thinking and team management.</span></ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:16:22'),
	(18, 25, 'Performance Management Systems', '<ul><li>Customised systems to track, evaluate and improve performance.<li>Includes goal-setting frameworks and regular performance reviews.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:17:07'),
	(19, 25, 'Engagement Initiatives', '<ul><li>Innovative programs to foster a positive environment and a culture of appreciation.<li>Strategies include recognition programs and team-building activities.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:17:45'),
	(20, 25, 'Talent Development Workshops', '<ul><li>Interactive sessions focused on enhancing skills.</ul>', NULL, '2024-05-25 00:00:00', '2024-05-25 00:17:45'),
	(21, 26, 'Leadership Development Workshops', 'Gain essential leadership skills through interactive workshops focused on decision-making, teamwork and strategic thinking.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46'),
	(22, 26, 'Communication Skills Training', 'Hone your communication abilities through targeted training sessions, including public speaking, effective writing and interpersonal communication.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46'),
	(23, 26, 'Problem-Solving Seminars', 'Develop critical thinking and problem-solving skills through engaging seminars and case studies designed to challenge and inspire.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46'),
	(24, 26, 'Career Readiness Workshops', 'Prepare for the professional world with workshops on resume writing, interview skills and job search strategies.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46'),
	(25, 26, 'Industry-Specific Training', 'Explore specialized training programs tailored to various industries, providing insights and skills relevant to specific career paths.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46'),
	(26, 27, 'Recruitment', 'This includes creating job descriptions, posting job openings on relevant platforms and utilizing recruitment networks to reach a diverse pool of candidates for resources on contract or short term. ', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46'),
	(27, 27, 'Building a Talent Pipeline', 'Understanding the requirements of various government departments, we can build and maintain a pipeline of qualified candidates for current and future hiring needs. By proactively sourcing and engaging with potential candidates, they ensure a steady supply of talent to meet the organization\'s demands.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46'),
	(28, 27, 'Diversity and Inclusion Initiatives', 'We help government departments develop and implement diversity and inclusion strategies to attract a diverse workforce. This includes outreach efforts to underrepresented groups, diversity training programs and initiatives to foster an inclusive workplace culture.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46'),
	(29, 27, 'Consulting', 'Our consulting services cater to different government sectors, addressing a wide range of talent acquisition challenges. From sourcing the ideal talent promptly and for the required duration to advising on future resource needs, we offer comprehensive support. Our expertise spans from providing contracted resources to strategic consultations on forthcoming staffing requirements.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46'),
	(30, 28, 'Customised Training Programs', 'We design and deliver tailored training programs specific to the needs and objectives of government departments. These programs are carefully crafted to enhance the skills, knowledge and capabilities of the staff, empowering them to contribute more effectively to the department\'s mission.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:21:46'),
	(31, 28, 'Leadership Development', 'Our strategies are designed to prepare the next generation of government leaders. Through targeted coaching and skills development, we help in preparing the officials for higher leadership roles and ensuring a smooth succession process.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:26:17'),
	(32, 28, 'Performance Improvement', 'Working closely with government departments to identify the areas for performance improvement and developing plans to address them effectively. To drive measurable results and elevate performance across the department remains a major objective throughout.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:26:17'),
	(33, 28, 'Change Management', 'In a constantly evolving landscape, change is inevitable. We ensure adaptability by providing you with extensive change management programs to help navigate transitions smoothly and minimise disruption. ', NULL, '2024-05-25 00:00:00', '2024-05-25 00:26:17'),
	(34, 28, 'Continuous Improvement Initiatives', 'Through regular feedback mechanisms and benchmarking against industry best practices, we ensure that our programs are relevant, contemporary and aligned with the future needs of the government agencies and sectors like Public Works, Energy Department, Higher Education, MSMEs, Agriculture, Fisheries and more.', NULL, '2024-05-25 00:00:00', '2024-05-25 00:26:17'),
	(35, 30, 'Individuals Transformed', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '300,000', '2024-06-17 02:41:36', '2024-06-16 21:11:38'),
	(36, 30, 'Organisations Collaborated', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '75', '2024-06-17 02:41:36', '2024-06-16 21:11:38'),
	(37, 30, 'Institutions enhanced', '', '80', '2024-06-17 02:41:36', '2024-06-16 21:11:38'),
	(38, 31, 'Individuals Transformed', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '300,000', '2024-06-17 02:41:36', '2024-06-16 21:11:38'),
	(39, 31, 'Organisations Collaborated', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '75', '2024-06-17 02:41:36', '2024-06-16 21:11:38'),
	(40, 31, 'Institutions enhanced', '', '80', '2024-06-17 02:41:36', '2024-06-16 21:11:38'),
	(41, 32, 'Individuals Transformed', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '300,000', '2024-06-17 02:41:36', '2024-06-16 21:11:38'),
	(42, 32, 'Organisations Collaborated', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '75', '2024-06-17 02:41:36', '2024-06-16 21:11:38'),
	(43, 32, 'Institutions enhanced', '', '80', '2024-06-17 02:41:36', '2024-06-16 21:11:38'),
	(44, 33, 'Individuals Transformed', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '300,000', '2024-06-17 02:41:36', '2024-06-16 21:11:38'),
	(45, 33, 'Organisations Collaborated', 'Our dedicated efforts have reached and transformed the lives of over 300,000 individuals, empowering them with the skills and knowledge to excel in their personal and professional endeavors. ', '75', '2024-06-17 02:41:36', '2024-06-16 21:11:38'),
	(46, 33, 'Institutions enhanced', '', '80', '2024-06-17 02:41:36', '2024-06-16 21:11:38'),
	(47, 39, NULL, NULL, NULL, '2024-06-17 00:00:00', '2024-06-16 21:59:11');

-- Dumping structure for table rareminds.rm_content_types
CREATE TABLE IF NOT EXISTS `rm_content_types` (
  `ContentTypeId` int NOT NULL AUTO_INCREMENT,
  `ContentName` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `ContentSlug` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci DEFAULT NULL,
  `Status` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedOn` timestamp NOT NULL,
  PRIMARY KEY (`ContentTypeId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- Dumping data for table rareminds.rm_content_types: ~10 rows (approximately)
DELETE FROM `rm_content_types`;
INSERT INTO `rm_content_types` (`ContentTypeId`, `ContentName`, `ContentSlug`, `Status`, `CreatedOn`, `ModifiedOn`) VALUES
	(1, 'Hero', 'hero', '1', NULL, '2024-05-10 21:44:45'),
	(2, 'CTAForm', 'cta', '1', NULL, '2024-05-10 21:44:48'),
	(3, 'WhyUs', 'whyus', '1', NULL, '2024-05-10 21:45:13'),
	(4, 'OurServices', 'services', '1', NULL, '2024-05-10 21:59:16'),
	(5, 'Testimonials', 'testimonials', '1', NULL, '2024-05-10 21:59:24'),
	(6, 'SuccessStories', 'successstories', '1', NULL, '2024-05-10 21:59:29'),
	(7, 'Benefits', 'achievements', '1', NULL, '2024-05-10 21:59:49'),
	(8, 'Blog', 'blog', '1', NULL, '2024-05-10 21:59:53'),
	(38, 'ServiceDetails', 'servicedetails', '1', NULL, '2024-05-10 21:59:53'),
	(39, 'ContactUs', 'contactus', '1', '2024-06-17 03:28:42', '2024-06-16 21:58:47');

-- Dumping structure for table rareminds.rm_countries
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
CREATE TABLE IF NOT EXISTS `rm_pages` (
  `PageId` int NOT NULL AUTO_INCREMENT,
  `PageSlug` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `PageName` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `PageSubTitle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `MetaKeywords` varchar(255) NOT NULL DEFAULT '0',
  `MetaDescription` varchar(255) NOT NULL DEFAULT '0',
  `Status` int DEFAULT NULL,
  `CreatedOn` datetime DEFAULT NULL,
  `ModifiedOn` timestamp NULL DEFAULT NULL,
  `PageType` int DEFAULT NULL,
  PRIMARY KEY (`PageId`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table rareminds.rm_pages: ~6 rows (approximately)
DELETE FROM `rm_pages`;
INSERT INTO `rm_pages` (`PageId`, `PageSlug`, `PageName`, `PageSubTitle`, `MetaKeywords`, `MetaDescription`, `Status`, `CreatedOn`, `ModifiedOn`, `PageType`) VALUES
	(1, '/corporate', 'Corporate', 'Where giants excel and aspirations become a reality', '0', '0', 1, NULL, NULL, 1),
	(2, '/government', 'Government', 'Where innovation meets bureaucracy head-on', '0', '0', 1, NULL, NULL, 1),
	(3, '/institutions', 'Institutions', 'Liberating the minds of tomorrow\'s leaders', '0', '0', 1, NULL, NULL, 1),
	(4, '/schools', 'Schools', 'Empowering young minds for a brighter future', '0', '0', 1, NULL, NULL, 1),
	(6, '/services', 'Services', '', '0', '0', NULL, NULL, NULL, 2),
	(7, '/contact-us', 'Contact Us', 'Contact Us', '0', '0', NULL, NULL, NULL, 2);

-- Dumping structure for table rareminds.rm_page_sections
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

-- Dumping structure for table rareminds.rm_section_to_data
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
