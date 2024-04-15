import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeFinanceComponent } from './ce-finance.component';

describe('CeFinanceComponent', () => {
  let component: CeFinanceComponent;
  let fixture: ComponentFixture<CeFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeFinanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CeFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
