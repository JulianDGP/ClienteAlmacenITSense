import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarDefectuosoComponent } from './marcar-defectuoso.component';

describe('MarcarDefectuosoComponent', () => {
  let component: MarcarDefectuosoComponent;
  let fixture: ComponentFixture<MarcarDefectuosoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcarDefectuosoComponent]
    });
    fixture = TestBed.createComponent(MarcarDefectuosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
