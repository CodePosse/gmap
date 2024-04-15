import {Routes} from '@angular/router';
import {BulkCreateComponent} from './pages/bulk-create/bulk-create.component';
import {AlphaComponent} from './pages/alpha/alpha.component';
import {TalentComponent} from './pages/talent/talent.component';
import {CompanyComponent} from './pages/company/company.component';
import {AdvanceSearchComponent} from './pages/advance-search/advance-search.component';
import {HomeComponent} from './pages/home/home.component';
import {SeriesComponent} from './pages/series/series.component';
import {FeaturesComponent} from './pages/features/features.component';

export const routes: Routes = [
  {
    path: 'create-entities',
    title: 'Create Entities',
    loadChildren: () => import('./pages/create-entities/create-entities.routes').then(m => m.CREATE_ENTITIES_ROUTES)
  },
  {
    path: 'bulk-create',
    title: 'Bulk Create',
    component: BulkCreateComponent,
  },
  {
    path: 'features',
    component: FeaturesComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'bulk-create',
    component: BulkCreateComponent,
  },
  {
    path: 'advanced-search',
    title: 'Advanced Search',
    component: AdvanceSearchComponent,
  },


  {
    path: 'company',
    component: CompanyComponent,
  },
  {
    path: 'talent',
    component: TalentComponent,
  },
  {
    path: 'alpha',
    component: AlphaComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
