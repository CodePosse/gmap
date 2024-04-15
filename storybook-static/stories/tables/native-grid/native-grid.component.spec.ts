import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NativeGridComponent} from './native-grid.component';

describe('NativeGridComponent', () => {
  let component: NativeGridComponent;
  let fixture: ComponentFixture<NativeGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NativeGridComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NativeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
