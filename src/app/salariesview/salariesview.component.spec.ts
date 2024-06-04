import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalariesviewComponent } from './salariesview.component';

describe('SalariesviewComponent', () => {
  let component: SalariesviewComponent;
  let fixture: ComponentFixture<SalariesviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalariesviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalariesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
