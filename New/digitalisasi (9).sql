-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2023 at 04:39 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `digitalisasi`
--

-- --------------------------------------------------------

--
-- Table structure for table `leader`
--

CREATE TABLE `leader` (
  `No` int(11) NOT NULL,
  `Uid` varchar(255) NOT NULL,
  `Nama` varchar(255) NOT NULL,
  `Line` varchar(255) NOT NULL,
  `Station` varchar(255) NOT NULL,
  `Area` varchar(255) NOT NULL,
  `Status` varchar(255) NOT NULL,
  `DepartTo` varchar(255) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT current_timestamp(),
  `Dateout` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `leader`
--

INSERT INTO `leader` (`No`, `Uid`, `Nama`, `Line`, `Station`, `Area`, `Status`, `DepartTo`, `Date`, `Dateout`) VALUES
(65, 'REQ0084', 'Tia S (0677)', 'SMT LINE 1', 'SPI (TOP)', 'SMT TOP', 'Solved', 'HRGA & EHS', '2023-09-26 04:23:57', '2023-09-26 04:26:40');

-- --------------------------------------------------------

--
-- Table structure for table `repair`
--

CREATE TABLE `repair` (
  `No` int(11) NOT NULL,
  `Uid` varchar(255) NOT NULL,
  `Nama` varchar(255) NOT NULL,
  `Line` varchar(255) NOT NULL,
  `Problem` varchar(255) NOT NULL,
  `Station` varchar(255) NOT NULL,
  `Area` varchar(255) NOT NULL,
  `Status` varchar(255) NOT NULL,
  `ResponseName` varchar(255) NOT NULL,
  `ResponseTime` timestamp NOT NULL DEFAULT current_timestamp(),
  `ResponseDone` timestamp NOT NULL DEFAULT current_timestamp(),
  `Date` timestamp NOT NULL DEFAULT current_timestamp(),
  `DepartTo` varchar(255) NOT NULL,
  `Department` varchar(255) NOT NULL,
  `Requestor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `repair`
--

INSERT INTO `repair` (`No`, `Uid`, `Nama`, `Line`, `Problem`, `Station`, `Area`, `Status`, `ResponseName`, `ResponseTime`, `ResponseDone`, `Date`, `DepartTo`, `Department`, `Requestor`) VALUES
(293, 'REQ0084', 'Dwi Anggraeni (0141)', 'SMT LINE 1', 'Kejepit', 'SPI (TOP)', 'SMT TOP', 'Solved', 'Hana. N (0744)', '2023-09-26 04:27:47', '2023-09-26 04:30:17', '2023-09-26 04:26:40', 'Production', 'HRGA & EHS', 'Leader'),
(295, 'INC0565', 'Aldi Apriliansyah (0734)', 'SMT LINE 1', 'Rusak', 'Reflow (BOT)', 'SMT BOT', 'Solved', 'Lukman (0157)', '2023-09-26 08:14:44', '2023-09-26 08:18:31', '2023-09-26 08:12:44', 'QC', 'MAINTENANCE & IT', 'Operator'),
(296, 'INC0062', 'Luluk Windy (0653)', 'SMT LINE 1', 'Rusak', 'Seho2 (BE)', 'SMT BE', 'Solved', 'Fakhrul (0670)', '2023-09-26 08:45:00', '2023-09-26 08:46:22', '2023-09-26 08:43:46', 'Production', 'MAINTENANCE & IT', 'Operator'),
(297, 'RTN0052', 'Siti Komalasari (0112)', 'SMT LINE 1', 'Kurang bahan bukan rusak', 'Seho2 (BE)', 'SMT BE', 'Solved', 'Eufrat (0776)', '2023-09-26 08:49:47', '2023-09-26 08:50:17', '2023-09-26 08:48:53', 'Production', 'PURCHASING,PPIC,MP&L', 'Production'),
(298, 'INC0718', 'Siti Komalasari (0112)', 'SMT LINE 1', 'Rusak', 'SPI (TOP)', 'SMT TOP', 'Solved', 'Siti Komalasari (0112)', '2023-09-27 01:34:36', '2023-09-27 01:34:52', '2023-09-27 01:05:44', 'QA', 'MAINTENANCE & IT', 'Operator');

-- --------------------------------------------------------

--
-- Table structure for table `validation`
--

CREATE TABLE `validation` (
  `No` int(11) NOT NULL,
  `Uid` varchar(255) NOT NULL,
  `Nama` varchar(255) NOT NULL,
  `Line` varchar(255) NOT NULL,
  `Problem` varchar(255) NOT NULL,
  `Action` varchar(255) NOT NULL,
  `Station` varchar(255) NOT NULL,
  `Area` varchar(255) NOT NULL,
  `Status` varchar(255) NOT NULL,
  `DepartTo` varchar(255) NOT NULL,
  `Requestor` varchar(255) NOT NULL,
  `ValidationName` varchar(255) NOT NULL,
  `ValidationDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `ResponseValidation` timestamp NOT NULL DEFAULT current_timestamp(),
  `ValidationDescription` varchar(255) NOT NULL,
  `ReturnDepartment` varchar(255) NOT NULL,
  `UidReturn` varchar(255) NOT NULL,
  `DownTime` varchar(255) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `validation`
--

INSERT INTO `validation` (`No`, `Uid`, `Nama`, `Line`, `Problem`, `Action`, `Station`, `Area`, `Status`, `DepartTo`, `Requestor`, `ValidationName`, `ValidationDate`, `ResponseValidation`, `ValidationDescription`, `ReturnDepartment`, `UidReturn`, `DownTime`, `Date`) VALUES
(176, 'REQ0084', 'Hana. N (0744)', 'SMT LINE 1', 'Terjepit', 'Sudah di bawa ke uks', 'SPI (TOP)', 'SMT TOP', 'Running', 'Production', 'HRGA & EHS', 'Dwi Anggraeni (0141)', '2023-09-26 04:33:09', '2023-09-26 04:31:07', 'Good', '', '', '0 Hours : 3 Minutes : 39 Seconds ', '2023-09-26 04:30:17'),
(177, 'INC0565', 'Lukman (0157)', 'SMT LINE 1', 'Sudah di perbaiki', 'Di baut', 'Reflow (BOT)', 'SMT BOT', 'Running', 'QC', 'MAINTENANCE & IT', 'Aji (0036)', '2023-09-26 08:21:32', '2023-09-26 08:20:06', 'Oke aman', '', '', '0 Hours : 3 Minutes : 38 Seconds ', '2023-09-26 08:18:32'),
(178, 'INC0062', 'Fakhrul (0670)', 'SMT LINE 1', 'Oke', 'Oke', 'Seho2 (BE)', 'SMT BE', 'Return', 'Production', 'MAINTENANCE & IT', 'Siti Komalasari (0112)', '2023-09-26 08:48:53', '2023-09-26 08:47:13', 'Kurang bahan bukan rusak', 'PURCHASING,PPIC,MP&L', 'RTN0052', '', '2023-09-26 08:46:23'),
(179, 'RTN0052', 'Eufrat (0776)', 'SMT LINE 1', 'Sudah', 'Di tambahkan', 'Seho2 (BE)', 'SMT BE', 'Running', 'Production', 'PURCHASING,PPIC,MP&L', 'Siti Komalasari (0112)', '2023-09-26 08:51:47', '2023-09-26 08:50:57', 'Oke aman', '', '', '0 Hours : 7 Minutes : 59 Seconds ', '2023-09-26 08:50:17'),
(180, 'INC0718', 'Siti Komalasari (0112)', 'SMT LINE 1', 'Kjjk', 'Hh', 'SPI (TOP)', 'SMT TOP', 'Running', 'QA', 'MAINTENANCE & IT', 'Siti Komalasari (0112)', '2023-09-27 01:36:05', '2023-09-27 01:35:22', 'Ok', '', '', '0 Hours : 3 Minutes : 39 Seconds ', '2023-09-27 01:34:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `leader`
--
ALTER TABLE `leader`
  ADD PRIMARY KEY (`No`);

--
-- Indexes for table `repair`
--
ALTER TABLE `repair`
  ADD PRIMARY KEY (`No`);

--
-- Indexes for table `validation`
--
ALTER TABLE `validation`
  ADD PRIMARY KEY (`No`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `leader`
--
ALTER TABLE `leader`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `repair`
--
ALTER TABLE `repair`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=299;

--
-- AUTO_INCREMENT for table `validation`
--
ALTER TABLE `validation`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=181;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
