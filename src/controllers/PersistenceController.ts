import {PersistenceModel} from "../models/PersistenceModel";
import { showToastWithGravity } from "../views/PickTime";
import { useLayoutEffect } from "react";

export class PersistenceController {
    private persistenceModel: PersistenceModel;



    constructor(databaseName:string) {

        this.persistenceModel =new PersistenceModel(databaseName)
    }

    public createTable = () => {
        this.persistenceModel.sqlInstance().transaction((txn:any) => {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='users' OR  name='task'",
                [],
                function (tx:any, res:any) {
                    console.log(res.rows)
                    //tx.executeSql('DROP TABLE IF EXISTS users', []);
                    //tx.executeSql('DROP TABLE IF EXISTS task', []);

                    if (res.rows.length == 0) {
                        tx.executeSql('DROP TABLE IF EXISTS users', []);
                        tx.executeSql('DROP TABLE IF EXISTS task', []);
                        tx.executeSql('CREATE TABLE IF NOT EXISTS task(task_id,email,password,task,FOREIGN KEY (task_id) REFERENCES users(user_id))', []);
                        tx.executeSql(`CREATE TABLE IF NOT EXISTS users(user_id,
                                                                     firstName,
                                                                     lastName,
                                                                     email,
                                                                     password,
                                                                     tag,
                                                                     cellNumber,
                                                                     contact,
                                                                     startTime,
                                                                     endTime,
                                                                     month,
                                                                     day,
                                                                     task,
                                                                     dayName,
                                                                     address,
                                                                     telephone,
                                                                     date,
                                                                     location,
                                                                     longitude,
                                                                     latitude,
                                                                     latitudeDelta,
                                                                     longitudeDelta, isActive, isNotify)`,
                            []);

                    }
                }
            );
        });
    }

    public getAllData=(callback: (arg0: any) => void)=> {
        this.persistenceModel.sqlInstance().transaction(function (tx:any) {
            tx.executeSql('SELECT *  from users', [], ((transaction1:any, resultSet:any) => {
                callback(resultSet.rows)
            }))
    })

        return false
    }
    public getAllTaskData=(callback: (arg0: any) => void)=> {
        this.persistenceModel.sqlInstance().transaction(function (tx:any) {
            tx.executeSql('SELECT *  from task', [], ((transaction1:any, resultSet:any) => {
                callback(resultSet.rows)
            }))
        })

        return false
    }
    public auth=(response:[string,string],callback: (result: any,isOk:boolean,msg:string) => void)=> {

        this.persistenceModel.sqlInstance().transaction(function (tx:any) {
            tx.executeSql('SELECT *  from users WHERE email=$1 AND password=$2', response, ((transaction1:any, resultSet:any) => {
                console.log(resultSet.rows.length)
                if (resultSet.rows.length > 0) {
                    callback(resultSet.rows,true,'Authorization was successful')


                } else{
                    callback([],false,'Authorization failed, We can find you email or password in our system')


                }
            }))
        },(tx: any, results: any) => {
            console.log(results)
            if(results){
                if (results.rowsAffected > 0) {
                    callback(results,true,'Authorization was successful')


                } else{
                    callback([],false,'Authorization failed, We can find you email or password in our system')


                }
            }else {
                callback([],false,'Authorization failed, We can find you email or password in our system')
            }

        })

        return false
    }
   public createUser= (request: Array<any>, resultCallback: (isOk: Boolean, msg: string) => void)=> {

       this.persistenceModel.sqlInstance().transaction(function (tx:any) {
           tx.executeSql('SELECT *  from users', [], ((transaction1:any, resultSet:any) => {
               request[0] = resultSet.rows.length + 1;
               tx.executeSql('SELECT *  from users WHERE email=$1', [request[3]], ((transaction1:any, resultSet:any) => {
               if(resultSet.rows.length==0){
                   try {
                       tx.executeSql(`INSERT INTO users(user_id,
                                                firstName,
                                                lastName,
                                                email,
                                                password,
                                                tag,
                                                cellNumber,
                                                contact,
                                                startTime,
                                                endTime,
                                                month,
                                                day,
                                                task,
                                                dayName,
                                                address,
                                                telephone,
                                                date,
                                                location,
                                                longitude,
                                                latitude,
                                                latitudeDelta,
                                                longitudeDelta, isActive, isNotify)
                              values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,
                                      ?, ?, ?, ? )`,
                           request,
                           (tx: any, results: any) => {

                               if (results.rowsAffected > 0) {
                                   resultCallback(true,'Insertion was successful')


                               } else{
                                   resultCallback(false,'Insertion was not successful')


                               }
                           }
                       );
                   }catch (e) {
                       console.log(e)
                   }
               }else {
                   resultCallback(false,'User already exist, try login instead')
               }

               }),(tx: any, results: any) => {
                      console.log(results)
                   if (results.rowsAffected > 0) {
                       resultCallback(true,'Insertion was successful')


                   } else{
                       resultCallback(false,'Insertion was not successful')


                   }
               })
           }));
       });
}
    public getUserById=(id:number,callback:(arg:any)=>void)=> {
        this.persistenceModel.sqlInstance().transaction(function (tx:any) {
            tx.executeSql('SELECT *  from users WHERE user_id=$1', [id], ((transaction1: any, resultSet: any) => {
                callback(resultSet.rows)
            }))
        })
    }
    public deleteUserById=(id:number,callback:(arg:any)=>void)=> {
        this.persistenceModel.sqlInstance().transaction(function (tx:any) {
            tx.executeSql('DELETE from users WHERE user_id=$1', [id], ((transaction1: any, resultSet: any) => {
                callback(resultSet.rows)
            }))
        })
    }
    public deleteTaskById=(id:number,callback:(arg:any)=>void)=> {
        this.persistenceModel.sqlInstance().transaction(function (tx:any) {
            tx.executeSql('DELETE from users WHERE task=$1', [id], ((transaction1: any, resultSet: any) => {
                callback(resultSet.rows)
            }))
        })
    }

    public updateTaskById=(id:number,task:{},callback:(arg:any)=>void)=> {
        this.persistenceModel.sqlInstance().transaction(function (tx:any) {
            tx.executeSql('UPDATE users SET task=$1 WHERE user_id=$1', [task,id], ((transaction1: any, resultSet: any) => {
                callback(resultSet.rows)
            }))
        })
    }

    createTask(request:any,  resultCallback: (isOk:boolean, msg:string) => void) {
        this.persistenceModel.sqlInstance().transaction(function (tx:any) {
            tx.executeSql('SELECT *  from users', [], ((transaction1:any, resultSet:any) => {
                request[0] = resultSet.rows.length + 1;
                tx.executeSql('SELECT *  from users WHERE(email=$1 AND  email=$1)', request, ((transaction1:any, resultSet:any) => {
                    if(resultSet.rows.length==0){
                        try {
                            tx.executeSql(`INSERT INTO task(task_id,
                                                email,
                                                password,
                                                task
                                        )
                              values (?, ?, ?, ?)`,
                                request,
                                (tx: any, results: any) => {

                                    if (results.rowsAffected > 0) {
                                        resultCallback(true,'Insertion was successful')


                                    } else{
                                        resultCallback(false,'Insertion was not successful')


                                    }
                                }
                            );
                        }catch (e) {
                            console.log(e)
                        }
                    }else {
                        resultCallback(false,'User already exist, try login instead')
                    }

                }),(tx: any, results: any) => {
                    console.log(results)
                    if (results.rowsAffected > 0) {
                        resultCallback(true,'Insertion was successful')


                    } else{
                        resultCallback(false,'Insertion was not successful')


                    }
                })
            }));
        });
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
