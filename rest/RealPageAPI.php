<?php 
/* 
* RealPageAPI
*/

require_once "soap_helpers/parameters.php";
require_once "soap_helpers/floorplans.php";
require_once "SoapAPI.php";

class RealPageAPI extends SoapAPI
{

	protected $Query;
	protected $Codes;
	protected $Auth;
	protected $Headers;
	protected $Debug;
	protected $Params;
	protected $Data;
	protected $Listing;

	public function __construct() {
		parent::__construct();

		$this->Listing = new FloorPlans\Listing();

		$this->Auth = new Parameters\Auth();
		$this->Auth->UserName = "SDesignCo";
		$this->Auth->Password = "SDesignCo1234";
		$this->Auth->SiteID = 3603334;
		$this->Auth->PmcID = 1049405; 

		$this->Headers = new Parameters\Headers();
		$this->Headers->URL = "http://realpage.com/webservices";
		$this->Headers->WSDL = "http://onesite.realpage.com/WebServices/CrossFire/AvailabilityAndPricing/Unit.asmx?WSDL";

		$this->Debug = new Parameters\Debug();
		$this->Debug->trace = true;
		$this->Debug->exception = true;
	}

	public function _fetchData() {

		$this->Settings = new Parameters\Settings();
		$this->Settings->Session = $this->Auth;
		$this->Settings->Headers = $this->Headers;
		$this->Settings->Debugger = $this->Debug;
		$this->Settings->DateNeeded = date("Y-m-d", strtotime("+120 days") );
		$this->Settings->FloorPlanObj = $this->Listing->create();

		return $this->request( $this->Settings );
	}
}