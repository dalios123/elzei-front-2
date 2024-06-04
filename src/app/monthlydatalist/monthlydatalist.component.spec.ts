import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlydatalistComponent } from './monthlydatalist.component';

describe('MonthlydatalistComponent', () => {
  let component: MonthlydatalistComponent;
  let fixture: ComponentFixture<MonthlydatalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlydatalistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlydatalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
