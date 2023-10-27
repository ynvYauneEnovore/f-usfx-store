import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class CreateProductoDto {


  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo nombre no debe ser mayor a 100 caracteres' })
  readonly nombre: string;

  readonly precio: number;

 
  readonly descripcion: string;


  readonly estado: boolean;



  readonly min: number;


  readonly max: number;


  readonly stock: number;


  readonly fk_categoria_producto_id: number;
}



{
  "nombre": "coca-cola",
  "descripcion": "Bebida carbonatada muy dulce",
  "idCategoriaProductos": 1,
  "precio": 10,
  "estado": true,
  "min": 1,
  "max": 1000,
  "stock": 10000
}