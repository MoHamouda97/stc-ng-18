import { Component } from '@angular/core';
import { BtnContentComponent } from './btn-content/btn-content.component';

@Component({
  selector: 'app-content-fallback',
  standalone: true,
  imports: [
    BtnContentComponent
  ],
  template: `
    <div class="accordion mb-4" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            ng-content Fallback
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            <ul>
              <li class="mb-2">
                ng-content allows you to project your own content              
              </li>
              <li class="mb-2">
                This feature had one major flaw. You couldn't give it a default content.
              </li>
              <li class="mb-2">
                In verssion 18, this is no longer the case.
              </li>
              <li class="mb-2">
                You can have content inside the tag that will be displayed if no content is provided by the developer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <app-btn-content></app-btn-content>
    
    <app-btn-content>
      <span class="content">From Content</span>
    </app-btn-content>    
  `
})
export class ContentFallbackComponent {
  // ng-content allows you to project your own content
  // This feature had one major flaw. You couldn't give it a default content.
  // In verssion 18, this is no longer the case.
  // You can have content inside the tag that will be displayed if no content is provided by the developer.
}
