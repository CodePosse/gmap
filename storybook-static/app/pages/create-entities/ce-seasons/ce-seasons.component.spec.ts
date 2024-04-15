import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CeSeasonsComponent} from './ce-seasons.component';

describe('CeSeasonsComponent', () => {
  let component: CeSeasonsComponent;
  let fixture: ComponentFixture<CeSeasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeSeasonsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CeSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
