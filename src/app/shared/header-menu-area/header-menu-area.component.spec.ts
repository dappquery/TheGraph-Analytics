import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuAreaComponent } from './header-menu-area.component';

describe('HeaderMenuAreaComponent', () => {
  let component: HeaderMenuAreaComponent;
  let fixture: ComponentFixture<HeaderMenuAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenuAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
