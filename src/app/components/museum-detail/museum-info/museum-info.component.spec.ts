import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumInfoComponent } from './museum-info.component';

describe('MuseumInfoComponent', () => {
  let component: MuseumInfoComponent;
  let fixture: ComponentFixture<MuseumInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
