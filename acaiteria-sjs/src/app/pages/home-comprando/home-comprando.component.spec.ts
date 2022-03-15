import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComprandoComponent } from './home-comprando.component';

describe('HomeComprandoComponent', () => {
  let component: HomeComprandoComponent;
  let fixture: ComponentFixture<HomeComprandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComprandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComprandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
