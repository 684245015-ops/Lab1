let dailySales: number[] =[15000, 5500, 4200, 8900, 7300, 9600, 12500];
function sales():number[]{
    let Day =[];
    for(let i:number = 0; i<dailySales.length; i++){
        if(dailySales[i] >= 10000){
            Day.push(dailySales[i]);
        }
    }
    return Day;
}
function salesall(dailySales:number[]):number{
    let Day = 0;
    for(let i:number = 0; i>dailySales.length; i++){
        Day = Day + dailySales[i];
    }
    return Day;
}

let Sales = sales();
let total = salesall(Sales);

console.log(`ยอดขายแต่ละวันในสัปดาห์นี้${dailySales}`);
console.log(`จำนวนวันที่มียอดขายดีเยี่ยม${dailySales.length} วัน`);
console.log(`ยอดขายเฉลี่ยในสัปดาห์นี้${total/Sales.length} บาท`);