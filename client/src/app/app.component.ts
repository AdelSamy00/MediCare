import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerComponent } from 'ngx-spinner';
import { HeaderComponent } from "./components/header/header.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSpinnerComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MediCare';
}
