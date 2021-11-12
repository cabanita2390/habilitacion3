import React from 'react'

const VentasRow = ({ VentaID, ValorVenta, ProductoID, CantidadProducto, PrecioProducto, FechaVenta, ClienteID, NombreCliente, Encargado}) => {
    return (
        <tr height="45" align="center" bordercolor="#1A4A77">
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{VentaID}</font></td>
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{ValorVenta}</font></td>
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{ProductoID}</font></td>
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{CantidadProducto}</font></td>
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{PrecioProducto}</font></td>
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{FechaVenta}</font></td>
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{ClienteID}</font></td>
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{NombreCliente}</font></td>
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{Encargado}</font></td>
        </tr>
    )
}

export default VentasRow