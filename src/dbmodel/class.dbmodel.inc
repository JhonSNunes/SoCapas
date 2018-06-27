<?php

	class DbModel {
		protected $serverName;
		protected $userName;
		protected $password;
		protected $dbName;
		protected $params;

		public function DbModel( $params = [] ) {
			$this->setServerName( "localhost" );
			$this->setUserName( "root" );
			$this->setPassword( "" );
			$this->setDbName( "socapas" );
			$this->setParams( $params );
		}

		public function conn() {
			$conn = new mysqli( $this->getServerName(), $this->getUserName(), $this->getPassword(), $this->getDbName() );

			if ( $conn->connect_error ) {
				die("Connection failed: {$conn->connect_error}");
			}
			return $conn;
		}

		// Função para execução de insert, update e delete
		public function executeSql( $sql ) {
			$this->conn()->query( $sql );
			$this->conn()->close();
			return;
		}

		// Função para execução de consultas
		public function executeSqlSearch( $sql ) {
			$result = $this->conn()->query( $sql );

			if ( !$result ) {
		    	return [];
			}

			$response = [];
			if ( $result && $result->num_rows > 0 ) {
				while( $row = $result->fetch_assoc() ) {
					$response[] = $row;			
				}
			}
			$this->conn()->close();

			return $response;
		}
		public function setServerName( $serverName ) {
			$this->serverName = $serverName;
		}
		public function getServerName() {
			return $this->serverName;
		}
		public function setUserName( $userName ) {
			$this->userName = $userName;
		}
		public function getUserName() {
			return $this->userName;
		}
		public function setPassword( $password ) {
			$this->password = $password;
		}
		public function getPassword() {
			return $this->password;
		}
		public function setDbName( $dbName ) {
			$this->dbName = $dbName;
		}
		public function getDbName() {
			return $this->dbName;
		}
		public function setParams( $params ) {
			$this->params = $params;
		}
		public function getParams() {
			return $this->params;
		}
	}