import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfdetailsComponent } from './pdfdetails.component';

describe('PdfdetailsComponent', () => {
  let component: PdfdetailsComponent;
  let fixture: ComponentFixture<PdfdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdfdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
