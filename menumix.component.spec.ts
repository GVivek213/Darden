import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumixComponent } from './menumix.component';

describe('MenumixComponent', () => {
  let component: MenumixComponent;
  let fixture: ComponentFixture<MenumixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenumixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenumixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
