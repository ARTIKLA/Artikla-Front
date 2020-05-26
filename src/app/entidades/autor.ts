export interface Autor{
    id:number;
    nombre:string;
    correo:string;
    clave:string;
    descripcion:string;
    estado:string;
    rol:string;
    intereses:string;
    articulos:string;
    titulo:string;
    fechaPublicacion:Date;
    categorias:string;
}

export interface Editor {
    id:number;
    nombre:string;
    correo:string;
    clave:string;
    descripcion:string;
    estado:string;
    rol:string;
    nombreRevista : string,
    descripcionRevista : string
}