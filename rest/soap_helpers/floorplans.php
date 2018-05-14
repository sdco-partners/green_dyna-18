<?php
namespace FloorPlans;

class Listing {
	public function create () {
		
		/* 1. the bowen */
		$plan_bowen = new \StdClass();
		$plan_bowen->Name = "bowen";
		// ids
		$id_bowen_1 = "A1-1";
		// set to plan
		$plan_bowen->ID[] = $id_bowen_1;

		/* 2. the summit */
		$plan_summit = new \StdClass();
		$plan_summit->Name = "summit";
		// ids
		$id_summit_1 = "A2-1";
		$id_summit_2 = "A2-2";
		$id_summit_3 = "A2-3";
		$id_summit_4 = "A2-3A";
		$id_summit_5 = "A2-4";
		$id_summit_6 = "A2-5";
		$id_summit_7 = "A2-5A";
		$id_summit_8 = "A2-6";
		$id_summit_9 = "A2-7";
		$id_summit_10 = "A2-8";
		$id_summit_11 = "A2-9";
		$id_summit_12 = "A2-10";
		// set to plan
		$plan_summit->ID[] = $id_summit_1;
		$plan_summit->ID[] = $id_summit_2;
		$plan_summit->ID[] = $id_summit_3;
		$plan_summit->ID[] = $id_summit_4;
		$plan_summit->ID[] = $id_summit_5;
		$plan_summit->ID[] = $id_summit_6;
		$plan_summit->ID[] = $id_summit_7;
		$plan_summit->ID[] = $id_summit_8;
		$plan_summit->ID[] = $id_summit_9;
		$plan_summit->ID[] = $id_summit_10;
		$plan_summit->ID[] = $id_summit_11;
		$plan_summit->ID[] = $id_summit_12;

		/* 3. the whitewater */
		$plan_whitewater = new \StdClass();
		$plan_whitewater->Name = "whitewater";
		// ids
		$id_whitewater_1 = "A3";
		// set to plan
		$plan_whitewater->ID[] = $id_whitewater_1;

		/* 4. the brasstown */
		$plan_brasstown = new \StdClass();
		$plan_brasstown->Name = "brasstown";
		// ids
		$id_brasstown_1 = "A4";
		// set to plan
		$plan_brasstown->ID[] = $id_brasstown_1;

		/* 5. the wildcat */
		$plan_wildcat = new \StdClass();
		$plan_wildcat->Name = "wildcat";
		// ids
		$id_wildcat_1 = "B1-1";
		$id_wildcat_2 = "B1-2";
		$id_wildcat_3 = "B1-2A";
		$id_wildcat_4 = "B1-3";
		$id_wildcat_5 = "B1-4";
		// set to plan
		$plan_wildcat->ID[] = $id_wildcat_1;
		$plan_wildcat->ID[] = $id_wildcat_2;
		$plan_wildcat->ID[] = $id_wildcat_3;
		$plan_wildcat->ID[] = $id_wildcat_4;
		$plan_wildcat->ID[] = $id_wildcat_5;

		/* 6. the chattooga */
		$plan_chattooga = new \StdClass();
		$plan_chattooga->Name = "chattooga";
		// ids
		$id_chattooga_1 = "B2-1";
		// set to plan
		$plan_chattooga->ID[] = $id_chattooga_1;

		/* 7. the broad */
		$plan_broad = new \StdClass();
		$plan_broad->Name = "broad";
		// ids
		$id_broad_1 = "B3";
		// set to plan
		$plan_broad->ID[] = $id_broad_1;

		/* 8. the brushy */
		$plan_brushy = new \StdClass();
		$plan_brushy->Name = "brushy";
		// ids
		$id_brushy_1 = "B4";
		// set to plan
		$plan_brushy->ID[] = $id_brushy_1;

		/* 9. the tyger */
		$plan_tyger = new \StdClass();
		$plan_tyger->Name = "tyger";
		// ids
		$id_tyger_1 = "C1";
		$id_tyger_2 = "C1-2";
		$id_tyger_3 = "C1-3";
		$id_tyger_4 = "C1-3A";
		// set to plan
		$plan_tyger->ID[] = $id_tyger_1;
		$plan_tyger->ID[] = $id_tyger_2;
		$plan_tyger->ID[] = $id_tyger_3;
		$plan_tyger->ID[] = $id_tyger_4;

		/* 10. the pacolet */
		$plan_pacolet = new \StdClass();
		$plan_pacolet->Name = "pacolet";
		// ids
		$id_pacolet_1 = "C2";
		// set to plan
		$plan_pacolet->ID[] = $id_pacolet_1;

		/* 11. the saluda */
		$plan_saluda = new \StdClass();
		$plan_saluda->Name = "saluda";
		// ids
		$id_saluda_1 = "D1-1";
		$id_saluda_2 = "D1-2";
		$id_saluda_3 = "D1-3";
		// set to plan
		$plan_saluda->ID[] = $id_saluda_1;
		$plan_saluda->ID[] = $id_saluda_2;
		$plan_saluda->ID[] = $id_saluda_3;

		/* 12.the toxaway */
		$plan_toxaway = new \StdClass();
		$plan_toxaway->Name = "toxaway";
		// ids
		$id_toxaway_1 = "S1";
		$id_toxaway_2 = "S1-A";
		// set to plan
		$plan_toxaway->ID[] = $id_toxaway_1;
		$plan_toxaway->ID[] = $id_toxaway_2;

		/* 13.the jocassee */
		$plan_jocassee = new \StdClass();
		$plan_jocassee->Name = "jocassee";
		// ids
		$id_jocassee_1 = "S1";
		$id_jocassee_2 = "S1-A";
		// set to plan
		$plan_jocassee->ID[] = $id_jocassee_1;
		$plan_jocassee->ID[] = $id_jocassee_2;

		/* 14.the eastatoe */
		$plan_eastatoe = new \StdClass();
		$plan_eastatoe->Name = "eastatoe";
		// ids
		$id_eastatoe_1 = "S1";
		$id_eastatoe_2 = "S1-A";
		// set to plan
		$plan_eastatoe->ID[] = $id_eastatoe_1;
		$plan_eastatoe->ID[] = $id_eastatoe_2;

		/* 15.the keowee */
		$plan_keowee = new \StdClass();
		$plan_keowee->Name = "keowee";
		// ids
		$id_keowee_1 = "S1";
		$id_keowee_2 = "S1-A";
		// set to plan
		$plan_keowee->ID[] = $id_keowee_1;
		$plan_keowee->ID[] = $id_keowee_2;

		/* 16.the reedy */
		$plan_reedy = new \StdClass();
		$plan_reedy->Name = "reedy";
		// ids
		$id_reedy_1 = "S1";
		$id_reedy_2 = "S1-A";
		// set to plan
		$plan_reedy->ID[] = $id_reedy_1;
		$plan_reedy->ID[] = $id_reedy_2;

		/* Floor Plan Object */
		$Floor_Plan_Obj = new \StdClass();
		$Floor_Plan_Obj->Names[] = $plan_bowen;
		$Floor_Plan_Obj->Names[] = $plan_summit;
		$Floor_Plan_Obj->Names[] = $plan_whitewater;
		$Floor_Plan_Obj->Names[] = $plan_brasstown;
		$Floor_Plan_Obj->Names[] = $plan_wildcat;
		$Floor_Plan_Obj->Names[] = $plan_chattooga;
		$Floor_Plan_Obj->Names[] = $plan_broad;
		$Floor_Plan_Obj->Names[] = $plan_brushy;
		$Floor_Plan_Obj->Names[] = $plan_tyger;
		$Floor_Plan_Obj->Names[] = $plan_pacolet;
		$Floor_Plan_Obj->Names[] = $plan_saluda;
		$Floor_Plan_Obj->Names[] = $plan_toxaway;
		$Floor_Plan_Obj->Names[] = $plan_jocassee;
		$Floor_Plan_Obj->Names[] = $plan_eastatoe;	
		$Floor_Plan_Obj->Names[] = $plan_keowee;
		$Floor_Plan_Obj->Names[] = $plan_reedy;

		return $Floor_Plan_Obj;
	}
};
