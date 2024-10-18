import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmDialogComponent } from './frm-dialog.component';

describe('FrmDialogComponent', () => {
  let component: FrmDialogComponent;
  let fixture: ComponentFixture<FrmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
