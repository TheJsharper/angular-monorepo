import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { appRoutes } from './app.routes';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MenubarModule, BadgeModule, NgClass, AvatarModule, NgIf, NgFor, InputTextModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;
  constructor(private router: Router) { }
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/mapp-table']);
        }
      },
      {
        label: 'Features',
        icon: 'pi pi-star',
        items: [
          {
            label: 'Org Chart',
            icon: 'pi pi-bolt',
            shortcut: '⌘+C'         ,
            command: () => {
              this.router.navigate(['/mapp-org-chart']);
            }
          },
          {
            label: 'Data View',
            icon: 'pi pi-server',
            shortcut: '⌘+D'
            ,
            command: () => {
              this.router.navigate(['/mapp-data-view']);
            }
            
            },
            {
              label: 'Timeline',
              icon: 'pi pi-pencil',
              shortcut: '⌘+T'
              ,
              command: () => {
                this.router.navigate(['/mapp-timeline']);
              }
            
          },
          {
            separator: true
          },
          {
            label: 'Pick List',
            icon: 'pi pi-pencil',
            shortcut: '⌘+P'
            ,
            command: () => {
              this.router.navigate(['/mapp-pick-list']);
            }
          
        },
        {
          label: 'Table',
          icon: 'pi pi-pencil',
          shortcut: '⌘+T'
          ,
          command: () => {
            this.router.navigate(['/mapp-table']);
          }
        
      },
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: '3'
      }
    ];

  }
}
