import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {

  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
  });

  it('should increment the counter of one', () => {

    // Arrange
    const initialValue = component.counter;

    // Act
    component.increment();
    fixture.detectChanges();

    const newValue = component.counter;

    // Assert
    expect(newValue).toBeGreaterThan(initialValue);
  })

  it('should display the current number of the counter', () => {
    expect(htmlElement.textContent).toEqual('Number: 1');
  })

});