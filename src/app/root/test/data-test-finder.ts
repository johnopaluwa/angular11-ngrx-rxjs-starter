import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export function getElement<T>(fixture: ComponentFixture<any>, tag: string): T {
  return getDebugElement(fixture, tag).nativeElement as T;
}

export function getComponent<T>(
  fixture: ComponentFixture<any>,
  tag: string
): T {
  return getDebugElement(fixture, tag).componentInstance as T;
}

export function getDebugElement(fixture: ComponentFixture<any>, tag: string) {
  return fixture.debugElement.query(By.css(asTestDataTag(tag)));
}

export function asTestDataTag(value: string): string {
  return `[data-test='${value}']`;
}
