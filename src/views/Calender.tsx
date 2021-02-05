import { FlatList,Text, TouchableOpacity, View } from "react-native";
import { styles, systemColor } from "../styles/style";
import React, { useEffect, useState } from "react";
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
export const Months=(props:any)=>{

    {/*months bar*/}
    const [day,setDay]=useState(calendar.day);
    const [month,setMonth]=useState(calendar.month[calendar.monthIndex].month);
    const [monthSignal,setMonthSignal]=useState(calendar.monthIndex);
    useEffect(()=>{
        props.userController.setMonthIndex(monthSignal)
        props.userController.setMonth(month);
    })
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


    return(
         <View>
        <View style={styles.monthContainer}>

    <FlatList  horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
    initialScrollIndex={monthSignal} data={calendar.month}
    renderItem={({item,index})=>{return ( <TouchableOpacity key={index}
        onPress={(event) => {
            setMonthSignal(index)
            setMonth(calendar.month[index].month)
            dateSwitch(index)
        }} style={styles.month}>
        <Text style={[{color: index === monthSignal ? 'yellow' : systemColor.color}]}
        onPress={(event) => {
            setMonthSignal(index)
            setMonth(calendar.month[index].month)
            dateSwitch(index)
        }}>{item.month}</Text>
        </TouchableOpacity>)}}
        keyExtractor={((item, index) => index.toString())}
        />
        </View>
         <DayName userController={props.userController}/>
        <Dates day={day} userController={props.userController}/>

        </View>


)
}
export  const DayName=function (props:any){
    const [daySignal,setDaySignal]=useState(calendar.dayIndex-1);
    const [dayName,setDayName]=useState(calendar.dayName[calendar.dayIndex-1])
    daySignal ===-1 ? setDaySignal(6):null
    useEffect(()=>{
        props.userController.setTodayDate(daySignal)
        props.userController.setDayName(dayName)
    })

    return (
        <View >
            {/*Days name*/}
            <FlatList horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                      data={calendar.dayName} initialScrollIndex={daySignal}
                      renderItem={({item,index})=>
                         <TouchableOpacity onPress={()=>{
                             setDaySignal(index);
                             setDayName(item)
                         }}>
                             <Text style={[{color:index===daySignal ?
                                     'yellow':systemColor.color},styles.dayName]} onPress={(event) => {
                                 setDaySignal(index);
                                 setDayName(item)
                             }}>{item}</Text>
                         </TouchableOpacity> }
                      keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
export const Dates=function (props:any) {
    const [signal,setSignal]=useState(calendar.dateIndex-1);
    const [day,setDay]=useState(props.day);
    day.length > props.day.length ? setDay(props.day):null
    useEffect(()=>{
        props.userController.setTodayDate(signal)
    })

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
                               props.userController.setTodayDate(index);
                           }}>

                               <Text style={[styles.monthText]}  onPress={()=>{
                                   setSignal(index)
                                   props.userController.setTodayDate(index)
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
