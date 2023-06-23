import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUsuarioComponent } from './board-usuario.component';

describe('BoardUsuarioComponent', () => {
  let component: BoardUsuarioComponent;
  let fixture: ComponentFixture<BoardUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
