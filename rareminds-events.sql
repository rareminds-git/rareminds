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

-- Dumping structure for table rareminds.rm_event_agenda
CREATE TABLE IF NOT EXISTS `rm_event_agenda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `EventId` int DEFAULT NULL,
  `Title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `Time` text,
  `Description` longtext,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci ROW_FORMAT=DYNAMIC;

-- Dumping data for table rareminds.rm_event_agenda: ~7 rows (approximately)
DELETE FROM `rm_event_agenda`;
INSERT INTO `rm_event_agenda` (`id`, `EventId`, `Title`, `Time`, `Description`) VALUES
	(1, 115, 'Opening Ceremony', '9:00 AM - 9:30 AM', 'undefined'),
	(2, 115, 'Research & Mentorship', '9:30 AM - 11:30 AM', 'undefined'),
	(3, 115, 'Mentor Check-ins', '11:30 AM - 12:00 PM', 'undefined'),
	(4, 115, 'Lunch Break', '12:00 PM - 12:45 PM', 'undefined'),
	(5, 115, 'Final Presentations & Demos', '12:45 PM - 2:45 PM', 'undefined'),
	(6, 115, 'Judging & Deliberation', '2:45 PM - 3:15 PM', 'undefined'),
	(7, 115, 'Closing Ceremony & Announcement of Winners', '3:15 PM - 4:00 PM', 'undefined'),
	(8, 116, 'Opening Ceremony', '9:00 AM - 9:30 AM', 'undefined'),
	(9, 116, 'Research & Mentorship', '9:30 AM - 11:30 AM', 'undefined'),
	(10, 116, 'Mentor Check-ins', ' 11:30 AM - 12:00 PM', 'undefined'),
	(11, 116, 'Lunch Break', '12:00 PM - 12:45 PM', 'undefined'),
	(12, 116, 'Final Presentations & Demos', '12:45 PM - 2:45 PM', 'undefined'),
	(13, 116, 'Judging & Deliberation', '2:45 PM - 3:15 PM', 'undefined'),
	(14, 116, 'Closing Ceremony & Announcement of Winners', '3:15 PM - 4:00 PM', 'undefined'),
	(15, 117, 'Opening Ceremony', '9:00 AM - 9:30 AM', 'undefined'),
	(16, 117, 'Research & Mentorship', '9:30 AM - 11:30 AM', 'undefined'),
	(17, 117, 'Mentor Check-ins', '11:30 AM - 12:00 PM', 'undefined'),
	(18, 117, 'Lunch Break', '12:00 PM - 12:45 PM', 'undefined'),
	(19, 117, 'Final Presentations & Demos', '12:45 PM - 2:45 PM', 'undefined'),
	(20, 117, 'Judging & Deliberation', '2:45 PM - 3:15 PM', 'undefined'),
	(21, 117, 'Closing Ceremony & Announcement of Winners', '3:15 PM - 4:00 PM', 'undefined');

-- Dumping structure for table rareminds.rm_event_schedule
CREATE TABLE IF NOT EXISTS `rm_event_schedule` (
  `id` int NOT NULL AUTO_INCREMENT,
  `EventId` int DEFAULT NULL,
  `Title` text,
  `Date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table rareminds.rm_event_schedule: ~18 rows (approximately)
DELETE FROM `rm_event_schedule`;
INSERT INTO `rm_event_schedule` (`id`, `EventId`, `Title`, `Date`) VALUES
	(1, 115, 'Communication and send registration link', '2024-09-17 00:00:00'),
	(2, 115, 'Registration open', '2024-09-17 00:00:00'),
	(3, 115, 'Share the problem statement with details on how, where, what (from Student perspectivity)', '2024-09-19 00:00:00'),
	(4, 115, 'Submission', '2024-09-21 00:00:00'),
	(5, 115, 'Shortlisting', '2024-09-23 00:00:00'),
	(6, 115, 'Online Event', '2024-09-25 00:00:00'),
	(7, 116, 'Communication and send registration link', '2024-09-17 00:00:00'),
	(8, 116, 'Registration open', '2024-09-17 00:00:00'),
	(9, 116, 'Share the problem statement with details on how, where, what (from Student perspectivity)', '2024-09-19 00:00:00'),
	(10, 116, 'Submission', '2024-09-21 00:00:00'),
	(11, 116, 'Shortlisting', '2024-09-23 00:00:00'),
	(12, 116, 'Online Event', '2024-09-25 00:00:00'),
	(13, 117, 'Communication and send registration link', '2024-09-13 00:00:00'),
	(14, 117, 'Registration open', '2024-10-02 00:00:00'),
	(15, 117, 'Share the problem statement with details on how, where, what (from Student perspectivity)', '2024-10-04 00:00:00'),
	(16, 117, 'Submission', '2024-10-07 00:00:00'),
	(17, 117, 'Shortlisting', '2024-10-11 00:00:00'),
	(18, 117, 'Online Event', '2024-10-18 00:00:00');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
