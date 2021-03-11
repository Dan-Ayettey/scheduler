import {PersistenceModel} from "../models/PersistenceModel";
import { showToastWithGravity } from "../views/PickTime";
import { useLayoutEffect } from "react";
export class PersistenceController {

    private persistenceModel: PersistenceModel;

    constructor(persistenceModel: PersistenceModel) {
        this.persistenceModel = persistenceModel
    }

    public createTable = () => {


        this.persistenceModel.db('scheduler').transaction((transaction) => {
            transaction.executeSql(`CREATE TABLE IF NOT EXISTS
                                        contact
                                    (
                                        user_id        INT         NOT NULL PRIMARY KEY,
                                        firstName      TEXT        NOT NULL,
                                        lastName       TEXT        NOT NULL,
                                        email        TEXT UNIQUE NOT NULL,
                                        password       TEXT        NOT NULL,
                                        tag            TEXT        NOT NULL,
                                        cellNumber     TEXT        NOT NULL,
                                        contact        BLOB        NOT NULL,
                                        startTime      BLOB        NOT NULL,
                                        endTime        BLOB        NOT NULL,
                                        month          TEXT        NOT NULL,
                                        day            TEXT        NOT NULL,
                                        task           BLOB        NOT NULL,
                                        dayName        TEXT        NOT NULL,
                                        address        BLOB        NOT NULL,
                                        telephone      TEXT        NOT NULL,
                                        date           TEXT        NOT NULL,
                                        location       TEXT        NOT NULL,
                                        longitude      TEXT        NOT NULL,
                                        latitude       TEXT        NOT NULL,
                                        latitudeDelta  TEXT        NOT NULL,
                                        longitudeDelta TEXT        NOT NULL,
                                         isActive       INTEGER  NOT NULL,
                                         isNotify       INTEGER  NOT NULL
                                    )`)
        },(error => {
            console.log(error.message)
        }),(() => {
            console.log('sucessfull')
        }))
    }


    isOk=false
   public createUser=(request:any)=> {
       this.persistenceModel.db("scheduler").readTransaction(transaction => {
           transaction.executeSql('SELECT *  from users',[],((transaction1, resultSet) => {
         request[0]=resultSet.rows.length+1;
       for(let x=0;x<resultSet.rows.length;x++)
           if(resultSet.rows.item(x).email !== request[3]){

               this.persistenceModel.db("scheduler").transaction((transaction => {
                   transaction.executeSql(`INSERT INTO users(
                  user_id,
               firstName,     
lastName,      
email,        
password    ,
tag         ,
cellNumber  ,
contact     ,
startTime   ,
endTime     ,
month       ,
day         ,
task        ,
dayName     ,
address     ,
telephone   ,
date        ,
location    ,
longitude   ,
latitude    ,
latitudeDelta,
longitudeDelta,isActive, isNotify )VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                       request)
               }),error => {
                   console.log(error.message)

               })
               this.isOk= true
               return true
           }





           }))
   })
 return this.isOk
}
    public searchById=(query:string,arg:[])=> {
        this.persistenceModel.db("scheduler").readTransaction(transaction => {
            transaction.executeSql('SELECT *  from users', [], ((transaction1, resultSet) => {
                let dbIndex = resultSet.rows.length + 1
               console.log(resultSet.rows)
            }))

        })
    }
    public userById=(id:string,data:[])=> {
        this.persistenceModel.db("scheduler").readTransaction(transaction => {
            transaction.executeSql('SELECT *  from users WHERE email=? OR  contact=?', [id,id], ((transaction1, resultSet) => {
                let dbIndex = resultSet.rows.length + 1
                console.log(resultSet.rows)
            }))

        })
    }

}

/*
{
       longitudeDelta:string;
       latitudeDelta: string;
       latitude: string;
       longitude: string;
       location: string;
       date: string;
       telephone: string;
       address: string;
       dayName: string;
       task: [];
       day: string;
       month: string;
       endTime: {};
       startTime: {};
       contact: [];
       cellNumber: string;
       tag: string;
       password: string;
       email: string;
       lastName: string;
       firstName:string;

public updateUser=(property:string,value:any)=>{

 this.persistenceModel.schedulerSchema.then(realm =>{
     realm.objects('User').update(property,value)

 })
}

public deleteUser=(property:string,value:any)=>{

 this.persistenceModel.schedulerSchema.then(realm =>{
     realm.delete(value)

 }).catch((e)=>{
     console.log(e)
 })
}
public  createProgress=()=> {
this.persistenceModel.schedulerSchema.progress(() => {

 }).then(r =>()=>{
     console.log(r)
 })
}



}
*/
