import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverycomponentComponent } from './deliverycomponent.component';

describe('DeliverycomponentComponent', () => {
  let component: DeliverycomponentComponent;
  let fixture: ComponentFixture<DeliverycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverycomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
