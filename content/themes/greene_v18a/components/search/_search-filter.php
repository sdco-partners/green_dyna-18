<?php
/*
* Section =>  _SEARCH-FILTER
*/


$bedrooms = single_option_repeater(
	[ "view all",
	"studio",
	"one bedroom",
	"two bedroom",
	"three bedroom" ], 
	"bed"
); 

$range = dropdown_builder(
	"Rent Range",
	"Rent Min",
	"Rent Max",
	[
		"1100",
		"1200",
		"1300",
		"1400"
	]
);

$footage = dropdown_builder(
	"Square Footage Range",
	"Min Sq Ft",
	"Max Sq Ft",
	[
		"2100",
		"3200",
		"4300",
		"5400"
	]
);

?>

<div class="search filter wrapper" id="search">
	<div class="choose bedrooms wrapper">
		<?php foreach( $bedrooms as $param ) {
			include( locate_template( "components/search/_single-option.php") );	
		} ?> 
	</div>
	<div class="advanced options wrapper">
		<?php include( locate_template( "components/search/_advanced-filter-bttn.php") ); ?> 
		<div class="expandable wrapper" id="expandable">
			<?php include( locate_template( "components/search/_left-col.php") );
			include( locate_template( "components/search/_right-col.php") );
			include( locate_template( "components/search/_submit.php") ); ?>
		</div>
	</div>
</div>