import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

// Módulos de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router'; // Importa RouterModule para manejar el router-outlet en LayoutComponent

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
