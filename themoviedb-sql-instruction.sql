CREATE SCHEMA `cappacita_tmdb` ;

CREATE TABLE `cappacita_tmdb`.`general_info_api_tmdb_usage` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `api_used_type` VARCHAR(50) NOT NULL,
  `url_accessed` VARCHAR(150) NOT NULL,
  `amount_itens_api_returned` INT NOT NULL,
  `api_status_returned` VARCHAR(50) NULL DEFAULT '---',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
  
  CREATE TABLE `cappacita_tmdb`.`guest_session_rate` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `api_rated_type` VARCHAR(50) NOT NULL,
  `url_accessed` VARCHAR(150) NOT NULL,
  `guest_session_id` VARCHAR(150) NOT NULL,
  `movie_id` INT NOT NULL,
  `rate` INT NOT NULL,
  `api_status_returned` VARCHAR(50) NULL DEFAULT '---',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
