import React from 'react'

const VentasRow = ({ ProductoID, DescripcionProducto, PrecioProducto, Disponibilidad}) => {
    return (
        <tr height="45" align="center" bordercolor="#1A4A77">
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{ProductoID}</font></td>
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{DescripcionProducto}</font></td>
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{PrecioProducto}</font></td>
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{Disponibilidad}</font></td>
            
        </tr>
    )
}

export default VentasRow