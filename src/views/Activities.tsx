import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { TableHeader, TableRow } from "./Table";
import { styles } from "../styles/style";
import { calendar } from "./Calender";


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
    let elements: any[]=[];
return (

          <SafeAreaView>
                <FlatList scrollEnabled={true}
                          ListHeaderComponent={<TableHeader date={'Date'} end={'End'} location={'Location'} start={'Start'} task={'Task'}/>}
                          stickyHeaderIndices={[0]}

                          numColumns={5}
                          data={data}


                          renderItem={({item,index})=><TableRow task={item.task} key={index} location={item.location} end={item.end} start={item.start} date={item.date}/>

                          }
                          keyExtractor={(item, index) => index.toString()}

                />
              <View style={[styles.logCrudContainer]}>
                  <TouchableOpacity>
                      <Text style={styles.logCrudTool}>
                          Edit
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Text style={styles.logCrudTool}>
                          update
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Text style={styles.logCrudTool}>
                          remove
                      </Text>
                  </TouchableOpacity>
                  <Text  style={styles.logCrudTotalHours}><Text>Total hours: </Text>{6}{'hrs'}</Text>
              </View>
        </SafeAreaView>

)
}
