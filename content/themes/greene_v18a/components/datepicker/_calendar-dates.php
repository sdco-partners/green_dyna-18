<?php
  /*
  * Section =>  _CALENDAR-DATES
  */

$curr_mon = get_month_obj();

$last_mon_obj = new StdClass();
$last_mon_obj->mon = intval( $curr_mon->mon ) - 1;
$last_mon_obj->year = intval( $curr_mon->year );
$last_mon = get_month_obj( $last_mon_obj );

$next_mon_obj = new StdClass();
$next_mon_obj->mon = intval( $curr_mon->mon ) + 1;
$next_mon_obj->year = intval( $curr_mon->year );
$next_mon = get_month_obj( $next_mon_obj);

$week = 6;
$count = 0;
$start_count = find_start_date( $curr_mon->first_day );
$y = $last_mon->num_of_days; 

include( locate_template("components/datepicker/_last-month.php") );
include( locate_template("components/datepicker/_this-month.php") );
include( locate_template("components/datepicker/_next-month.php") );
