import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-defer-syntax',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div class="accordion mb-4" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Defer syntax is now stable
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
              <ul>
                <li class="mb-2">
                  Defer lets you define a block to be lazyloaded when a condition is met
                </li>
                <li class="mb-2">
                  Defer cannot be reverted
                </li>
              </ul>            
          </div>
        </div>
      </div>
    </div>

    <button class="btn btn-info mb-4" (click)="handleClick()">Change State</button>
    @defer (when show) {
      <div class="alert alert-primary text-center" role="alert">
        Defer syntax is now stable!
      </div>
    }

    @if (!show) {
      <div class="alert alert-warning text-center mt-4" role="alert">
          Defer Cannot be Reverted!
      </div>
    }
  `
})
export class DeferSyntaxComponent {
  // Defer lets you define a block to be lazyloaded when a condition is met
  // Defer cannot be reverted

  show = true

  handleClick() {
    this.show = !this.show
  }
}
