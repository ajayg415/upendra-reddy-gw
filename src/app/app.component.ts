import { Component } from '@angular/core';
import { AppComponentService } from './app.component.service';
import { todoModel } from './app.todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testcoding';
  appComponentService: AppComponentService
  resultModel: todoModel[];
  constructor(appComponentService: AppComponentService) {
    this.appComponentService = appComponentService;
    this.getTods();
  }
  
  public getTods ()  {
    this.appComponentService.getTodos().subscribe((response)=> {
      this.resultModel = response;
      console.log(this.resultModel);
    })
  }

}
