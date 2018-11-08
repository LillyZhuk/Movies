import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailComponent } from './movie-detail.component';

describe('PageDetailComponent', () => {
  let component: PageDetailComponent;
  let fixture: ComponentFixture<PageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
