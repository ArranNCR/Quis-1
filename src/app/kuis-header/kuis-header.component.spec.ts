import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuisHeaderComponent } from './kuis-header.component';

describe('KuisHeaderComponent', () => {
  let component: KuisHeaderComponent;
  let fixture: ComponentFixture<KuisHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuisHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuisHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
