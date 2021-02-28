import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngularApp';
  checkoutForm = this.formBuilder.group({
    search: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) { }

  onSubmit(): void {
    // Get recepies using data service
    this.dataService.getRecepies(this.checkoutForm.value.search);
  }
}
