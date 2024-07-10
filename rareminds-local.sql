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

-- Dumping data for table rareminds.rm_queries: ~3 rows (approximately)
DELETE FROM `rm_queries`;
INSERT INTO `rm_queries` (`id`, `FullName`, `CompanyName`, `Email`, `PhoneNumber`, `Jobtitle`, `Services`, `ReferralSource`, `Comment`, `CreatedAt`, `UpdatedAt`) VALUES
	(1, 'Gaurav Girdhar', 'Tecvolo Labs', 'gauravgirdhar1994@gmail.com', '8527504198', 'Developer', 'TA, TM', 'Website', 'Comments', '2024-07-10 13:36:52', '2024-07-10 08:06:54'),
	(2, 'Gaurav Girdhar', 'Tecvolo Labs', 'gauravgirdhar1994@gmail.com', '8527504198', 'Developer', 'TA, TM', 'Website', 'Comments', '2024-07-10 13:58:45', '2024-07-10 08:28:45'),
	(3, 'Gaurav Girdhar', 'Tecvolo Labs', 'gauravgirdhar1994@gmail.com', '8527504198', 'Developer', 'TA, TM', 'Website', 'Comment', '2024-07-10 14:06:39', '2024-07-10 08:36:39'),
	(4, 'Gaurav Girdhar', 'Tecvolo Labs', 'gauravgirdhar1994@gmail.com', '8527504198', 'Developer', 'TA, TM', 'Website', 'Comment', '2024-07-10 14:11:08', '2024-07-10 08:41:08'),
	(5, 'Gaurav Girdhar', 'Tecvolo Labs', 'gauravgirdhar1994@gmail.com', '8527504198', 'Developer', 'TA, TM', 'Website', 'Comment', '2024-07-10 14:21:12', '2024-07-10 08:51:12');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
