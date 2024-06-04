import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlydataviewComponent } from './monthlydataview.component';

describe('MonthlydataviewComponent', () => {
  let component: MonthlydataviewComponent;
  let fixture: ComponentFixture<MonthlydataviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlydataviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlydataviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
