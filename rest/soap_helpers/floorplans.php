<?php
namespace FloorPlans;

class Listing {
	public function create () {
		
		/* 1. the kiawah */
		$plan_kiawah = new \StdClass();
		$plan_kiawah->Name = "kiawah";
		// ids
		$id_kiawah_1 = "A1-1";
		// set to plan
		$plan_kiawah->ID[] = $id_kiawah_1;

		/* 2. the folly */
		$plan_folly = new \StdClass();
		$plan_folly->Name = "folly";
		// ids
		$id_folly_1 = "A2-1";
		$id_folly_2 = "A2-2";
		$id_folly_3 = "A2-3";
		$id_folly_4 = "A2-3A";
		$id_folly_5 = "A2-4";
		$id_folly_6 = "A2-5";
		$id_folly_7 = "A2-5A";
		$id_folly_8 = "A2-6";
		$id_folly_9 = "A2-7";
		$id_folly_10 = "A2-8";
		$id_folly_11 = "A2-9";
		$id_folly_12 = "A2-10";
		// set to plan
		$plan_folly->ID[] = $id_folly_1;
		$plan_folly->ID[] = $id_folly_2;
		$plan_folly->ID[] = $id_folly_3;
		$plan_folly->ID[] = $id_folly_4;
		$plan_folly->ID[] = $id_folly_5;
		$plan_folly->ID[] = $id_folly_6;
		$plan_folly->ID[] = $id_folly_7;
		$plan_folly->ID[] = $id_folly_8;
		$plan_folly->ID[] = $id_folly_9;
		$plan_folly->ID[] = $id_folly_10;
		$plan_folly->ID[] = $id_folly_11;
		$plan_folly->ID[] = $id_folly_12;

		/* 3. the may */
		$plan_may = new \StdClass();
		$plan_may->Name = "may";
		// ids
		$id_may_1 = "A3";
		// set to plan
		$plan_may->ID[] = $id_may_1;

		/* 4. the asehepoo */
		$plan_ashepoo = new \StdClass();
		$plan_ashepoo->Name = "Ashepoo";
		// ids
		$id_ashepoo_1 = "A4";
		// set to plan
		$plan_ashepoo->ID[] = $id_ashepoo_1;

		/* 5. the wando */
		$plan_wando = new \StdClass();
		$plan_wando->Name = "wando";
		// ids
		$id_wando_1 = "B1-1";
		$id_wando_2 = "B1-2";
		$id_wando_3 = "B1-2A";
		$id_wando_4 = "B1-3";
		$id_wando_5 = "B1-4";
		// set to plan
		$plan_wando->ID[] = $id_wando_1;
		$plan_wando->ID[] = $id_wando_2;
		$plan_wando->ID[] = $id_wando_3;
		$plan_wando->ID[] = $id_wando_4;
		$plan_wando->ID[] = $id_wando_5;

		/* 6. the edisto */
		$plan_edisto = new \StdClass();
		$plan_edisto->Name = "edisto";
		// ids
		$id_edisto_1 = "B2-1";
		// set to plan
		$plan_edisto->ID[] = $id_edisto_1;

		/* 7. the ashley */
		$plan_ashley = new \StdClass();
		$plan_ashley->Name = "ashley";
		// ids
		$id_ashley_1 = "B3";
		// set to plan
		$plan_ashley->ID[] = $id_ashley_1;

		/* 8. the cooper */
		$plan_cooper = new \StdClass();
		$plan_cooper->Name = "cooper";
		// ids
		$id_cooper_1 = "B4";
		// set to plan
		$plan_cooper->ID[] = $id_cooper_1;

		/* 9. the beaufort */
		$plan_beaufort = new \StdClass();
		$plan_beaufort->Name = "beaufort";
		// ids
		$id_beaufort_1 = "C1";
		$id_beaufort_2 = "C1-2";
		$id_beaufort_3 = "C1-3";
		$id_beaufort_4 = "C1-3A";
		// set to plan
		$plan_beaufort->ID[] = $id_beaufort_1;
		$plan_beaufort->ID[] = $id_beaufort_2;
		$plan_beaufort->ID[] = $id_beaufort_3;
		$plan_beaufort->ID[] = $id_beaufort_4;

		/* 10. the combahee */
		$plan_combahee = new \StdClass();
		$plan_combahee->Name = "combahee";
		// ids
		$id_combahee_1 = "C2";
		// set to plan
		$plan_combahee->ID[] = $id_combahee_1;

		/* 11. the lighthouse */
		$plan_lighthouse = new \StdClass();
		$plan_lighthouse->Name = "lighthouse";
		// ids
		$id_lighthouse_1 = "D1-1";
		$id_lighthouse_2 = "D1-2";
		$id_lighthouse_3 = "D1-3";
		// set to plan
		$plan_lighthouse->ID[] = $id_lighthouse_1;
		$plan_lighthouse->ID[] = $id_lighthouse_2;
		$plan_lighthouse->ID[] = $id_lighthouse_3;

		/* 12.the Stono */
		$plan_stono = new \StdClass();
		$plan_stono->Name = "stono";
		// ids
		$id_stono_1 = "S1";
		$id_stono_2 = "S1-A";
		// set to plan
		$plan_stono->ID[] = $id_stono_1;
		$plan_stono->ID[] = $id_stono_2;


		/* Floor Plan Object */
		$Floor_Plan_Obj = new \StdClass();
		$Floor_Plan_Obj->Names[] = $plan_kiawah;
		$Floor_Plan_Obj->Names[] = $plan_folly;
		$Floor_Plan_Obj->Names[] = $plan_may;
		$Floor_Plan_Obj->Names[] = $plan_ashepoo;
		$Floor_Plan_Obj->Names[] = $plan_wando;
		$Floor_Plan_Obj->Names[] = $plan_edisto;
		$Floor_Plan_Obj->Names[] = $plan_ashley;
		$Floor_Plan_Obj->Names[] = $plan_cooper;
		$Floor_Plan_Obj->Names[] = $plan_beaufort;
		$Floor_Plan_Obj->Names[] = $plan_combahee;
		$Floor_Plan_Obj->Names[] = $plan_lighthouse;
		$Floor_Plan_Obj->Names[] = $plan_stono;	

		return $Floor_Plan_Obj;
	}
};
