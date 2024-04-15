import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Art3Component } from './art3.component';

describe('Art3Component', () => {
  let component: Art3Component;
  let fixture: ComponentFixture<Art3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Art3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Art3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
