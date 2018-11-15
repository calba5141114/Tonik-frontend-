import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistLogInComponent } from './artist-log-in.component';

describe('ArtistLogInComponent', () => {
  let component: ArtistLogInComponent;
  let fixture: ComponentFixture<ArtistLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
