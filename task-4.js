//4.write a class to calculate uber price.
class Uber {
    constructor(BaseFare=10,CostPerMile=2,CostPerMinute=1,BookingFee=6,time=1,mile=1){
    this.BaseFare=BaseFare;
    this.CostPerMile=CostPerMile
    this.CostPerMinute=CostPerMinute;
    this.BookingFee=BookingFee;
    this.time=time;
    this.mile=mile;
    }
    totalPrice(time=this.time , mile=this.mile){
        console.log(`the total price is RS.${(this.BaseFare)+(this.BookingFee)+
            ((this.CostPerMinute)*(time))+((this.CostPerMile)*(mile))} only`);
    }
}
let car = new Uber();
car.totalPrice(20,100); 
car.totalPrice(10,20);