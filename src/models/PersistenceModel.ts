import * as SQLite  from 'expo-sqlite';
import * as Lite  from 'sqlite';

const  {openDatabase,Database} =require('expo-sqlite');
import openDatabases from 'react-native-sqlite-storage';
import { Alert } from "react-native";

export class PersistenceModel {
     private readonly db
     constructor(name:string) {
         this.db = openDatabase({ name: name });
     }
     sqlInstance(){
         return this.db
     }
    dbx(name:string){

        /*
        var db = openDatabase({ name: 'scheduler.db' });
        db.transaction((txn:any) => {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='test'",
                [],
                function (tx:any, res:any) {
                    console.log('item:', res.rows);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS test', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS test(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                            []
                        );

                    }
                }
            );
        });

        db.transaction(function (tx:any) {
            tx.executeSql(
                'INSERT INTO test (user_name, user_contact, user_address) VALUES (?,?,?)',
                ["gate", "gi", "haik"],
                (tx:any, results:any) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                    alert('Success')
                    } else alert('Registration Failed');
                }
            );
        });
        db.transaction((tx:any) => {
            tx.executeSql(
                'SELECT * FROM test',
                [],
                (tx:any, results:any) => {
                    var temp = [];
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    console.log(temp)
                }
            );
        });



        /*
        var db = SQLite.openDatabase("test.db", "4", "Test Database", 200000, this.openCB);
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Employees a, Departments b WHERE a.department = b.department_id', [], (tx, results) => {
                console.log("Query completed");

                // Get rows with Web SQL Database spec compliance.

                var len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                    console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`);
                }

                // Alternatively, you can use the non-standard raw method.


            });
        });*/

            return openDatabase({ name: name });


    }

}





