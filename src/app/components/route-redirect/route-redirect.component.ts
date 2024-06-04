import { Component } from '@angular/core';

@Component({
  selector: 'app-route-redirect',
  standalone: true,
  imports: [],
  template: `
    <div class="accordion mb-4" id="accordionPanelsStayOpenExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Routing: redirect as a function
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
              <ul>
                <li class="mb-2">
                  Before Angular 18, when you wanted to redirect to another path, you used the redirectTo property.
                  This property took as its value only a character string
                </li>
                <li class="mb-2">
                  Now It is possible to pass a function with this property,
                  this function takes ActivatedRouteSnapshot as a parameter.                  
                </li>
                <li class="mb-2">
                  Also this function is called in an injection context, making it possible to inject services.                
                </li>
              </ul>            
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-primary text-center" role="alert">
      Hello From Route Redirect Feature!
    </div>
  `
})
export class RouteRedirectComponent {
  // Before Angular 18, when you wanted to redirect to another path, you used the redirectTo property.
  // This property took as its value only a character string
  // Now It is now possible to pass a function with this property
  // This function takes ActivatedRouteSnapshot as a parameter,
  // and also this function is called in an injection context, making it possible to inject services.
}
