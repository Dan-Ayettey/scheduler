import { UserModel } from "../models/UserModel";

export class UserController {
    private userModel: UserModel;

    constructor(userModel:UserModel) {
        this.userModel=userModel
    }
    public setFirstName=(firstName:string)=>{
        this.setFirstName(firstName);
    }


    public setLast=(lastName:string)=>{
        this.userModel.setLast(lastName);
    }


    public setEmail=(email:string)=>{
        this.userModel.setEmail(email);
    }

    public setPassword=(password:string)=>{
        this.userModel.setPassword(password);
    }


    public setStart= (start: { hour: string; minutes: string })=>{
        this.userModel.setStart(start);
    }

    public setEnd= (end: { hour: string; minutes: string })=>{
        this.userModel.setEnd(end);
    }


    public setMonth=(month:string)=>{
        this.userModel.setMonth(month);
    }


    public setDay=(day:string)=>{
        this.userModel.setDay(day);
    }

    public setTask=(task:[])=>{
        this.userModel.setTask(task);
    }

    setDate=(date: {day:string,month:string,year:string}) =>{
        this.userModel.setDate(date)
    }
}
