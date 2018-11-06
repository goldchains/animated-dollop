
import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import {StatsCard} from "../components/statsCard/statsCard";
import { PredictorService } from '../services/predictor/predictor.service';
import { Observable } from 'rxjs';


@Component({
  templateUrl: './dashboard.component.html',
  selector:'dashboard',
  styleUrls:['./dashboard.scss']
})
export class DashboardComponent implements OnInit{

  predictorForm: FormGroup;
  private prediction : Observable<Object>;

  constructor(private predictorService: PredictorService, private fb: FormBuilder) { 
    this.predictorForm = this.fb.group({
      test1: ['', Validators.required],
      test2: '',
      course: ['', Validators.required]
    })
  }

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
  
  public doPredict(course, test1, test2){
    if(test1 == ''){

    }else if(test1 != '' && test2 == ''){
      this.prediction = this.predictorService
      .getPredictionTest1(course, test1)
      // .subscribe((data) => {
      //   console.log("Data requested...")
      //   console.log(data)
      // })
    } else if(test1 != '' && test2 != ''){
      this.prediction = this.predictorService
      .getPredictionTest2(course, test1, test2)
      // .subscribe((res: any []) => {
      //   console.log("Data requested...")
      //   console.log(res)
      //   this.prediction = res
      // })
    }
  }


 
}


