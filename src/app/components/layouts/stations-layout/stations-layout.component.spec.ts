import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsLayoutComponent } from './stations-layout.component';

describe('StationsLayoutComponent', () => {
  let component: StationsLayoutComponent;
  let fixture: ComponentFixture<StationsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationsLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StationsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
