-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 29, 2023 at 09:23 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `acadexellence`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--
CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL
);




CREATE TABLE `chat` (
  `chatid` int(11) NOT NULL,
  `role` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `side` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`chatid`, `role`, `username`, `message`, `side`) VALUES
(1, 'instructor', 'swsqws', 'sqwswsw', 'admin'),
(2, 'admin', 'admin@flywin.club', 'swqsqwsqw', 'student'),
(3, 'instructor', 'admin@flywin.club', 'mnbm', 'student'),
(4, 'student', 'Radhikha', 'ssqwswq', 'admin'),
(5, 'admin', 'rutuja', 'sqsqwsq', 'pc'),
(6, 'instructor', 'Radhikha', 'xasxasx', 'student'),
(7, 'student', 'Radhikha', 'swsw', 'pc'),
(8, '', 'Radhikha', '', 'instructor'),
(9, 'instructor', 'rutuja', 'swswq', 'instructor'),
(10, 'student', 'rutuja', 'sqwswq', 'student');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `message`) VALUES
(21, 'PRatibha dev', 'preetu098@gmail.com', 'knknkn'),
(22, 'PRatibha dev', 'preetu098@gmail.com', 'knknkn'),
(23, 'seema', 'shivam098@gmail.com', 'knknkndwedwe'),
(24, 'seema', 'shivam098@gmail.com', 'knknkndwedwe'),
(25, 'priya sen', 'priya@gmail.com', 'hiiiiiiiiiiiiiiiiii'),
(26, 'reenuka', 'reenuka@gmail.com', 'hiiiiiiiii this side renuka'),
(27, 'teena sharma', 'teena@gmail.com', 'hiii this side teena for enquiry');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `cid` int(11) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `course_objective` text NOT NULL,
  `instructor_name` varchar(255) NOT NULL,
  `program_name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`cid`, `course_name`, `course_objective`, `instructor_name`, `program_name`, `role`) VALUES
(4, 'Database', 'this course continue from oops concept', 'pratibha', 'mscComputerScience', ''),
(8, 'java', 'wqswqswqsqwswq', 'pratibha', 'mscDataScience', 'admin'),
(10, 'Android', 'kljkkhefkhkerfhkjerhj', 'teena ', 'mscDataScience', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedbackid` int(11) NOT NULL,
  `role` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `feedback` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedbackid`, `role`, `name`, `email`, `subject`, `feedback`) VALUES
(1, 'student', 'SAI RUTHWIK REDDI', 'sxr3538@mavs.uta.edu', 'problem', 'me hi ek problem hu'),
(2, 'student', 'SAI RUTHWIK REDDI', 'sxr3538@mavs.uta.edu', 'hellllo swdnwendwe', 'bhvhvvvvnvnv'),
(3, 'student', 'teena', 'teena@gmail.com', 'doubt session', 'kndkedkbfbefbkebfkerfberkbf');

-- --------------------------------------------------------

--
-- Table structure for table `instructor_info`
--

CREATE TABLE `instructor_info` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `academic_title` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `office_address` varchar(255) NOT NULL,
  `phone` bigint(20) NOT NULL,
  `bio` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `instructor_info`
--

INSERT INTO `instructor_info` (`id`, `title`, `fname`, `lname`, `academic_title`, `email`, `password`, `office_address`, `phone`, `bio`) VALUES
(1, 'miss', 'instructor', 'Pratibha', 'Rajawat', 'preetu098@gmail.com', 'aaaaa', 'indore city', 8827372145, 'web'),
(2, 'mr', 'instructor', 'rutuja@gmail.com', 'Rajawat', 'preetu098@gmail.com', 'aaaaa', 'indore city', 8827372145, 'web'),
(3, 'miss', 'assistant_professor', 'RAdhika', 'Sharma', 'radhika@gmail.com', 'abcd', 'MG road indore', 8827372145, 'professor in arvindo college');

-- --------------------------------------------------------

--
-- Table structure for table `quality_awarness`
--

CREATE TABLE `quality_awarness` (
  `id` int(11) NOT NULL,
  `service` varchar(255) NOT NULL,
  `pro_name` varchar(255) NOT NULL,
  `objective` text NOT NULL,
  `descrip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quality_awarness`
--

INSERT INTO `quality_awarness` (`id`, `service`, `pro_name`, `objective`, `descrip`) VALUES
(8, 'program', 'MCA schedule exam', 'ldnkfnkrne', 'knknkn'),
(9, 'policy', 'Policy 2023', 'dnkenkfnk', '.ljjlj');

-- --------------------------------------------------------

--
-- Table structure for table `recommendations`
--

CREATE TABLE `recommendations` (
  `id` int(11) NOT NULL,
  `inst_name` varchar(20) NOT NULL,
  `recommend` text NOT NULL,
  `date_type` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recommendations`
