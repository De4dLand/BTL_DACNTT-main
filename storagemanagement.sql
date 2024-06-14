-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 14, 2024 lúc 09:28 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `storagemanagement`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbcategory`
--

CREATE TABLE `tbcategory` (
  `Category_ID` int(11) NOT NULL,
  `Category_Name` varchar(200) NOT NULL,
  `Category_Description` varchar(2000) NOT NULL,
  `status` int(10) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbcustomer`
--

CREATE TABLE `tbcustomer` (
  `Customer_ID` int(11) NOT NULL,
  `Customer_Name` varchar(200) NOT NULL,
  `Customer_Address` varchar(2000) NOT NULL,
  `Customer_Email` varchar(2000) NOT NULL,
  `Customer_Phone` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tborder`
--

CREATE TABLE `tborder` (
  `Order_ID` int(11) NOT NULL,
  `Order_CreateDate` datetime NOT NULL,
  `Order_ReceiveDate` datetime DEFAULT NULL,
  `Order_Price` int(11) NOT NULL,
  `Customer_ID` int(11) NOT NULL,
  `OrderDetail_ID` int(11) NOT NULL,
  `Storage_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tborderdetail`
--

CREATE TABLE `tborderdetail` (
  `OrderDetail_ID` int(11) NOT NULL,
  `Product_ID` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbproduct`
--

CREATE TABLE `tbproduct` (
  `Product_ID` int(11) NOT NULL,
  `Product_Name` varchar(200) NOT NULL,
  `Product_Description` varchar(2000) NOT NULL,
  `Product_Price` varchar(128) NOT NULL,
  `Product_Image` varchar(2000) NOT NULL,
  `StockUnit` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1,
  `Category_Id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tbproduct`
--

INSERT INTO `tbproduct` (`Product_ID`, `Product_Name`, `Product_Description`, `Product_Price`, `Product_Image`, `StockUnit`, `status`, `Category_Id`) VALUES
(1, 'Cốc Mixigaming', 'Cốc Tự Thiết Kế Không Hề Phế', '200000', 'abc', 0, 1, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbstorage`
--

CREATE TABLE `tbstorage` (
  `Storage_ID` int(11) NOT NULL,
  `Storage_Name` varchar(200) NOT NULL,
  `Storage_Address` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Bảng thông tin của Kho hàng';

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbsupplier`
--

CREATE TABLE `tbsupplier` (
  `Supplier_ID` int(11) NOT NULL,
  `Supplier_Name` varchar(200) NOT NULL,
  `Supplier_Address` varchar(2000) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbcategory`
--
ALTER TABLE `tbcategory`
  ADD PRIMARY KEY (`Category_ID`);

--
-- Chỉ mục cho bảng `tbcustomer`
--
ALTER TABLE `tbcustomer`
  ADD PRIMARY KEY (`Customer_ID`);

--
-- Chỉ mục cho bảng `tborder`
--
ALTER TABLE `tborder`
  ADD PRIMARY KEY (`Order_ID`);

--
-- Chỉ mục cho bảng `tborderdetail`
--
ALTER TABLE `tborderdetail`
  ADD PRIMARY KEY (`OrderDetail_ID`);

--
-- Chỉ mục cho bảng `tbproduct`
--
ALTER TABLE `tbproduct`
  ADD PRIMARY KEY (`Product_ID`);

--
-- Chỉ mục cho bảng `tbstorage`
--
ALTER TABLE `tbstorage`
  ADD PRIMARY KEY (`Storage_ID`);

--
-- Chỉ mục cho bảng `tbsupplier`
--
ALTER TABLE `tbsupplier`
  ADD PRIMARY KEY (`Supplier_ID`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbcategory`
--
ALTER TABLE `tbcategory`
  MODIFY `Category_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `tbcustomer`
--
ALTER TABLE `tbcustomer`
  MODIFY `Customer_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tborder`
--
ALTER TABLE `tborder`
  MODIFY `Order_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tborderdetail`
--
ALTER TABLE `tborderdetail`
  MODIFY `OrderDetail_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbproduct`
--
ALTER TABLE `tbproduct`
  MODIFY `Product_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `tbstorage`
--
ALTER TABLE `tbstorage`
  MODIFY `Storage_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tbsupplier`
--
ALTER TABLE `tbsupplier`
  MODIFY `Supplier_ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
