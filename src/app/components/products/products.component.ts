import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
