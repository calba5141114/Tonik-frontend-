import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSignUpComponent } from './choose-sign-up.component';

describe('ChooseSignUpComponent', () => {
  let component: ChooseSignUpComponent;
  let fixture: ComponentFixture<ChooseSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
