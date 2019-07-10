import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeactusComponent } from './listeactus.component';

describe('ListeactusComponent', () => {
  let component: ListeactusComponent;
  let fixture: ComponentFixture<ListeactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
