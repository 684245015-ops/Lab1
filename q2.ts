let sumaly: number =0;
let staus: boolean = true;
let d:number = 0;
while(staus){
    sumaly += 1;
    d = d +1;
    console.log("%d :ยอดเงิน = %d บาท", d,sumaly);
    if(d==30){
        staus = false;
        console.log("ขอแสดงความยินดี %d : เดือนนี้คุณออมเงินได้ = %d บาท", d, sumaly);
    }
}