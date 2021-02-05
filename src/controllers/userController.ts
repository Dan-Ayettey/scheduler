import { UserModel } from "../models/UserModel";

export class UserController {
    private userModel: UserModel;

    constructor(userModel:UserModel) {
        this.userModel=userModel;
    }
    public setFirstName=(firstName:string)=>{
        this.userModel.setFirstName(firstName);
    }


    public setLastName=(lastName:string)=>{
        this.userModel.setLast(lastName);
    }


    public setEmail=(email:string)=>{
        this.userModel.setEmail(email);
    }

    public setPassword=(password:string)=>{
        this.userModel.setPassword(password);
    }

    public setTag(tag: string) {
        this.userModel.setTag(tag)
    }
    public setStart= (start: { hour: string, minutes: string })=>{
        this.userModel.setStart(start);
    }

    public setEnd= (end: { hour: string, minutes: string })=>{
        this.userModel.setEnd(end);
    }
   public setDayIndex(dateIndex:number){
        this.userModel.setDateIndex(dateIndex);
    }
    public setDayName(dayName:string){
        this.userModel.setDayName(dayName);
    }
    public setMonthIndex(dayIndex:number){
        this.userModel.setMonthIndex(dayIndex);
    }
     public setTodayDate(todayDate:string){
        this.userModel.setTodayDate(todayDate);
     }
    public setMonth=(month:string)=>{
        this.userModel.setMonth(month);
    }


    public setDay=(day:string)=>{
        this.userModel.setDay(day);
    }

    public setTask= (task: [])=>{
        this.userModel.setTask(task);
    }

    setDate=(date: {date:string,month:string,year:string}) =>{
        this.userModel.setDate(date)
    }


    setCellNumber(number: string) {
        this.userModel.setCellNumber(number)
    }
}
