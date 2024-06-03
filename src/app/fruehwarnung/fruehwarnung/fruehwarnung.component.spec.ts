import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruehwarnungComponent } from './fruehwarnung.component';

describe('FruehwarnungComponent', () => {
  let component: FruehwarnungComponent;
  let fixture: ComponentFixture<FruehwarnungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruehwarnungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruehwarnungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
