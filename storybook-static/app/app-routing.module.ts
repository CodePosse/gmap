import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { HomeComponent } from './pages/home/home.component';
import { BulkCreateComponent } from './pages/bulk-create/bulk-create.component';
import { AdvanceSearchComponent } from './pages/advance-search/advance-search.component';
import { SeriesComponent } from './pages/series/series.component';
import { CompanyComponent } from './pages/company/company.component';
import { AlphaComponent } from './pages/alpha/alpha.component';
import { TalentComponent } from './pages/talent/talent.component';
import { FeaturesComponent } from './pages/features/features.component';




const routes: Routes = [
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
    path: 'login-form',
    component: LoginFormComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
  },
  {
    path: 'bulk-create',
    component: BulkCreateComponent
    },
  {
    path: 'advanced-search',
    component: AdvanceSearchComponent,
  },

  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
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
