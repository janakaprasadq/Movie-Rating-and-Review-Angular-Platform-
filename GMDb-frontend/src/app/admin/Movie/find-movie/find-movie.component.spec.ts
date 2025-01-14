import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMovieComponent } from './find-movie.component';

describe('FindMovieComponent', () => {
  let component: FindMovieComponent;
  let fixture: ComponentFixture<FindMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
