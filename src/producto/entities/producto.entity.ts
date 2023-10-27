import { CatProductoEntity } from "src/catproducto/entities/catproducto.entity";
import { VentaDetalleEntity } from "src/ventadetalle/entities/ventadetalle.entity";
import { Column, OneToMany, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('producto')
export class ProductoEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ name: 'fk_categoria_producto_id'}) 
    idCategoriaProductos: number;

  @Column() nombre: string;
  
  @Column() precio: number;

  @Column() descripcion: string;

  @Column() estado: boolean;

  @Column() imagen: string;

  @Column() catproducto: number;


  @Column() min: number;

  @Column() max: number;

  @Column() stock: number;

  @CreateDateColumn({ name: 'fecha_creacion' }) fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' }) fechaModificacion: Date;

  
  @ManyToOne(() => CatProductoEntity, (categoriaProducto) => categoriaProducto.productos)
  @JoinColumn({ name: 'fk_categoria_producto_id', referencedColumnName: 'id' })
  categoriaProducto: CatProductoEntity;

}
