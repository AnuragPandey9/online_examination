import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowComponentsComponent } from './show-components.component';

describe('ShowComponentsComponent', () => {
  let component: ShowComponentsComponent;
  let fixture: ComponentFixture<ShowComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
