import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  formProducto!: FormGroup

  constructor(private fb: FormBuilder, private productosService: ProductosService) {
    this.formProducto = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(1)]],
      imagen: ['', Validators.required]
    })
  }

  get controls() {
    return this.formProducto.controls
  }

  archivoSeleccionado(event: any) {
    const imagen = event.target.files[0];
    this.formProducto.patchValue({
      imagen: imagen
    })
  }

  guardarProducto() {
    if (this.formProducto.invalid) {
      return
    }

    this.productosService.guardarProducto(this.formProducto.value)
      .subscribe({
        next: (value: any) => {
          if (value.estado == 201) {
            alert('Producto creado exitosamente')
          } else {
            alert('Error al guardar producto, intentelo más tarde')
          }
        }, error: () => {
          alert('Error en el servidor, intentelo más tarde')
        }
      })



  }
}
