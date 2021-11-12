import React from 'react'
import NavBar from '../../Components/NavBar'
import FOOTER from '../../Components/FOOTER'
import TableNav from '../../Components/TableNav'
import TableTitle from '../../Components/TableTitle'
import CRUD from '../../Components/CRUD'
import VentasRow from '../../Components/VentasRow'

function Ventas() {
    return (
      <div>
      <NavBar site="Gestión de ventas" alternativa1="Gestion de roles" alternativa2="Gestión de productos"/>
      <CRUD/>
      <table width="100%" height="350" bgcolor="#E4F2FB" align="center" cellpading="1" cellspacing="1">
          <tr>
              <td>
                  <table width="1200" height="420" align="right" bordercolor="#1A4A77">
                      <tr height="45" bgcolor="#1A4A77" align="center" bordercolor="#1A4A77">
                          <TableTitle title="ID venta"/>
                          <TableTitle title="Valor venta"/>
                          <TableTitle title="ID producto"/>
                          <TableTitle title="Cantidad producto"/>
                          <TableTitle title="Precio unitario producto"/>
                          <TableTitle title="Fecha de venta"/>
                          <TableTitle title="ID cliente"/>
                          <TableTitle title="Nombre del cliente"/>
                          <TableTitle title="Encargado"/>

                      </tr>
                      <VentasRow VentaID="01" ValorVenta="4000" ProductoID="01" CantidadProducto="5" PrecioProducto="100" FechaVenta="12/5/2021" ClienteID="01" NombreCliente="Alejandro"  Encargado="Milena"/>
                      <VentasRow VentaID="02" ValorVenta="4000" ProductoID="01" CantidadProducto="5" PrecioProducto="100" FechaVenta="12/5/2021" ClienteID="01" NombreCliente="Alejandro"  Encargado="Milena"/>
                      <VentasRow VentaID="03" ValorVenta="4000" ProductoID="01" CantidadProducto="5" PrecioProducto="100" FechaVenta="12/5/2021" ClienteID="01" NombreCliente="Alejandro"  Encargado="Milena"/>
                      <VentasRow VentaID="04" ValorVenta="4000" ProductoID="01" CantidadProducto="5" PrecioProducto="100" FechaVenta="12/5/2021" ClienteID="01" NombreCliente="Alejandro"  Encargado="Milena"/>
                      <VentasRow VentaID="05" ValorVenta="4000" ProductoID="01" CantidadProducto="5" PrecioProducto="100" FechaVenta="12/5/2021" ClienteID="01" NombreCliente="Alejandro"  Encargado="Milena"/>
                      <VentasRow VentaID="06" ValorVenta="4000" ProductoID="01" CantidadProducto="5" PrecioProducto="100" FechaVenta="12/5/2021" ClienteID="01" NombreCliente="Alejandro"  Encargado="Milena"/>
                      <VentasRow VentaID="07" ValorVenta="4000" ProductoID="01" CantidadProducto="5" PrecioProducto="100" FechaVenta="12/5/2021" ClienteID="01" NombreCliente="Alejandro"  Encargado="Milena"/>
                      
                  </table>
              </td>
          </tr>
      </table>
      <TableNav total="11" page="1" cuantity="7" />
      <FOOTER />
  </div>
    )
}

export default Ventas
