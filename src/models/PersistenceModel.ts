
import * as SQLite from 'expo-sqlite';
export class PersistenceModel {

    db =(name:string)=>{
        return SQLite.openDatabase(name);
    }



    /*
   public userdb = openDatabase({location:'default', name:'schedule.db'},()=>{}, e =>{
       console.log(e)
   })
    getPassword=(password:string)=>{
       return password;
   }
    getStart=(start:{})=>{
       return  start;
   }
   getEnd=(end:{})=>{
       return  end;
   }
   /*
  schedulchema= Realm.open( {
       schema:[{
           name:'User',
           properties: {

               firstName: 'string',
               lastName:"string",
               email: "string",
               password: 'string',
               tag: 'string',
               cellNumber: 'string',
               contact: {
                   type: '[]',
               },
               start: {
                   type: '[]',
               },
               end: {
                   type: '[]'
               },
               month:'string',
               day:'string',
               task: {
                   type: '[]'
               },
               dayName:'string',
               address: {
                   type: '[]'
               },
               telephone:'string',
               date:'string',
               location:'string',
               longitude:'string',
               latitude:'string',
               latitudeDelta:'string',
               longitudeDelta:'string',

           } }]})

    */
}






