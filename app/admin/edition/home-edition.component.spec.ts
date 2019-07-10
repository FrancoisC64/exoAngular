import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEditionComponent } from './home-edition.component';

describe('HomeEditionComponent', () => {
  let component: HomeEditionComponent;
  let fixture: ComponentFixture<HomeEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
