import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalariesdetailsComponent } from './salariesdetails.component';

describe('SalariesdetailsComponent', () => {
  let component: SalariesdetailsComponent;
  let fixture: ComponentFixture<SalariesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalariesdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalariesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
