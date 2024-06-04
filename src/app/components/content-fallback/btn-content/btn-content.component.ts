import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-content',
  standalone: true,
  imports: [],
  template: `
    <div class="alert alert-primary text-center" role="alert">
      <ng-content select=".content">
        Default Content
      </ng-content>
    </div> 
  `
})
export class BtnContentComponent {

}
