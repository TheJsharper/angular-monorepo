import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-test-libs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-libs.component.html',
  styleUrl: './test-libs.component.scss',
})
export class TestLibsComponent {}
