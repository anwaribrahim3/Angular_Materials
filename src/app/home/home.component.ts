import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { timer } from 'rxjs';
import {  FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
/*import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';*/

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
 
  symbol: string;
  percentage: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Nested views', symbol: 'Done', percentage : 100 },
  { position: 2, name: 'Table component', symbol: 'Feedback', percentage: 70  },
  { position: 3, name: 'Dashboard tiles',  symbol: 'Feedback', percentage: 75  },
  { position: 4, name: 'Panel widget',  symbol: 'Done', percentage: 100 },
  { position: 5, name: 'Form',  symbol: 'In progress', percentage: 90},
  { position: 6, name: 'Custom CSS', symbol: 'ToDo', percentage: 50 },
  { position: 7, name: 'Add backend',symbol: 'Feedback', percentage: 60 },
  { position: 8, name: 'Layout with sidebar', symbol: 'Done', percentage: 100 },
  { position: 9, name: 'Jquery', symbol: 'On progress', percentage: 80},
  { position: 10, name: 'Angular Materials',  symbol: 'Done', percentage: 100},
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  hide=false;
  name: string;
  loading=false;
  dashboard=true;
  profile = false;
  table=false;
  selected;
  showradio=false;
Chart;
 /* doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';
  public pieColor: Color[] = [
    { backgroundColor: 'red' },
    { backgroundColor: 'green' },
    { backgroundColor: 'blue' }
  ]*/

  options: string[] = ['Angular', 'React', 'Vue', 'Javascript', 'Jquery', 'Phython'];

myControl = new FormControl();
filteredOptions : Observable<string[]>;


  displayedColumns: string[] = ['position', 'name', 'symbol','percentage'];
  dataSource = ELEMENT_DATA;


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  constructor(public dialog: MatDialog, private _bottomSheet: MatBottomSheet) { 
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

   /* let chart = new Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Monthly Expense"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 450, name: "Food" },
          { y: 120, name: "Insurance" },
          { y: 300, name: "Traveling" },
          { y: 800, name: "Housing" },
          { y: 150, name: "Education" },
          { y: 150, name: "Shopping" },
          { y: 250, name: "Others" }
        ]
      }]
    });

    chart.render();*/
  
  }

  private _filter(value:string) : string[]{
    const filterValue = value.toLowerCase();
    return this.options.filter(option=>
      option.toLowerCase().includes(filterValue)
      );
  }
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
  
 
  shownotifications(){
    this.hide = !this.hide;
  }

  openDialog() {

    this.loading = true;

    setTimeout(() => {
      
      //your task after delay.
      this.loading = false;
      const dialogRef = this.dialog.open(DialogContentExampleDialog);
      dialogRef.afterClosed().subscribe(result => {
      });
     
    }, 4000);
   
  }
  delay(arg0: number) {
    throw new Error("Method not implemented.");
  }
 
  showdashboard(){
    this.dashboard=true;
    this.profile = false;
    this.table = false;
  }

  showprofile(){
    this.profile = true;
    this.dashboard = false;
    this.table = false;
  }

  showtable(){
    this.table = true;
    this.dashboard = false;
    this.profile = false;
  }

  showradiobutton() {
    this.showradio = !this.showradio;
  }
  }


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog { }


@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  styleUrls: ['./home.component.scss']
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
  

