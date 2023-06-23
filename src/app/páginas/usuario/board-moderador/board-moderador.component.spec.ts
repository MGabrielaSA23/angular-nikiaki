import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardModeradorComponent } from './board-moderador.component';

describe('BoardModeradorComponent', () => {
  let component: BoardModeradorComponent;
  let fixture: ComponentFixture<BoardModeradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardModeradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardModeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
