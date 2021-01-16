import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThegraphComponent } from './thegraph.component';

describe('ThegraphComponent', () => {
  let component: ThegraphComponent;
  let fixture: ComponentFixture<ThegraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThegraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
