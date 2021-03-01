import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from './data.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  recipes = null;
  title = 'FirstAngularApp';
  checkoutForm = this.formBuilder.group({
    search: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private ngxService: NgxUiLoaderService,
  ) { }

  onSubmit(): void {
    this.ngxService.start();
    // Get recepies using data service
    this.dataService
      .getRecepies(this.checkoutForm.value.search)
      .subscribe((data: any) => {
        this.recipes = data.hits;
        this.ngxService.stop();
      });
    this.ngxService.stop();
  }
}
