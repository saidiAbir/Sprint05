import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBijouxComponent } from './add-bijoux.component';

describe('AddBijouxComponent', () => {
  let component: AddBijouxComponent;
  let fixture: ComponentFixture<AddBijouxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBijouxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBijouxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
