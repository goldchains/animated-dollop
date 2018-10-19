
import {Component, OnInit} from '@angular/core';
import {StatsCard} from "../components/statsCard/statsCard";


@Component({
  templateUrl: './dashboard.component.html',
  selector:'dashboard',
  styleUrls:['./dashboard.scss']
})
export class DashboardComponent implements OnInit{


  public chartHeight=35;

  public ChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    mainAspectRatio:false
  };

  //Timeline Related
  public completeListener(item){
    console.log(item);
    return true;
  }
  public timelineData:Array<Object> =[
    {
      title:"Step 1",
      icon:'<i class="fa fa-home"></i>',
      content:"Hello World",
      complete:true
    },
    {
      title:"Step 2",
      icon:'<i class="fa fa-pencil"></i>',
      content:"Welcome World",
      complete:false
    }
  ];

  ngOnInit(): void {
    let self=this;
    setTimeout(function(){
      self.timelineData.push({
        title:"Step 3",
        icon:'<i class="fa fa-remove"></i>',
        content:"Bye World",
        complete:false
      });
    },5000);
  }

  //Card

  public card1:StatsCard={color:"#1ebfae",icon:"fa-cogs",label:"Test 1",data:50};
  public card2:StatsCard={color:"#30a5ff",icon:"fa-cogs",label:"Test 2",data:80};
 
  

  // lineChart
  public lineChartData:Array<any> = [
    {data: [72, 64, 68, 55, 72], label: 'BCO'},
    {data: [65, 69, 67, 64, 56], label: 'IAP'}
  ];
  public lineChartLabels:Array<any> = ['2014', '2015', '2016', '2017', '2018'];
  public lineChartType:string = 'line';


  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  
  public doPredict(values){
  
  }


 
}


