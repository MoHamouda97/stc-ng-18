import { Routes } from '@angular/router';
import { ZonelessComponent } from './components/zoneless/zoneless.component';
import { RouteRedirectComponent } from './components/route-redirect/route-redirect.component';
import { ExampleService } from './services/example.service';
import { inject } from '@angular/core';
import { ControlFlowSyntaxComponent } from './components/control-flow-syntax/control-flow-syntax.component';
import { DeferSyntaxComponent } from './components/defer-syntax/defer-syntax.component';
import { ContentFallbackComponent } from './components/content-fallback/content-fallback.component';
import { FormEventComponent } from './components/form-event/form-event.component';
import { OtherFeaturesComponent } from './components/other-features/other-features.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: () => {
            const service: ExampleService = inject(ExampleService)

            service.consoleMessage('Hello From Route redirect');

            return '/redirect'
        },
        pathMatch: 'full'  
    },
    {
        path: 'redirect',
        component: RouteRedirectComponent
    },
    {
        path: 'control-flow',
        component: ControlFlowSyntaxComponent
    },
    {
        path: 'defer-syntax',
        component: DeferSyntaxComponent
    },
    {
        path: 'content-fallback',
        component: ContentFallbackComponent
    },
    {
        path: 'zoneless',
        component: ZonelessComponent
    },
    {
        path: 'form-event',
        component: FormEventComponent
    },
    {
        path: 'other-features',
        component: OtherFeaturesComponent
    },
];
