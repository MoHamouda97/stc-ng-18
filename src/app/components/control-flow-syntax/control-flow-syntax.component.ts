import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-syntax',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div class="accordion mb-4" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            New Control flow syntax is now stable
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
              <ul>
                <li class="mb-2">
                  New Control flow syntax is now stable!
                </li>
              </ul>             
          </div>
        </div>
      </div>
    </div>

    <button class="btn btn-info mb-4" (click)="show = !show">Change State</button>

    @if(show) {
      <div class="alert alert-primary text-center" role="alert">
        New Control flow syntax is now stable!
      </div>
    }
  `
})
export class ControlFlowSyntaxComponent {
  show: boolean = false
}
