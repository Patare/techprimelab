-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 01, 2025 at 04:50 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `techprimelab`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `uname` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `uname`, `password`) VALUES
(1, 'kalyan@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `pid` int(11) NOT NULL,
  `name` text NOT NULL,
  `reason` text NOT NULL,
  `type` text NOT NULL,
  `division` text NOT NULL,
  `category` text NOT NULL,
  `priority` text NOT NULL,
  `department` text NOT NULL,
  `startdate` date NOT NULL,
  `enddate` date NOT NULL,
  `location` text NOT NULL,
  `status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`pid`, `name`, `reason`, `type`, `division`, `category`, `priority`, `department`, `startdate`, `enddate`, `location`, `status`) VALUES
(1, 'Line Filter', 'Dealership', 'Internal', 'Compressor', 'Quality B', 'High', 'Stratergy', '2024-08-23', '2024-08-02', 'Mumbai', 'Running'),
(2, 'Construction', 'Transport', 'Vendor', 'Compressor', 'Quality D', 'Medium', 'Finance', '2024-08-01', '2024-08-31', 'Ahmednagar', 'Closed'),
(3, 'Sadguru Contracts', 'Personal', 'Vendor', 'Pumps', 'Quality C', 'Medium', 'Quality', '2024-08-17', '2024-08-18', 'Mumbai', 'Running'),
(4, 'Students', 'For Collage', 'External', 'Compressor', 'Quality A', 'High', 'Finance', '2024-08-01', '2024-08-17', 'Nasik', 'Closed'),
(5, 'Road Contract', 'Transport', 'Vendor', 'Water Heater', 'Quality C', 'Medium', 'HR', '2024-08-10', '2024-08-17', 'Ahmednagar', 'Closed'),
(6, 'Grocery Shop', 'For Collage', 'Internal', 'Compressor', 'Quality D', 'Medium', 'Stratergy', '2024-08-11', '2024-08-26', 'Ahmednagar', 'Closed'),
(7, 'Nirmal Dairy', 'For Collage', 'External', 'Filters', 'Quality A', 'Medium', 'Maintenance', '2024-08-12', '2024-08-15', 'Pune', 'Closed'),
(8, 'A&B MARTZ', 'Business', 'Internal', 'Glass', 'Quality A', 'High', 'Stratergy', '2024-08-01', '2024-08-14', 'Pune', 'Registered'),
(9, 'Market Yard', 'Personal', 'Vendor', 'Pumps', 'Quality A', 'Medium', 'Finance', '2024-08-01', '2024-08-11', 'Mumbai', 'Closed'),
(10, 'Pumps Project', 'Dealership', 'Internal', 'Pumps', 'Quality B', 'Medium', 'Stratergy', '2024-08-01', '2024-08-10', 'Ahmednagar', 'Cancelled'),
(11, 'A2Z Website', 'Personal', 'Vendor', 'Filters', 'Quality A', 'Medium', 'Maintenance', '2024-08-03', '2024-08-27', 'Mumbai', 'Closed'),
(12, 'Techprimelab Software', 'Business', 'External', 'Pumps', 'Quality B', 'Low', 'Finance', '2024-08-08', '2024-08-25', 'Pune', 'Closed'),
(13, 'Transport System', 'Transport', 'Vendor', 'Water Heater', 'Quality A', 'High', 'Stores', '2024-08-04', '2024-08-10', 'Mumbai', 'Closed'),
(14, 'Big High Store', 'Business', 'External', 'Filters', 'Quality A', 'High', 'Quality', '2024-08-01', '2024-08-20', 'Mumbai', 'Registered'),
(15, 'Low Capitals ', 'Business', 'External', 'Compressor', 'Quality A', 'Medium', 'Finance', '2024-08-03', '2024-08-13', 'Mumbai', 'Closed'),
(16, 'Job Portal', 'Dealership', 'External', 'Filters', 'Quality A', 'Medium', 'Quality', '2024-08-20', '2024-08-11', 'Goa', 'Cancelled'),
(17, 'Tech Solution', 'Business', 'Internal', 'Filters', 'Quality D', 'Low', 'Maintenance', '2024-08-20', '2024-08-25', 'Nasik', 'Cancelled'),
(18, 'Finance Management', 'Dealership', 'External', 'Pumps', 'Quality C', 'Medium', 'HR', '2024-08-20', '2024-09-04', 'Ahmednagar', 'Closed'),
(19, 'Gallary Shop', 'Dealership', 'Vendor', 'Glass', 'Quality A', 'Medium', 'Stores', '2024-08-01', '2024-08-16', 'Mumbai', 'Closed'),
(20, 'Super Market', 'Business', 'External', 'Filters', 'Quality D', 'High', 'Maintenance', '2024-08-01', '2024-09-11', 'Nasik', 'Closed'),
(21, 'Car Store', 'Dealership', 'Internal', 'Filters', 'Quality A', 'High', 'Quality', '2021-06-10', '2024-08-28', 'Mumbai', 'Closed'),
(22, 'Stores Management', 'Business', 'Internal', 'Compressor', 'Quality C', 'Low', 'Stores', '2024-07-01', '2024-09-15', 'Mumbai', 'Closed'),
(23, 'Survey', 'Dealership', 'External', 'Filters', 'Quality A', 'Medium', 'Finance', '2024-08-11', '2024-08-26', 'Mumbai', 'Closed'),
(24, 'New Oppo', 'Business', 'External', 'Pumps', 'Quality C', 'High', 'Maintenance', '2024-08-10', '2024-08-22', 'Mumbai', 'Running'),
(25, 'pvp college', 'For Collage', 'Internal', 'Compressor', 'Quality A', 'Medium', 'Finance', '2024-09-15', '2024-09-16', 'Pune', 'Closed'),
(26, 'Rohit ', 'Business', 'Internal', 'Filters', 'Quality C', 'High', 'Finance', '2024-12-17', '2024-12-25', 'Pune', 'Closed'),
(27, 'New Company', 'Business', 'Internal', 'Filters', 'Quality A', 'Medium', 'Finance', '2024-12-17', '2024-12-30', 'Pune', 'Closed'),
(28, 'My P', 'Dealership', 'Internal', 'Compressor', 'Quality A', 'High', 'Stratergy', '2025-04-10', '2025-04-16', 'Mumbai', 'Registered'),
(29, 'SKROMAN GLOBAL', 'For Collage', 'External', 'Compressor', 'Quality C', 'Medium', 'Stores', '2025-04-09', '2025-04-21', 'Pune', 'Registered'),
(30, 'Varos Technology', 'Business', 'Internal', 'Filters', 'Quality B', 'Medium', 'Maintenance', '2025-04-18', '2025-04-20', 'Mumbai', 'Closed'),
(31, 'Varos Company', 'Transport', 'External', 'Glass', 'Quality C', 'High', 'Stores', '2025-04-04', '2025-04-20', 'Pune', 'Registered'),
(32, 'Skroman House', 'Dealership', 'Internal', 'Compressor', 'Quality B', 'Medium', 'Stratergy', '2025-04-05', '2025-04-14', 'Mumbai', 'Running'),
(33, 'sadguru construction', 'Dealership', 'External', 'Compressor', 'Quality B', 'Medium', 'Finance', '2025-04-08', '2025-04-15', 'Mumbai', 'Closed');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`pid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
