-- phpMyAdmin SQL Dump
-- version 4.6.5.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8890
-- Generation Time: Feb 18, 2017 at 03:32 AM
-- Server version: 5.6.34
-- PHP Version: 7.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `bamazon_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `department_name` varchar(30) DEFAULT NULL,
  `over_head_costs` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `department_name`, `over_head_costs`) VALUES
(1, 'bed', '100'),
(2, 'bath', '300'),
(3, 'beyond', '220');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(30) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `stock_quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `department_id`, `price`, `stock_quantity`) VALUES
(1, 'pillow', 1, 10, 81),
(2, 'blanket', 1, 25, 210),
(3, 'lamp', 1, 30, 16),
(4, 'tooth brush', 2, 2, 894),
(5, 'mouth wash', 2, 4, 306),
(6, 'soap', 2, 1, 644),
(7, 'towel', 2, 44, 200),
(8, 'shampoo', 2, 7, 1163),
(9, 'basket ball', 3, 38, 100),
(10, 'microscope', 3, 439, 4),
(11, 'harmonica', 3, 8, 23),
(12, 'gameboy', 3, 300, 40),
(13, 'Fish Tank', 3, 57, 3),
(14, 'Car', 3, 5000, 2),
(15, 'Fish Food', 3, 10, 2);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity_purchased` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `product_id`, `quantity_purchased`, `created_at`) VALUES
(1, 9, 1, '2017-02-16 04:35:17'),
(2, 9, 8, '2017-02-16 04:40:13'),
(3, 9, 9, '2017-02-16 04:40:29'),
(4, 11, 1, '2017-02-17 17:21:17'),
(5, 11, 1, '2017-02-17 17:28:59'),
(6, 11, 1, '2017-02-17 17:29:08'),
(7, 8, 1, '2017-02-18 02:18:37'),
(8, 9, 0, '2017-02-18 02:19:01'),
(9, 3, 2, '2017-02-18 02:23:38'),
(10, 14, 1, '2017-02-18 02:25:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`);

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
