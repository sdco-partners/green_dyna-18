<?php 
/* 
*	abstract class SOAP API
*/

abstract class SoapAPI
{

	protected $count = 0;
	protected $resp;

    /*
    * METHOD QUERY
    *
    * Builds the query object that will be used to 
    * make the SOAP request
    * 
    */

    public function __construct() {

		// Response Object
		$this->resp = new StdClass();
    }

    protected function _buildQuery( $params ) {
    	// Param Limit Results
		$param_1 = new StdClass();
		$param_1->PmcID = $params->PmcID;
		$param_1->SiteID = $params->SiteID;
		$param_1->Name = 'LimitResults';
		$param_1->SingleValue = 'false';

		// Param Date Needed
		$param_2 = new StdClass();
		$param_2->PmcID = $params->PmcID;
		$param_2->SiteID = $params->SiteID;
		$param_2->Name = 'DateNeeded';
		$param_2->SingleValue = $params->DateNeeded;

		// Param FloorPlanCode
		$param_3 = new StdClass();
		$param_3->PmcID = $params->PmcID;
		$param_3->SiteID = $params->SiteID;
		$param_3->Name = 'FloorPlanCode';
		$param_3->SingleValue = $params->code;

		// Assemble Parameters into 1 query object
		$query = new StdClass();
		$query->listCriteria = new StdClass();
		$query->listCriteria->ListCriterion[] = $param_1;
		$query->listCriteria->ListCriterion[] = $param_2;
		$query->listCriteria->ListCriterion[] = $param_3;
		return $query;
    }

    /*
    * METHOD DATA_SORT
    *
    * Sorts the raw responses data from Real Page
    * into a single-level object and removes any
    * unnecessary fields 
    *
    */
    protected function _sortData( $data ) {
		$sorted = new StdClass();
		$sorted->ID = $this->count;
		$sorted->Code = $data->Path->FloorPlan->FloorPlanCode;
		$sorted->Name = $data->Name;
		$sorted->BaseRentAmount = $data->Path->BaseRentAmount;
		$sorted->Bathrooms = $data->Path->UnitDetails->Bathrooms;
		$sorted->Bedrooms = $data->Path->UnitDetails->Bedrooms;
		$sorted->FloorNumber = $data->Path->UnitDetails->FloorNumber;
		$sorted->SquareFootage = $data->Path->UnitDetails->RentSqFtCount;
		$sorted->AvailableDate = $data->Path->Availability->AvailableDate;
		return $sorted;
	}

    /*
    * REQUEST METHOD
    *
    * Sets up Soap Client, loops through floor plan codes,
    * takes responses and sorts them into a simpler object
    * that is returned
    * 
    */
	public function request( $settings ) {

		// SOAP Clients & Headers
	 	$Client = new SoapClient( 
	 		$settings->Headers->WSDL,
	 		array( 
	 			'trace' =>  $settings->Debugger->trace, 
	 			'exceptions' => $settings->Debugger->exceptions 
	 		)
	 	);
		$Header = new SoapHeader( 
			$settings->Headers->URL, 
			'UserAuthInfo', 
			$settings->Session, 
			false 
		); 

		// Loop through codes 
		foreach ( $settings->FloorPlanObj->Names as $Name ) : 
			foreach( $Name->ID as $code ) : 

				// Construct params
				$params = new Parameters\Params();
				$params->PmcID = $settings->Session->PmcID;
				$params->SiteID = $settings->Session->SiteID; 
				$params->DateNeeded = $settings->DateNeeded;
				$params->code = $code;
				$this_query = $this->_buildQuery( $params );

				// Make SOAP call
			    try {
				    $this_resp = $Client->__soapCall(
				    	"List", 
				    	array( 
				    		"List" => $this_query 
				    	), 
				    	NULL, 
				    	$Header
				    );
			    } catch (Exception $e) {
			    	$this_resp = new StdClass();
				    $this_resp->Error = $e -> getMessage();
				    $this_resp->Lastresponse = $Client->__getLastResponse();
				}

				// Process response
				if ( 
					isset( $this_resp->ListResult ) && 
					isset( $this_resp->ListResult->UnitObject ) 
				) {
					$UnitObject = $this_resp->ListResult->UnitObject;
					if ( is_array( $UnitObject ) ) {
						foreach( $UnitObject as $Unit ) {
							$data = new Parameters\Data();
							$data->Path = $Unit;
							$data->Name = $Name->Name;
							$this->Resp->AvailableUnits[] = $this->_sortData( $data );
							$this->count++; 				
						}
					} else {
						$data = new Parameters\Data();
						$data->Path = $UnitObject;
						$data->Name = $Name->Name;
						$this->Resp->AvailableUnits[] = $this->_sortData( $data );
						$this->count++; 
					}
				} else if ( isset( $this_resp->Error ) ) {
					$this->Resp->AvailableUnits[] = $this_resp;
				}
			endforeach;
		endforeach;

		return $this->Resp;
	}
}
