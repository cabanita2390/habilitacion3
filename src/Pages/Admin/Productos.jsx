import React from 'react'
import NavBar from '../../Components/NavBar'
import FOOTER from '../../Components/FOOTER'
import TableNav from '../../Components/TableNav'
import TableTitle from '../../Components/TableTitle'
import CRUD from '../../Components/CRUD'
import ProductosRow from '../../Components/ProductosRow'

function Productos() {
    return (
        <div>
            <NavBar site="Gestión de Productos" alternativa1="Gestion de roles" alternativa2="Gestión de ventas" />
            <CRUD />
            <table width="100%" height="350" bgcolor="#E4F2FB" align="center" cellpading="1" cellspacing="1">
                <tr>
                    <td>
                        <table width="800" height="420" align="right" bordercolor="#1A4A77">
                            <tr height="45" bgcolor="#1A4A77" align="center" bordercolor="#1A4A77">
                                <TableTitle title="ID producto" />
                                <TableTitle title="Descripción producto" />
                                <TableTitle title="Precio unitario producto" />
                                <TableTitle title="Disponibilidad" />

                            </tr>
                            <ProductosRow ProductoID="01" DescripcionProducto="Frutas" PrecioProducto="500" Disponibilidad="si" />
                            <ProductosRow ProductoID="02" DescripcionProducto="Frutas" PrecioProducto="500" Disponibilidad="si" />
                            <ProductosRow ProductoID="03" DescripcionProducto="Frutas" PrecioProducto="500" Disponibilidad="si" />
                            <ProductosRow ProductoID="04" DescripcionProducto="Frutas" PrecioProducto="500" Disponibilidad="si" />
                            <ProductosRow ProductoID="05" DescripcionProducto="Frutas" PrecioProducto="500" Disponibilidad="si" />
                            <ProductosRow ProductoID="06" DescripcionProducto="Frutas" PrecioProducto="500" Disponibilidad="si" />
                            <ProductosRow ProductoID="07" DescripcionProducto="Frutas" PrecioProducto="500" Disponibilidad="si" />
                        </table>
                    </td>
                </tr>
            </table>
            <TableNav total="11" page="1" cuantity="7" />
            <FOOTER />
        </div>
    )
}
export default Productos