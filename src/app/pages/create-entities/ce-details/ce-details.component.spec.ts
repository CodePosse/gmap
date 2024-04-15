import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeDetailsComponent } from './ce-details.component';

describe('CeDetailsComponent', () => {
  let component: CeDetailsComponent;
  let fixture: ComponentFixture<CeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
