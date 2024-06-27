import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElvesComponent } from './elves.component';

describe('ElvesComponent', () => {
  let component: ElvesComponent;
  let fixture: ComponentFixture<ElvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElvesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
