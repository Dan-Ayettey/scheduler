
import * as SQLite from 'expo-sqlite';
export class PersistenceModel {

    db =(name:string)=>{
        return SQLite.openDatabase(name);
    }

}






