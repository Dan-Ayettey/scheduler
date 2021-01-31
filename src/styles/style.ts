import { StyleSheet} from 'react-native';
export const systemColor={

    backgroundColor:'rgb(16,138,236)',
    colors:{
        white:'white',
        borderColorLight:'rgb(241,241,241)',
        borderInherit:'rgb(16,138,236)'
    },
    color:'white',
    fontSize: 20,
    fontWeight:'bold',


};
export const shadow={
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
}
export const systemBar={

    backgroundColor:'rgb(16,125,213)',
    color:'white',
    fontSize: 20,
    fontWeight:'bold',


};
 export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },

     footerContainer: {
         position:'absolute',
         bottom:0,
         margin:0,
         padding:0,
         width:'100%',
         backgroundColor:systemColor.backgroundColor
     },
/*
     mainMenuItems: {
     marginLeft:50,
     marginRight:50,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     },
     month: {

         borderRadius: 40,
         flexDirection: "column",
         margin:5,
         marginBottom:2,
         padding:5.6,
         backgroundColor:systemColor.backgroundColor,
         fontSize:13,
         fontWeight:'bold',
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     },


     monthNumber: {
         textAlign:'center',
         borderRadius: 4,
         margin:1,
         backgroundColor:systemColor.backgroundColor,
         padding:14,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5

     },
     monthText: {
     width:40,
         borderRadius: 40,
       textAlign:'center',
         shadowColor: "#e5e6e8",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.0,
         shadowRadius: 3.84,
         elevation: 20

     },



     editor: {
         flexDirection: "row",
         justifyContent: "space-evenly",
         alignItems: "center",
         borderTopEndRadius: 10,
         borderTopStartRadius: 10,
         height: 50,
         flexWrap:'wrap',
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     },
   logHeader: {
         flexDirection: "row",
         justifyContent: "space-evenly",
         alignItems: "center",
         borderTopEndRadius: 10,
         borderTopStartRadius: 10,
         flexWrap:'wrap',
         height: 30

     },
       tableHeader: {
             flexDirection: "row",
             justifyContent: "space-around",
             alignItems: "flex-start",
             backgroundColor: systemColor.backgroundColor,
             borderTopEndRadius: 10,
             borderTopStartRadius: 10,
            flexWrap:'wrap',
            color:'white',
            padding:10,
           shadowColor: "#000",
           shadowOffset: {
               width: 0,
               height: 2
           },
           shadowOpacity: 0.25,
           shadowRadius: 3.84,
           elevation: 5

         },
     tableHeaderData: {
         flexDirection: "row",
         justifyContent: "flex-end",
         alignItems: "flex-start",
         flexWrap:'wrap',
         color:'white',


     },
     tableRowData: {
         flexDirection: "row",
         justifyContent: "space-around",
         alignItems: "flex-start",
         borderTopEndRadius: 10,
         borderTopStartRadius: 10,
         flexWrap:'wrap',
         color:'white',
         padding:2,
         paddingLeft:10,
         paddingRight:10,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     },
     tableRowDataText:{
         padding:10,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     },
     taskButton: {
         padding:4,
         borderRadius:4,
         marginLeft:16,
         marginTop:4,
         backgroundColor:systemColor.backgroundColor,
         color:systemColor.color,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     },
     taskButtonIcon: {

         color:systemColor.color,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5

     },
*/
     centeredView: {
         flex: 1,
         justifyContent: "center",
         alignItems: "center",
         marginTop: 22,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     },
     modalView: {
         margin: 20,
         backgroundColor: "white",
         borderRadius: 20,
         padding: 35,
         alignItems: "center",
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     },
     openButton: {
         backgroundColor: "#F194FF",
         borderRadius: 6,
         margin:4,
         padding: 10,

         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5

     },
     textStyle: {
         color: "white",
         fontWeight: "bold",
         textAlign: "center",

     },
     modalText: {
         marginBottom: 15,
         height:38,
         flexWrap:'wrap',
         shadowColor: "#000",
         padding:5,

         textAlign: "left",
         borderWidth:1,
         margin:4,
         borderRadius: 4,
         width:250,
         overflow:'scroll',
         borderColor:systemColor.backgroundColor,


     },
     modalButtons: {
        flexDirection:'row',
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     },

     buttonLite: {
         width:26,
         height:26,
         padding:4,
         borderRadius:20,
         textAlign:'center',
         color:systemColor.color,
         backgroundColor:systemColor.backgroundColor

     },

     appBarContainer: {
         backgroundColor:systemColor.backgroundColor,
         color:systemColor.color,
         margin:0,
         width:'100%',
         paddingTop:40,
         paddingBottom:10,
         zIndex:100,
         top:0,
         position:"absolute"

     },
     appBarContainerItems: {
         flexDirection:'row',
         justifyContent:'flex-end',
         alignItems:'center',
         margin:0,
         padding:0


     },
     appBarIcon: {
         marginLeft:40,
         color:systemColor.color,

         shadowColor: systemBar.backgroundColor,
         shadowOffset: {
             width: 0,
             height: 0
         },

         elevation: 17,
         borderRadius:8,
     },
     bar: {
         margin:8
     },


     /*
     mainMenuItemsContainer: {
         flexDirection:'row',
         justifyContent:'center',
         alignItems:'center',
         marginTop:420,
         marginBottom:10,
         width:'100%',
         height:45,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5

     },

     mainItem: {
         marginLeft:40,
         marginRight:40,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 25,
         shadowRadius: 3.84,
         elevation: 50

     },

     timeContainer:{
         flexDirection:'row',
         justifyContent:'center',
         width:'100%',
         height:40



     },

     textInTime: {
         borderWidth:1,
         margin:4,
         borderRadius: 4,
         textAlign:'center',
         padding:4,
         width:60,
         height:40,
         borderColor:systemColor.backgroundColor,

     },
     end: {
     marginTop:16
     },
     sysTime: {

         margin:10,
         padding:4,
         borderRadius:10,
         backgroundColor:systemColor.backgroundColor,
         color:systemColor.color,
         textAlign:'center'
     },
     sysTimeContainer: {
         position:'absolute',
         top:-10,
         borderRadius:10,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     },
     monthContainer:{
         marginRight:4,
         marginLeft:4,
         padding:4,


     },
     save: {
         shadowColor: systemBar.backgroundColor,
         shadowOffset: {
             width: 0,
             height: 2
         },

         backgroundColor:'rgb(19,170,82)',
         elevation: 20,
         borderRadius:8,
         padding:4,

     },
     dayNameContainer: {
        flexDirection:'row',
         alignItems:'center',
         justifyContent:'center',
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     },
     dayName: {
        backgroundColor:systemColor.backgroundColor,
         padding:4,
         borderRadius:40,
         borderWidth:1,
         borderColor:systemColor.backgroundColor,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     },
     modalTextSendTo:{
         marginBottom: 15,
         shadowColor: "#000",
         marginLeft:2,
         height:80,
         borderWidth:1,
         borderRadius: 4,
         borderColor:systemColor.backgroundColor,
     },
     taskSendTo: {
        flexDirection:'row',
     },


     logCrud: {
        flexDirection:'row',
         borderBottomWidth:1,
         borderTopWidth:1,
         borderTopColor:'rgb(234,232,232)',
         borderBottomColor:'rgb(234,232,232)'
     },
     logCrudTool: {
        color:systemColor.color,
         margin:8,
         padding:6,
         borderRadius:4,
         backgroundColor:systemColor.backgroundColor,

     },
     logTableData: {
        marginLeft:20,
        marginRight:22,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     }*/
     dashboardMenuItemsContainer: {


         flexDirection:'row',
         marginTop:130,
         marginBottom:20,
         justifyContent:'space-evenly'
     },
     mainItem: {
         margin:10,
         marginLeft:30,
         marginRight:30,

     },
     PickTimeContainer: {
         flexDirection:'row',
         justifyContent:'space-evenly',

     },



     textInTime: {
         borderWidth:1,
         margin:4,
         borderRadius: 4,
         textAlign:'center',
         padding:4,
         width:60,
         height:40,
         borderColor:systemColor.backgroundColor,


     },
     end: {
         marginTop:16
     },
     monthContainer: {
         flexDirection:'row',
         backgroundColor:systemColor.backgroundColor,
         padding:10,
         borderRadius:30,
         margin:4,
         justifyContent:'space-evenly',
         alignItems:'center',

     },
     dayName:{
         borderRadius: 20,
         flexDirection: "column",
         marginBottom:2,
         padding:6,
         backgroundColor:systemColor.backgroundColor,
         fontSize:13,
         fontWeight:'bold',

     },
     month: {

         borderRadius: 40,
         flexDirection: "column",
         marginLeft:5,
         marginRight:5,
         marginBottom:2,
         padding:6,
         backgroundColor:systemColor.backgroundColor,
         fontSize:13,
         fontWeight:'bold',
         ...shadow
     },
     dateNumbersContainer: {
        marginLeft:3,
         marginRight:4,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 2
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5
     },
     monthNumber:{
         borderRadius:3,
         backgroundColor:systemColor.backgroundColor,
         margin:0.40

     },
     monthText: {
         paddingLeft:22,
         paddingRight:20,
         paddingBottom:7.2,
         paddingTop:7,
         margin:1,
         borderRadius:20,


     },
     userActivities: {
         position:'absolute',
         left:-19,
         zIndex:100,
         shadowColor: "#000",

     },

     appBarIconMessageAlertUser: {
         position:"absolute",
         top:-6,
         left:-6

     },
     tableHeader: {
         flexDirection:'row',
         backgroundColor:systemColor.backgroundColor,
         padding:10,
         borderTopEndRadius:4,
         borderTopStartRadius:4,

         justifyContent:'space-evenly',
         alignItems:'center',
         shadowColor: "#ffffff",
         shadowOffset: {
             width: 0,
             height: 1

         },
         shadowOpacity: 0.1,
         shadowRadius: 1,
         elevation: 40
     },
     tableHeaderData: {
         flexDirection:'row',
         color:'white',
         borderRadius: 20,
         marginBottom:2,
         padding:6,
         backgroundColor:systemColor.backgroundColor,
         fontSize:13,
         fontWeight:'bold',
     },
     logHeader: {
         flexDirection:'row',
         padding:10,
         justifyContent:'space-evenly',
         alignItems:'center',
         shadowColor: "#ffffff",

     },
     logTableData: {

         justifyContent:'space-evenly',
         alignItems:'center',
         fontSize:13,
         fontWeight:'800',
         marginLeft:19,
         marginBottom:2,
         paddingRight:6,
         paddingLeft:6
     },
     logCrudContainer: {
         flexDirection:'row',
         padding:10,

         justifyContent:'flex-start',
         alignItems:'flex-start',
         shadowColor: "#ffffff",
         shadowOffset: {
             width: 0,
             height: 1

         },
         shadowOpacity: 0.1,
         shadowRadius: 1,
         elevation: 40
     },
     logCrudTool: {
         backgroundColor:systemColor.backgroundColor,
         color:'white',
         borderRadius:6,
         marginLeft:4,
         marginRight:4,
         padding:6
     },
     save: {

         borderRadius:80,

     },
     taskTo: {
         flexDirection:'row'
     },
     logCrudTotalHours: {

         color:systemColor.backgroundColor,
         borderRadius:6,
         marginLeft:19,
         marginRight:4,
         padding:6
     }

 });


