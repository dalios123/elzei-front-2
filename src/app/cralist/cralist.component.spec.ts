import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CralistComponent } from './cralist.component';

describe('CralistComponent', () => {
  let component: CralistComponent;
  let fixture: ComponentFixture<CralistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CralistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CralistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
