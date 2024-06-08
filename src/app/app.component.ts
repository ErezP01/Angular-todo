import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CounterComponent } from './counter/counter.component';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, NavbarComponent, CounterComponent, FormsModule, TodoComponent]
})
export class AppComponent {
  title = 'angular-app';
}
