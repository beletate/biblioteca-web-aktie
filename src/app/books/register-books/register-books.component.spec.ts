import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBooksComponent } from './register-books.component';

describe('RegisterBooksComponent', () => {
  let component: RegisterBooksComponent;
  let fixture: ComponentFixture<RegisterBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
