import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-zoneless',
  standalone: true,
  imports: [],
  template: `
    <div class="accordion mb-4" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Zone js
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            <ul>
              <li class="mb-2">
                Previously the detection change was handled entirely by Zone Js. Now, the detection change is triggered directly by the framework itself through (ChangeDetectionScheduler)
              </li>
              <li class="mb-2">
                This new scheduler is no longer based on Zone Js and is used by default with Angular version 18.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <button class="btn btn-info mb-4" (click)="handleClick()">Go Zoneless</button>
    <div class="alert alert-primary text-center" role="alert">
      Hello from {{ name() }}!
    </div> 
  `
})
export class ZonelessComponent {
  // Previously the detection change was handled entirely by Zone Js
  // Now, the detection change is triggered directly by the framework itself through (ChangeDetectionScheduler)
  // This new scheduler is no longer based on Zone Js and is used by default with Angular version 18.

  name = signal<string>('Angular');

  handleClick() {
    this.name.set('Zoneless Angular');
  }
}
