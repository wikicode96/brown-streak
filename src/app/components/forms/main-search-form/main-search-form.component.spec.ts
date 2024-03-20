import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchFormComponent } from './main-search-form.component';

describe('MainSearchComponent', () => {
  let component: MainSearchFormComponent;
  let fixture: ComponentFixture<MainSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSearchFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
