import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllItemsAdminComponent } from './all-items-admin.component';

describe('AllItemsAdminComponent', () => {
  let component: AllItemsAdminComponent;
  let fixture: ComponentFixture<AllItemsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllItemsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllItemsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
