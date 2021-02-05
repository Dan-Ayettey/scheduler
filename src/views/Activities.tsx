import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TableHeader, TableRow } from "./Table";
import { calendar } from "./Calender";
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
        day:calendar.dayName[calendar.dayIndex-1],
        month:calendar.month[calendar.monthIndex].month,
        date: calendar.monthIndex +''+calendar.dayIndex+' '+calendar.year
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
