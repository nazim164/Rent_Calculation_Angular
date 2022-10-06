import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rent-cal';
 
 
  myFunction() { 
    var x = (<HTMLInputElement>document.getElementById("name")).value;
    document.getElementById('demo').innerHTML = x
    var r= (<HTMLInputElement>document.getElementById("rent")).value;
    document.getElementById('demo1').innerHTML = r
    var ag= (<HTMLInputElement>document.getElementById("agree")).value;
    document.getElementById('demo2').innerHTML = ag
    var day= (<HTMLInputElement>document.getElementById("day")).value;
    document.getElementById('demo3').innerHTML = day
    var s_date= (<HTMLInputElement>document.getElementById("start_date")).value;
    document.getElementById('demo4').innerHTML = s_date
    var e_date= (<HTMLInputElement>document.getElementById("end_date")).value;
    document.getElementById('demo5').innerHTML = e_date
  
    var Daily_Rate = parseInt(r) / parseInt(day);
    var num=Daily_Rate.toFixed(2)
    document.getElementById('demo6').innerHTML = num.toString()
    var Year_Total = parseInt(r) * 12;
    document.getElementById('demo7').innerHTML = Year_Total.toString()
    // document.getElementById('demo6').innerHTML = s;


   }
}
