class movie {
    constructor(public age:number, public disc: boolean){
    }
    movieee(age:number):number{
        let price: number = 0;
        if(age === 12){
            price = 60;
        }else if(age === 12-59){
            price = 120;
        }else if(age === 60){
            price = 100;
        }
        return price;
    }
    ticket():void{
        let price2 = 0;
        let price = this.movieee(this.age)
        console.log(price);
        if(this.disc === true){
            price2 = price*0.10;
        }
        console.log("คุณอายุ %s ตั๋วราคาปกติ %d บาท",this.age, price);
        console.log(`ได้รับส่วนลด 10% ราคาสุทธิ ${price-price2} บาท`)
    }
}
let ticket1 = new movie(12,true);
ticket1.ticket();