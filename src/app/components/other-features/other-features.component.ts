import { Component } from '@angular/core';

@Component({
  selector: 'app-other-features',
  standalone: true,
  imports: [],
  template: `
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Server Side Rendering: two new features
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
            Angular 18 introduces two important and much-awaited new server-side rendering features:
            <ul class="mt-2">
              <li>event replay</li>
              <li>internationalization</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Event replay
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
          <div class="accordion-body">
            <ul>
              <li class="mb-2">
                When we create a server-side rendering application, the application is sent back to the browser in html format, displaying a static page that then becomes dynamic through hydration. During this hydration phase, no response to an interaction can be sent, so user interaction is lost until hydration is complete.            
              </li>
              <li class="mb-2">
                Angular is able to record user interactions during this hydration phase and replay them once the application is fully loaded and interactive.
              </li>
              <li class="mb-2">
                To unlock this feature, still in developer preview, you can use the ServerSideFeature withReplayEvents function.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            New alias: ng dev
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
          <div class="accordion-body">
              <ul>
                <li class="mb-2">
                  From now on, when the ng dev command is run, the application will be launched in development mode.
                </li>
                <li class="mb-2">
                  The ng dev command is an alias for the ng serve command.
                </li>
              </ul>            
          </div>
        </div>
      </div>
    </div>
  `
})
export class OtherFeaturesComponent {

}
