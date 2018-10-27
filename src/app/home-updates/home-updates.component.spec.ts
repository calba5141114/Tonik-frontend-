import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUpdatesComponent } from './home-updates.component';

describe('HomeUpdatesComponent', () => {
  let component: HomeUpdatesComponent;
  let fixture: ComponentFixture<HomeUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
