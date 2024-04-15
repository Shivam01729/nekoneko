import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayList2Component } from './play-list2.component';

describe('PlayList2Component', () => {
  let component: PlayList2Component;
  let fixture: ComponentFixture<PlayList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayList2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
