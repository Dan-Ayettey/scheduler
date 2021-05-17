import {
   SafeAreaView,

} from "react-native";

import { UserController } from "../controllers/userController";
import { UserModel } from "../models/UserModel";

import { PickTime } from "./PickTime";
import { Months } from "./Calender";
import React from "react";

// Dashboard menus container

 export let modelFromCalenderItems: UserModel;
export const CalenderItems=()=>{
      modelFromCalenderItems=new UserModel();
     const initUserController=  new UserController(modelFromCalenderItems);

    return (

        <SafeAreaView>
            <PickTime model={modelFromCalenderItems} userController={initUserController}/>
            <Months model={modelFromCalenderItems} userController={initUserController}/>
        </SafeAreaView>

            )
}


