import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSignUpComponent } from './artist-sign-up.component';

describe('ArtistSignUpComponent', () => {
  let component: ArtistSignUpComponent;
  let fixture: ComponentFixture<ArtistSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
