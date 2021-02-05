
export class UserModel {
    private  firstName:string='';
    private lastName: string='';
    private  location: string='';
    private  longitude:string='';
    private latitude: string='';
    private longitudeDelta:string='';
    private latitudeDelta: string='';
    private email: string='';
    private todayDate:string='';
    private password: string='';
    private start: { hour: string, minutes: string }={hour: '', minutes: ''};
    private end: { hour: string, minutes: string }={hour: '', minutes: ''};
    private month: string='';
    private day: string='';
    private task:string []=[];
    private dayName: string='';
    private telephone: string='';
    private date: { date: string, month: string, year: string } ={ date:'', month: '', year: '' };
    private monthIndex: number=0;
    private dateIndex: number=0;

    public setFirstName=(firstName:string)=>{
       this.firstName=firstName;
       }

    public setDayName=(dayName:string)=>{
        this.dayName=dayName;
    }
    public getFirstName=()=>{
         return this.firstName;
       }

    public getDayName=()=>{
        return this.dayName;
    }
    public setTodayDate=(todayDate:string)=>{
        this.todayDate=todayDate;
    }

    public getTodayDate=()=>{
        return this.todayDate;
    }
    public setLast=(lastName:string)=>{
        this.lastName=lastName;
    }

    public getLastName=()=>{
        return this.lastName;
    }
    public setTelephone=(telephone:string)=>{
        this.telephone=telephone;
    }

    public getTelephone=()=>{
        return this.telephone;
    }
    public setEmail=(email:string)=>{
        this.email=email;
    }

    public getEmail=()=>{
        return this.email;
    }
    public setPassword=(password:string)=>{
        this.password=password;
    }

    public getPassword=()=>{
        return this.password;
    }

    public setStart= (start: { hour: string, minutes: string })=>{
        this.start=start;
    }

    public getStart=()=>{
        return this.start;
    }
    public setEnd= (end: { hour: string, minutes: string })=>{
        this.end=end;
    }

    public getEnd=()=>{
        return this.end;
    }
    public setMonth=(month:string)=>{
        this.month=month;
    }

    public getMonth=()=>{
        return this.month;
    }

    public setDay=(day:string)=>{
        this.day=day;
    }

   public getDay=()=>{
        return this.day;
    }

    public setTask= (task: [])=>{
        this.task=task;
    }

   public getTask=()=>{
        return this.task;
    }

    public setDate= (date: { date: string, month: string, year: string }) =>{
        this.date=date
    }
    public getDate=()=>{
       return  this.date
       }
    private tag: string[]=[];
    private cellNumber: string='';
    private contact=[];
    private isNotify: number=0;
    public setTag(tag: string) {
        this.tag.push(tag)
    }
    public setIsNotify(isNotify:number) {
        this.isNotify=isNotify
    }
    public setConatct(contact: []) {
        this.contact = contact
    }

    public setCellNumber(cellNumber: string) {
        this.cellNumber=cellNumber
    }
    public setMonthIndex(monthIndex: number) {
        this.monthIndex=monthIndex
    }
    public getMonthIndex=()=>{
        return  this.month
    }


   public setDateIndex(dateIndex: number) {
        this.dateIndex=dateIndex
    }
    setLocation(location:string){
      this.location=location
    }
    getLocation(){
       return  this.location;
    }
    setLongitude(longitude:string){
      return longitude
    }
    getLongitude(){
        return  this.longitude;
    }
    setLatitude(latitude:string){
        this.latitude=latitude
    }
    getLatitude(){
        return this.latitude
    }
    setLongitudeDelta(longitudeDelta:string){
        this.longitudeDelta=longitudeDelta
    }
    setLatitudeDelta(latitudeDelta:string){
        this.latitudeDelta=latitudeDelta
    }

    getLatitudeDelta(){
        return this.latitudeDelta
    }
    getLongitudeDelta(){
        return this.longitudeDelta
    }


    public getDateIndex=()=>{
        return  this.dateIndex
    }
    private address ={};
    private isActive=false;
    setAddress(address:{}){
        this.address=address
    }
    setIsActive(isActive:boolean){
         this.isActive=isActive
    }
    getTag() {
        return this.tag;
    }

    getCellNumber() {
        return this.cellNumber;
    }

    getContact() {
        return this.contact;
    }

    getAddress() {
        return this.address;
    }

    getIsActive() {
        return this.isActive;
    }

    getIsNotify() {
        return this.isNotify;
    }
}
