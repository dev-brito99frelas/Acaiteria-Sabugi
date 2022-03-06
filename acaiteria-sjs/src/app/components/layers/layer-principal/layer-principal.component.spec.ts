import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerPrincipalComponent } from './layer-principal.component';

describe('LayerPrincipalComponent', () => {
  let component: LayerPrincipalComponent;
  let fixture: ComponentFixture<LayerPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayerPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
