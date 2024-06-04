import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySearchComponentComponent } from './country-search-component.component';

describe('CountrySearchComponentComponent', () => {
  let component: CountrySearchComponentComponent;
  let fixture: ComponentFixture<CountrySearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountrySearchComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountrySearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
