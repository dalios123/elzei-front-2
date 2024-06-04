import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfsalariesComponent } from './pdfsalaries.component';

describe('PdfsalariesComponent', () => {
  let component: PdfsalariesComponent;
  let fixture: ComponentFixture<PdfsalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdfsalariesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfsalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
