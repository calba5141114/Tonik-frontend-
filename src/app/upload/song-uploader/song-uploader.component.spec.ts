import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongUploaderComponent } from './song-uploader.component';

describe('SongUploaderComponent', () => {
  let component: SongUploaderComponent;
  let fixture: ComponentFixture<SongUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
