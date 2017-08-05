import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodlistFooterComponent } from './todlist-footer.component';

describe('TodlistFooterComponent', () => {
  let component: TodlistFooterComponent;
  let fixture: ComponentFixture<TodlistFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodlistFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodlistFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
