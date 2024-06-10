import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from 'primeng/api';
import { OrganizationChartModule } from 'primeng/organizationchart';


@Component({
  selector: 'lib-primeng-org-chart',
  standalone: true,
  imports: [CommonModule, OrganizationChartModule],
  templateUrl: './primeng-org-chart.component.html',
  styleUrl: './primeng-org-chart.component.scss',
})
export class PrimengOrgChartComponent {
  data: TreeNode[] = [
    {
        label: 'Argentina',
        expanded: true,
        data: 'ar',
        children: [
            {
                label: 'Argentina',
                expanded: true,
                data: 'ar',
                children: [
                    {
                        label: 'Argentina',
                        data: 'ar'
                    },
                    {
                        label: 'Croatia',
                        data: 'hr'
                    }
                ]
            },
            {
                label: 'France',
                expanded: true,
                data: 'fr',
                children: [
                    {
                        label: 'France',
                        data: 'fr'
                    },
                    {
                        label: 'Morocco',
                        data: 'ma'
                    }
                ]
            }
        ]
    }
];
}
