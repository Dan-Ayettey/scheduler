import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles, systemColor } from "../styles/style";
import React, { useState } from "react";
import { reduxDispatch, reduxReduce, reduxSubscribe } from "../models/ReduxModel";
import { ActivitiesLog } from "./Activities";
import { UserModel } from "../models/UserModel";
import { UserController } from "../controllers/userController";

export const date:Date=new Date()
export const calendar={


    month:[{month:'January'},
        {month:'February'},{month:'March'},
        {month:'April'},
        {month:'May'},{month:'June'},{month:'July'}
        ,{month:'August'},{month:'September'},{month:'October'}
        ,{month:'November'},{month:'December'}],
    day: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    dayName: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    dayIndex:date.getDay(),
    dateIndex:date.getDate(),
    monthIndex:new Date().getMonth(),
    year: new Date().getUTCFullYear(),
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds(),
    localTime:()=>new Date().toLocaleTimeString()


}
export const Months=()=>{

    {/*months bar*/}
    const [day,setDay]=useState(calendar.day);

    const dateSwitch=(index:number)=>{


        day[29]=29;
        day[30]=30;
        day[31]=31;
        switch (index) {
            case 1:
                delete day[28];
                delete day[29];
                delete day[30];
                delete day[31];

                setDay(day)
                break;
            case 3:
                day[28]=28;
                day[29]=29;
                day[30]=30;
                delete day[31];

                console.log(index)
                setDay(day)
                break;
            case 5:
                day[28]=28;
                day[29]=29;
                day[30]=30;
                delete day[31];
                setDay(day)
                console.log(index)
                break;
            case 8:
                day[28]=28;
                day[29]=29;
                day[30]=30;
                delete day[31];
                setDay(day)
                console.log(index)
                break;
            case 10:
                day[28]=28;
                day[29]=29;
                day[30]=30;
                delete day[31];
                setDay(day)
                console.log(index)
                break;
            default:

                setDay(calendar.day)
        }
    }

    const [monthSignal,setMonthSignal]=useState(calendar.monthIndex);
    return(
         <View>
        <View style={styles.monthContainer}>

    <FlatList  horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
    initialScrollIndex={monthSignal} data={ calendar.month}
    renderItem={({item,index})=>{return ( <TouchableOpacity key={index}
        onPress={(event) => {
            event.preventDefault();
            setMonthSignal(index)
            dateSwitch(index)

        }} style={styles.month}>
        <Text style={[{color: index === monthSignal ? 'yellow' : systemColor.color}]}
        onPress={(event) => {
            event.preventDefault();
            setMonthSignal(index)
            dateSwitch(index)


        }}>{item.month}</Text>
        </TouchableOpacity>)}}
        keyExtractor={((item, index) => index.toString())}
        />
        </View>
         <DayName/>
        <Dates day={day}/>

        </View>


)
}

export  const DayName=function (){

    const [daySignal,setDaySignal]=useState(calendar.dayIndex-1);

    daySignal ===-1 ? setDaySignal(6):null
    return (
        <View >
            {/*Days name*/}
            <FlatList horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                      data={calendar.dayName} initialScrollIndex={daySignal}
                      renderItem={({item,index})=>{ return( <Text style={[{color:index===daySignal ?
                              'yellow':systemColor.color},styles.dayName]} onPress={(event) => {
                          event.preventDefault();

                      }}>{item}</Text>)}}
                      keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export const Dates=function (props:{
    day:number [];
}) {
    const [signal,setSignal]=useState(calendar.dateIndex-1);
    const [day,setDay]=useState(props.day);
    const model=new UserModel()
    const userController=new UserController(model)

    day.length > props.day.length ? setDay(props.day):null
    const initialState = {
        isLoading: false,
        items: [{
            shirt:'tommy',
            jumper:'damur'
        }],
        hasError: false
    };

 return(
     <View>
         {/*dates bar*/}

         <FlatList style={styles.dateNumbersContainer} scrollEnabled={true}
                   numColumns={5}
                   data={day}


                   renderItem={({item,index})=>(

                       <View style={[{height:index===30 ? 'auto' :'auto'}]}  >

                           <TouchableOpacity activeOpacity={10} style={[styles.monthNumber]} onPress={()=>{
                               setSignal(index)
                               userController.setDate({day:''+index,month:'',year:''})

                           }}>

                               <Text style={[styles.monthText]}  onPress={()=>{
                                   setSignal(index)
                                   reduxReduce(initialState,{type:'STATUS',loading:'loading..',items:['1',4,6]});
                                   reduxDispatch({type:'STATUS',loading:'loading..',items:['1',4,6]})
                                   reduxSubscribe((state:any)=>{

                                       setSignal(index)
                                       userController.setDate({day:''+index,month:'',year:''})
                                   })

                               }}>
                                   <View >
                                       <Text style={[styles.buttonLite,
                                           {backgroundColor:index===signal ?'yellow':systemColor.backgroundColor
                                               ,color:index===signal?'black':systemColor.color}]}>
                                           {item}
                                       </Text>
                                   </View>

                               </Text>

                           </TouchableOpacity>

                       </View>

                   )}
                   keyExtractor={(item, index) => index.toString()}

         />
     </View>
 )
}
