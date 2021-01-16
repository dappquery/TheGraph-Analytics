import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutHeaderComponent } from './logout-header.component';

describe('LogoutHeaderComponent', () => {
  let component: LogoutHeaderComponent;
  let fixture: ComponentFixture<LogoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
