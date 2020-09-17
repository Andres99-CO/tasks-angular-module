import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Tasks';

  employees = [];

  msg: string = '';


  model: any = {};
  model2: any = {};
  hideUpdate: boolean = true;

  ngOnInit() {
    fetch('http://www.json-generator.com/api/json/get/cfYREsSBiW?indent=2')
      .then((res) => {
        return res.json();
      }).then((users) => {
        for (const user of users) {
          this.employees.push(user);
        }
      })
      .catch((err) => {
      });
  }

  addEmployee(): void {
    // const {name, position, email} = this.model;
    this.employees.push(this.model);
    this.msg = "Task added successful!";
  }

  deleteEmployee(i: number): void {
    let answer = confirm('Are you sure to delete the task?');
    if (answer) {
      this.employees.splice(i, 1);
    }
    this.msg = "Task deleted successful!";
  }

  valueEmployee;
  editEmployee(i: number): void {
    this.model2.name = this.employees[i].name;
    this.model2.company = this.employees[i].company;
    this.model2.email = this.employees[i].email;
    this.valueEmployee = i;
    this.hideUpdate = false;
  }

  updateEmployee(): void {
    const i = this.valueEmployee;
    const { name, company, email } = this.model2;
    this.employees[i].name = name;
    this.employees[i].company = company;
    this.employees[i].email = email;
    this.model2 = {};
    this.msg = "Task updated successful!";
    this.hideUpdate = true;

  }


}
