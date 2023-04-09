import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterShellComponent } from './counter-shell.component';

describe('CounterShellComponent', () => {
  let component: CounterShellComponent;
  let fixture: ComponentFixture<CounterShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
