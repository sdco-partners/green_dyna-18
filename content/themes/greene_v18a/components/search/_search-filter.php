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

$availability = single_option_repeater(
	[ "available at any time" ],
	"available"
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

<div class="search filter wrapper">
	<div class="choose bedrooms wrapper">
		<?php foreach( $bedrooms as $param ) {
			include( locate_template( "components/search/_single-option.php") );	
		} ?> 
	</div>
	<div class="advanced options wrapper">
		<?php include( locate_template( "components/search/_advanced-filter-bttn.php") ); ?> 
		<div class="expandable wrapper">
			<div class="left col">
				<?php foreach( $availability as $param ) {
					include( locate_template( "components/search/_single-option.php") );
				} ?> 
				<div class="option rent-range">
					<?php $dropdown = $range;
					include( locate_template( "components/search/_range-dropdown.php") ); ?>
				</div>
			</div>
			<div class="right col">
				<div class="option rent-range">
					<?php $dropdown = $footage;
					include( locate_template( "components/search/_range-dropdown.php") ); ?>
				</div>
			</div>
		</div>
			
		</div>
	</div>
</div>