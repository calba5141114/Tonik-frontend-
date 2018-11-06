import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistUserComponent } from './artist-user.component';

describe('ArtistUserComponent', () => {
  let component: ArtistUserComponent;
  let fixture: ComponentFixture<ArtistUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
