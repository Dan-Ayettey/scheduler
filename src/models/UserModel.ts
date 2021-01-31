
export class UserModel {
    private  firstName:string='';
    private lastName: string='';
    private email: string='';
    private password: string='';
    private start: string='';
    private end: string='';
    private month: string='';
    private day: string='';
    private task= [{}];
    public setFirstName=(firstName:string)=>{
       this.firstName=firstName;
       }

    getFirstName=()=>{
         return this.firstName;
       }

    public setLast=(lastName:string)=>{
        this.lastName=lastName;
    }

    getLastName=()=>{
        return this.lastName;
    }
    public setTelephone=(telephone:string)=>{
        this.telephone=telephone;
    }

    getTelephone=()=>{
        return this.telephone;
    }
    public setEmail=(email:string)=>{
        this.email=email;
    }

    getEmail=()=>{
        return this.email;
    }
    public setPassword=(password:string)=>{
        this.password=password;
    }

    getPassword=()=>{
        return this.password;
    }

    public setStart=(start:string)=>{
        this.start=start;
    }

    getStart=()=>{
        return this.start;
    }
    public setEnd=(end:string)=>{
        this.end=end;
    }

    getEnd=()=>{
        return this.end;
    }
    public setMonth=(month:string)=>{
        this.month=month;
    }

    getMonth=()=>{
        return this.month;
    }

    public setDay=(day:string)=>{
        this.day=day;
    }

    getDay=()=>{
        return this.day;
    }

    public setTask=(task:[{}])=>{
        this.task=task;
    }

    getTask=()=>{
        return this.task;
    }
    private telephone: string='';


}
