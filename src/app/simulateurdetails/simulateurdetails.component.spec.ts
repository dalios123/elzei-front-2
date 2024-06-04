import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateurdetailsComponent } from './simulateurdetails.component';

describe('SimulateurdetailsComponent', () => {
  let component: SimulateurdetailsComponent;
  let fixture: ComponentFixture<SimulateurdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimulateurdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimulateurdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
