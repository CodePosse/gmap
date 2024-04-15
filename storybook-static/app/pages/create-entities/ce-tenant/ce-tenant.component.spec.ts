import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeTenantComponent } from './ce-tenant.component';

describe('CeTenantComponent', () => {
  let component: CeTenantComponent;
  let fixture: ComponentFixture<CeTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeTenantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CeTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
