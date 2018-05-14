<?php
namespace Parameters;

class Auth {
	public $UserName;
	public $Password;
	public $SiteID;
	public $PmcID;
}

class Headers {
	public $WSDL;
	public $URL;
}

class Debug {
	public $trace;
	public $exceptions;
}


class Settings {
	public $Session;
	public $Debugger;
	public $Headers;
	public $DateNeeded;
	public $FloorPlanObj;
}

class Params {
	public $PmcID;
	public $SiteID;
	public $DateNeeded;
	public $code;
}

class Data {
	public $Path;
	public $Name;
}