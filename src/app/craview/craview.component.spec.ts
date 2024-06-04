import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraviewComponent } from './craview.component';

describe('CraviewComponent', () => {
  let component: CraviewComponent;
  let fixture: ComponentFixture<CraviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CraviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CraviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
