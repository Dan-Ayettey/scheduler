import { Dimensions, FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles, systemColor } from "../styles/style";
import React, { useEffect, useState } from "react";

export const calender=()=>{
    const date=new Date()
    return{

    month:[{month:'January'},
        {month:'February'},{month:'March'},
        {month:'April'},
        {month:'May'},{month:'June'},{month:'July'}
        ,{month:'August'},{month:'September'},{month:'October'}
        ,{month:'November'},{month:'December'}],
    patchDays: [1,2,3,4,5,6,7],
    day:Array.from(Array(new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()).keys()),
    dayName: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    dayIndex:date.getDay(),
    dateIndex:date.getDate(),
    monthIndex:date.getMonth(),
    year: date.getUTCFullYear(),
    minutes: date.getMinutes(),
    hours: date.getHours(),
    seconds: date.getSeconds(),
    localTime:date.toLocaleTimeString()


}}
export const Months=(props:any)=>{

    {/*months bar*/}
    let today_sDate=calender().day;
        let [day,setDay]=useState(today_sDate);
    const [index,setIndex]=useState(0);
    const [month,setMonth]=useState(calender().month[calender().monthIndex].month);
    const [monthSignal,setMonthSignal]=useState(calender().monthIndex);
    useEffect(()=>{
        props.userController.setMonthIndex(monthSignal);
        props.userController.setMonth(month);
        props.userController.setDay(day);
        props.userController.setYear(calender().year.toString())

    })
    const dateSwitch=(index:number)=>{



        switch (index) {
            case 1:
                console.log(index)
                setDay(day)
                break;
            case 3:


                console.log(index)
                setDay(day)
                break;
            case 5:

                setDay(day)
                console.log(index)
                break;
            case 8:

                setDay(day)
                console.log(index)
                break;
            case 10:

                setDay(day)
                console.log(index)
                break;
            default:

                setDay(calender().day)
        }
    }


    return(
         <View>
        <View style={styles.monthContainer}>

    <FlatList  horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
    initialScrollIndex={monthSignal} data={calender().month}
    renderItem={({item,index})=>{return ( <TouchableOpacity key={index}
        onPress={(event) => {
            setMonthSignal(index)
            setMonth(calender().month[index].month)
            dateSwitch(index)
        }} style={styles.month}>
        <Text style={[{color: index === monthSignal ? 'yellow' : systemColor.color}]}
        onPress={(event) => {
            setMonthSignal(index)
            setMonth(calender().month[index].month)
            setDay(calender().day)
        }}>{item.month}</Text>
        </TouchableOpacity>)}}
        keyExtractor={((item, index) => index.toString())}
        />
        </View>
         <DayName model={props.model} userController={props.userController}/>
         <Dates  model={props.model}  index={monthSignal}  userController={props.userController}/>

        </View>


)
}
export  const DayName=function (props:any){

    const [daySignal,setDaySignal]=useState(calender().dayIndex-1);
    const [dayName,setDayName]=useState(calender().dayName[calender().dayIndex-1])
    daySignal ===-1 ? setDaySignal(6):null
    useEffect(()=>{
        props.userController.setTodayDate(daySignal)
        props.userController.setDayName(dayName)
    })

    return (
        <View style={[styles.dayName]}>
            {/*Days name*/}
            <FlatList style={styles.dayName} horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}
                      data={calender().dayName} initialScrollIndex={daySignal}
                      renderItem={({item,index})=>
                          <View>

                          <TouchableOpacity onPress={()=>{
                              setDaySignal(index);
                              setDayName(item)
                          }}>

                              <Text style={[{color:index===daySignal ?
                                      'yellow':systemColor.color},styles.dayNameItem]} onPress={(event) => {
                                  setDaySignal(index);
                                  setDayName(item)
                              }}>{item}</Text>
                          </TouchableOpacity>
                          </View>}
                      keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
export const Dates=function (props:any) {

    const accumulateDays=(index:number)=>{
        return Array.from(Array(new Date(calender().year,index+1,0).getDate()).keys())
    }
    const {width, height}=Dimensions.get('window')
    const [signal,setSignal]=useState(calender().dateIndex);
    const [index,setIndex]=useState(props.index);
    const [day,setDay]=useState(accumulateDays(signal));

    useEffect(()=>{
       setDay(props.day)
        props.userController.setTodayDate(signal)
        props.userController.setDay(day)


    })


    return(
        <View>
     <View style={{flexDirection: 'row',
         flexWrap: 'wrap',alignContent:'stretch',justifyContent:'center' }}>
         {/*dates bar*/}

         {accumulateDays(props.index).concat([1]).map((items:any,index:number)=>(
             <View key={index} style={[width<=710?{padding:10,paddingLeft:18.4,paddingRight:18.4,backgroundColor:systemColor.backgroundColor,margin:0.6}:{margin:0.6,padding:20,paddingLeft:20,paddingRight:20,backgroundColor:systemColor.backgroundColor}]}>

             <TouchableOpacity activeOpacity={10} style={[{}]}>

                 <Text   onPress={()=>{
                     setSignal(index)
                     props.userController.setTodayDate(index)
                 }}>
                     <View >
                         <Text style={[styles.buttonLite,
                             {backgroundColor:index===signal ?'yellow':systemColor.backgroundColor
                                 ,color:index===signal?'black':systemColor.color}]} onPress={()=>{
                             setSignal(index)
                             props.userController.setTodayDate(index);
                         } }>
                             {index}
                         </Text>
                     </View>

                 </Text>

             </TouchableOpacity>

         </View>

             ))}




     </View>
     </View>
    )
}
/*
{day.map((items:any,index:number)=>(
    <View style={{
        margin:1,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'stretch',
        alignSelf:'center',
        width:42,
        height:42,
        backgroundColor: 'blue',
    }} key={index}>
        <TouchableOpacity onPress={()=>{

            setSignal(index)

            console.log(signal,index)
            props.userController.setTodayDate(index)
        }}>
            <Text  style={[{backgroundColor:index===signal ?'yellow':systemColor.backgroundColor
                ,color:index===signal?'black':systemColor.color},styles.dateLite]}>{items}</Text>
        </TouchableOpacity>

    </View>

))}*/
