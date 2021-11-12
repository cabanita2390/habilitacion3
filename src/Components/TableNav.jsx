import React from 'react'

const TableNav = ({ total, page, cuantity }) => {
    return (
        <table table width="100%" height="50" bgcolor="#E4F2FB" align="center" cellpading="1" cellspacing="1">
            <tr>
                <td>
                    <table table align="right" cellspacing="20">
                        <tr>
                            <td width="200"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">Total registros: {total}</font></td>
                            <td width="200"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">Visualización por pagina: {cuantity}</font></td>
                            <td width="200"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">pagina: {page} de {Math.ceil(total / cuantity)}</font></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    )
}

export default TableNav