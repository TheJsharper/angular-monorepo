import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimengDataViewComponent } from './primeng-data-view.component';

describe('PrimengDataViewComponent', () => {
  let component: PrimengDataViewComponent;
  let fixture: ComponentFixture<PrimengDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengDataViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimengDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
