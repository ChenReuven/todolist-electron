import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodlistMainComponent } from './todlist-main.component';

describe('TodlistMainComponent', () => {
  let component: TodlistMainComponent;
  let fixture: ComponentFixture<TodlistMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodlistMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodlistMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
