import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterViewComponent } from './converter-view.component';

describe('ConverterViewComponent', () => {
  let component: ConverterViewComponent;
  let fixture: ComponentFixture<ConverterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
