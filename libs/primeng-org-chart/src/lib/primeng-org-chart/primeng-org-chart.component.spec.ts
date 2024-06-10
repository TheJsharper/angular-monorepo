import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimengOrgChartComponent } from './primeng-org-chart.component';

describe('PrimengOrgChartComponent', () => {
  let component: PrimengOrgChartComponent;
  let fixture: ComponentFixture<PrimengOrgChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengOrgChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimengOrgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
