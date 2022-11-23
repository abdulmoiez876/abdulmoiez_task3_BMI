import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  height:number;
  weight:number;
  bmi:number;
  showResult:boolean = false;
  bmiStatus:string = '';
  message:string = '';
  showMessage:boolean = false;

  calculateBmi() {
    if(!this.notNullCheck()) {
      this.message = "Input fields cannot be empty!";
      this.showMessage = true;
      this.showResult = false;
    }
    else {
      this.bmi = +((this.weight / (this.height * this.height)) * 703).toFixed(2);
      this.showResult = true;
      this.showMessage = false;
      this.categorizeBmi();
    }
  }

  notNullCheck() {
    if(this.height == null || this.weight == null) {
      return false;
    }
    return true
  }

  categorizeBmi() {
    if(this.bmi < 18.5) {
      this.bmiStatus = 'You are underweight!'
    }
    else if(this.bmi >= 18.5 && this.bmi < 25) {
      this.bmiStatus = 'You are healthy!'
    }
    else if(this.bmi >= 25 && this.bmi < 30) {
      this.bmiStatus = 'You are overweight!'
    }
    else if(this.bmi >= 30) {
      this.bmiStatus = 'You are obese!'
    }
  }
}
