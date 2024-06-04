import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CradetailsComponent } from './cradetails.component';

describe('CradetailsComponent', () => {
  let component: CradetailsComponent;
  let fixture: ComponentFixture<CradetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CradetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CradetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
