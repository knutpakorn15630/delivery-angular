import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcomponentComponent } from './shopcomponent.component';

describe('ShopcomponentComponent', () => {
  let component: ShopcomponentComponent;
  let fixture: ComponentFixture<ShopcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
