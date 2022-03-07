import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRibornComponent } from './card-riborn.component';

describe('CardRibornComponent', () => {
  let component: CardRibornComponent;
  let fixture: ComponentFixture<CardRibornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRibornComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRibornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
