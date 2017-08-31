/*
Navicat MySQL Data Transfer

Source Server         : MARIRA_DB
Source Server Version : 50552
Source Host           : 43.248.96.156:3306
Source Database       : iwannaeat

Target Server Type    : MYSQL
Target Server Version : 50552
File Encoding         : 65001

Date: 2017-08-31 23:47:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for RESTAURANT
-- ----------------------------
DROP TABLE IF EXISTS `RESTAURANT`;
CREATE TABLE `RESTAURANT` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_ID` int(11) NOT NULL,
  `RESTAURANT_NAME` varchar(255) NOT NULL,
  `CREATE_TIME` bigint(20) NOT NULL,
  `IS_DELETE` bit(1) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of RESTAURANT
-- ----------------------------
INSERT INTO `RESTAURANT` VALUES ('1', '1', '全家', '0', '\0');
INSERT INTO `RESTAURANT` VALUES ('2', '1', '阿牛嫂', '0', '\0');
INSERT INTO `RESTAURANT` VALUES ('3', '1', '麻辣烫', '0', '\0');
