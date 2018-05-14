<?php
namespace Models;

class APIKey {
	protected $Key = "SMASH"; 

	public function verifyKey ( $key, $origin ) {
		return ( $key === $this->Key );
	} 
};

class User {
	public $Name = "HULK";
	public $Token = "XZV";

	public function get( $key, $value ) {
		return ( $value === $this->Token );
	}
};