<?php
  /*
  * Section =>  _UNITS
  */
$heading = "Desired Move-In Date";
?>
<div class="overlay"></div>

<div class="datepicker wrapper">
	<?php include( locate_template("components/floorplan/_heading.php") ); ?>
	<div class="datepicker navigation">
		<div class="left arrow">
			<?php echo file_get_contents( $_DIR . "/assets/svg/svg_arrow.svg" ); ?>
		</div>
		<div class="calendar header">
			<span class="month"><?php echo date( "F" ); ?></span>
			<span> &nbsp; </span>
			<span class="year"><?php echo date( "Y" ); ?></span>
		</div>
		<div class="right arrow">
			<?php echo file_get_contents( $_DIR . "/assets/svg/svg_arrow.svg" ); ?>
		</div>
	</div>
	<div class="grid wrapper">
		<div class="item head" id="su">Su</div>
		<div class="item head" id="m">M</div>
		<div class="item head" id="tu">Tu</div>
		<div class="item head" id="w">W</div>
		<div class="item head" id="th">Th</div>
		<div class="item head" id="f">F</div>
		<div class="item head" id="sa">Sa</div>
		<div class="item first">1</div>
		<div class="item">2</div>
		<div class="item">3</div>
		<div class="item">4</div>
		<div class="item">5</div>
		<div class="item">6</div>
		<div class="item last">7</div>
		<div class="item first">8</div>
		<div class="item ">9</div>
		<div class="item ">10</div>
		<div class="item ">11</div>
		<div class="item ">12</div>
		<div class="item ">13</div>
		<div class="item last">14</div>
		<div class="item first">15</div>
		<div class="item ">16</div>
		<div class="item ">17</div>
		<div class="item ">18</div>
		<div class="item ">19</div>
		<div class="item ">20</div>
		<div class="item last">21</div>
		<div class="item first">22</div>
		<div class="item ">23</div>
		<div class="item ">24</div>
		<div class="item ">25</div>
		<div class="item ">26</div>
		<div class="item ">27</div>
		<div class="item last">28</div>
		<div class="item first">29</div>
		<div class="item">30</div>
		<div class="item">31</div>
	</div>
</div>