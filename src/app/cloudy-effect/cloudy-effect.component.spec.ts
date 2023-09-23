import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudyEffectComponent } from './cloudy-effect.component';

describe('CloudyEffectComponent', () => {
  let component: CloudyEffectComponent;
  let fixture: ComponentFixture<CloudyEffectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudyEffectComponent]
    });
    fixture = TestBed.createComponent(CloudyEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
