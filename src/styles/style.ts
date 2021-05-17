import { StyleSheet} from 'react-native';
export const systemColor={

    backgroundColor:'rgb(16,138,236)',
    colors:{
        white:'white',
        borderColorLight:'rgb(241,241,241)',
        borderInherit:'#000'
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
        height:36,
         backgroundColor:systemColor.backgroundColor
     },

     centeredView: {
         flex: 1,
         justifyContent: "center",
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

         top:-20

     },
     appBarContainerItems: {
         flexDirection:'row',
         justifyContent:'flex-end',
         alignItems:'center',
         margin:0,
         padding:0,
     },
     appBarIcon: {
         marginLeft:40,
         color:systemColor.color,

         padding:4,
         shadowColor: systemBar.backgroundColor,
         shadowOffset: {
             width: 0,
             height: 0
         },

         elevation: 17,
         borderRadius:20,
     },
     bar: {
         margin:8
     },

     dashboardMenuItemsContainer: {
         flexDirection:'row',
         justifyContent:'space-evenly',
         marginTop:2
     },
     mainItem: {
         margin:10,
         marginLeft:30,
         marginRight:30,

     },
     pickTimeContainer: {
         flexDirection:'row',
         justifyContent:'space-around',
         marginTop:40,

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


     dayNameItem:{
         padding:4,
         borderRadius: 20,
         alignSelf:'center',
         backgroundColor:systemColor.backgroundColor,
         textAlign:'center',
         marginLeft:98
     },
     month:{
         padding:10,
         borderRadius: 40,
         alignSelf:'center',
         textAlign:'center',
         marginLeft:78,
         backgroundColor:systemColor.backgroundColor,
         fontSize:13,...shadow
     },
     monthContainer:{
         width:'100%',
         borderRadius: 20,
         flexDirection: "column",
         textAlign:'center',
         padding:16,
         margin:6,
         height:74,
         alignSelf:'center',
         backgroundColor:systemColor.backgroundColor,
         fontSize:13,
         fontWeight:'normal'
     },
     dayName:{
        width:'90%',
         borderRadius: 20,
         flexDirection: "column",
         textAlign:'center',
         padding:4,
         margin:6,
         alignSelf:'center',
         backgroundColor:systemColor.backgroundColor,
         fontSize:13,
         fontWeight:'normal',

     },
     /*
          borderRadius: 40,
         flexDirection: "column",
         marginLeft:5,
         marginRight:5,
         marginBottom:2,
         padding:6,
         backgroundColor:systemColor.backgroundColor,
         fontSize:13,...shadow
      */

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
         padding:'7.4%',

         margin:0.40

     },
     monthText: {
         padding:'7.4%',
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

         borderRadius:4,
         backgroundColor:'rgb(88,179,24)',
         paddingBottom:2,
         paddingTop:2

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
     },

     loginInputsContainer: {
        marginTop:30,
         flexDirection:'column',
         justifyContent:'space-evenly',
         alignContent:'center',
         alignSelf:'center',
         width:'60%'
     },
     loginWithContainer:{
         flexDirection:'row',
         justifyContent:'space-evenly'
     },
     loginTitle: {
       fontSize:20,
     },
     loginHeading:{
        margin :20,
         marginTop:24,
         fontSize:20,
         fontWeight:'bold'
     },
     loginWith: {
        margin:8,
        marginLeft:20,
     },
     loginInput: {

             marginBottom: 15,
             height:38,
             flexWrap:'wrap',
             shadowColor: "#000",
             padding:5,

             textAlign: "left",
             borderWidth:1,
             margin:4,
             borderRadius: 4,
             width:'100%',
             alignSelf:'center',
             borderColor:systemColor.backgroundColor,
             color:'black'
     },
     loginButton: {
        backgroundColor:systemColor.backgroundColor,
         padding:12,
         paddingLeft:20,
         paddingRight:20,
         color:systemColor.color,
         fontWeight:'bold',
         fontSize:16,
         borderRadius: 4,

     },
     loginButtonSignUp: {

         padding:12,
         paddingLeft:20,
         paddingRight:20,
         color:systemColor.backgroundColor,
         fontWeight:'bold',
         fontSize:16,
         borderRadius: 4,

     },
     loginButtonContainer: {

        flexDirection:'row',
         justifyContent:'space-between'
     },
     initSceneContainer: {

             flexDirection:'row',
             justifyContent:'center',
             alignSelf:'center',
             alignContent:'center',
     },


     dashboardContent:{


     },
     dashBoardContainer: {
      flex:1
     },
     loginDashBoardContainer: {
         flexDirection:'column',
         justifyContent:'space-evenly',
         alignContent:'center',
         alignSelf:'center'
     },
     activitiesContainer:{
         flexDirection:'row',
         width:'100%',
         borderRadius:4,
         justifyContent:'space-evenly',
         alignItems:'center',
     },
     appBarContainerMenuItems:{
      alignSelf:'flex-end',
      alignContent:'flex-end',
      textAlign:'left',
         position:'absolute',
      backgroundColor:'white',
      zIndex:120,
      height:300,
      marginTop:30,
      marginRight:-29,
      ...shadow
     },
     appBarContainerMenuItemsIcon: {
         textAlign:'left',
         margin:0,
        color:systemBar.backgroundColor,

     },
     appBarContainerMenuItemsIconTitle:{
         fontSize:13,
         fontWeight:'bold',
         margin:20

     },
     dateLite: {
     borderRadius:20,
         fontSize:16,
         fontWeight:'800',
         backgroundColor:systemColor.backgroundColor,
         textAlign:'center',width:30,height:30,padding:6
     },
     footer: {
         fontSize: 20,
         flex:1,
         width:'100%',
         padding:10,
         textAlign:'center',
         zIndex:1,
         backgroundColor:systemColor.backgroundColor,


     },
     scrollViewStyle: {
         position: 'absolute',
         top: 0,
         bottom: 0,
         left: 0,
         right: 0,
         flex:10,
         paddingTop: 60
     },

     header:{
         fontSize: 20,
         flex:0,
         width:'100%',
         padding:30,
         textAlign:'center',
         zIndex:1,
         backgroundColor:systemColor.backgroundColor,
     },
     register:{
         marginTop:-60
     }


 });


