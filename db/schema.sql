CREATE SCHEMA `moviemoodmatchapp_db` ;
CREATE TABLE `moviemoodmatchapp_db`.`user_data` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `User_Name` VARCHAR(45) NOT NULL,
  `Pass_Word` VARCHAR(35) NOT NULL,
  `All_Time_Favorite_Movie` VARCHAR(45) NOT NULL,
  `Age` INT(30) NOT NULL,
  `Language_other_than_English` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