--

INSERT INTO `recommendations` (`id`, `inst_name`, `recommend`, `date_type`) VALUES
(1, 'pratibha', 'ssqwsqwsqwsqwdqededwed', '2023-10-28 16:42:14'),
(2, 'Radhikha', 'sqswqsw', '2023-10-28 16:43:17'),
(3, 'Radhikha', 'sswsqwsq', '2023-10-28 16:49:32'),
(4, 'teena ', 'kjljkljljjljlj', '2023-10-29 07:56:37');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`id`, `name`, `lname`, `phone`, `email`, `password`, `role`) VALUES
(12, 'rutuja', 'kavitake', '9893949596', 'rutuja@gmail.com', '1234', 'admin'),
(17, 'Jeet', 'Sarkar', '09893949596', 'jeet@gmail.com', '1234', 'instructor'),
(18, 'rutuja', 'kavitake', '09893949596', 'khalsa@gmail.com', '1234', 'student'),
(19, 'emran', 'senger', '89797797', 'emsenger@gmail.com', '1234', 'pc'),
(20, 'teena ', 'Rao', '8827372156', 'teena@gmail.com', '5678', 'instructor');

-- --------------------------------------------------------

--
-- Table structure for table `student_info`
--

CREATE TABLE `student_info` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `dob` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `emg_contact` varchar(255) NOT NULL,
  `student_Id` int(255) NOT NULL,
  `c_semester` varchar(255) NOT NULL,
  `c_gpa` varchar(255) NOT NULL,
  `enrolled_course` varchar(255) NOT NULL,
  `skills` varchar(255) NOT NULL,
  `interest` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_info`
--

INSERT INTO `student_info` (`id`, `fname`, `lname`, `email`, `phone`, `dob`, `gender`, `address`, `emg_contact`, `student_Id`, `c_semester`, `c_gpa`, `enrolled_course`, `skills`, `interest`) VALUES
(1, 'Pratibha', 'Rajawat', 'preetu098@gmail.com', '08827372145', '2023-10-18', 'Female', 'sqsqw', '243432434', 12, '1', '4.9', 'course-1', 'java,php,python', 'ree'),
(2, 'Pratibha', 'Rajawat', 'preetu098@gmail.com', '08827372145', '', 'Female', 'sqsqw', '87977979797', 12, '1', '4.9', 'course-3', 'java,php,python', 'ddwedwe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`chatid`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedbackid`);

--
-- Indexes for table `instructor_info`
--
ALTER TABLE `instructor_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quality_awarness`
--
ALTER TABLE `quality_awarness`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recommendations`
--
ALTER TABLE `recommendations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `signup`
--
ALTER TABLE signup
 ADD PRIMARY KEY (`id`);


--
-- Indexes for table `student_info`
--
ALTER TABLE `student_info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `chatid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `feedbackid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `instructor_info`
--
ALTER TABLE `instructor_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `quality_awarness`
--
ALTER TABLE `quality_awarness`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `recommendations`
--
ALTER TABLE `recommendations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `student_info`
--
ALTER TABLE `student_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
