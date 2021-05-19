import { FlatList, View } from "react-native";
import React from "react";
import { TableHeader, TableRow } from "./Table";
import { calender } from "./Calender";
import { styles } from "../styles/style";


export const ActivitiesLog=function () {
    const data=[{
        start:2,
        end:20,
        task:'The animationType prop controls how the modal animates.\n' +
            '\n' +
            'slide slides in from the bottom\n' +
            'fade fades into view\n' +
            'none appears without an animation',
        location:'Stockholm',
        day:calender().dayName[calender().dayIndex-1],
        month:calender().month[calender().monthIndex].month,
        date: calender().monthIndex +''+calender().dayIndex+' '+calender().year
    }];

return (

          <View style={styles.activitiesContainer}>
                <FlatList scrollEnabled={true}
                          ListHeaderComponent={<TableHeader date={'Date'} end={'End'} location={'Location'} start={'Start'} task={'Task'}/>}
                          stickyHeaderIndices={[0]}
                          numColumns={5}
                          data={data}
                          renderItem={({item,index})=><TableRow task={item.task} key={index} location={item.location.toString()} end={item.end.toString()} start={item.start.toString()} date={item.date.toString()}/>
                          }
                          keyExtractor={(item, index) => index.toString()}

                />
        </View>

)
}
