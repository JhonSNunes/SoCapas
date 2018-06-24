<?php
	require_once "class.dbmodel.inc";

	class ProductsModel extends DbModel {
		public function insert() {
			$params = $this->getParams();

			$name = $params["name"];
			$mail = $params["mail"];
			$login = $params["login"];
			$password = $params["password"];

			$maxCduser = $this->executeSqlSearch( "SELECT COALESCE( MAX( CDUSER ), 0) AS CDUSER FROM USERS" );
			$maxCduser = $maxCduser[0]["CDUSER"] + 1;

			$this->executeSql( "
				INSERT INTO USERS (
						CDUSER,
						NAME,
						MAIL,
						LOGIN,
						PASSWORD
					) VALUES (
						{$maxCduser}, 
						'{$name}',
						'{$mail}',
						'{$login}',
						'{$password}'
					)
			" );
		}

		public function verifyPermission() {
			$params = $this->getParams();

			$login = $params["login"];
			$password = $params["password"];

			$result =  $this->executeSqlSearch( "
				SELECT
					CDUSER
				FROM
					USERS
				WHERE
					LOGIN = '{$login}'
					AND PASSWORD = '{$password}'
			" );

			if ( sizeof( $result ) > 0 ) {
				return $result[0]["CDUSER"];
			}
			return null;
		}

		public function selectAllUsers() {
			return $this->executeSqlSearch( "SELECT * FROM USERS" );
		}
	}