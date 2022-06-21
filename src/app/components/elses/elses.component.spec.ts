import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElsesComponent } from './elses.component';

describe('ElsesComponent', () => {
  let component: ElsesComponent;
  let fixture: ComponentFixture<ElsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
