import { ListarComponent } from '../components/articulos/listar/listar.component';
import { Categoria } from './Categoria';
import { Autor } from './autor';

export interface ArticuloDto {
    id:number;
    titulo:String;
    descripcion:String;
    categorias:Categoria[];
    autor:Autor;
}