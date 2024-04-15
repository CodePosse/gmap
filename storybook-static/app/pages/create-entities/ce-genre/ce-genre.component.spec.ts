import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeGenreComponent } from './ce-genre.component';

describe('CeGenreComponent', () => {
  let component: CeGenreComponent;
  let fixture: ComponentFixture<CeGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CeGenreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CeGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
