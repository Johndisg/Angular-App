export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: string;
    imagen: any;
}

export interface ResponseProductos {
    estado: number;
    productos: Producto[]
}