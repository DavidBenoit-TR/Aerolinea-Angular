import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarvueloComponent } from './editarvuelo.component';

describe('EditarvueloComponent', () => {
  let component: EditarvueloComponent;
  let fixture: ComponentFixture<EditarvueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarvueloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarvueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
