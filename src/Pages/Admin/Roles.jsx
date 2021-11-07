import React from 'react'
import FOOTER from '../../Components/FOOTER'
import NavBar from '../../Components/NavBar'
import RolesRow from '../../Components/RolesRow'
import TableNav from '../../Components/TableNav'
import TableTitle from '../../Components/TableTitle'
import CRUD from '../../Components/CRUD'


function Roles() {
    return (
        <div>
        <NavBar site="Gestión de roles" alternativa1="Gestion de ventas" alternativa2="Gestión de productos"/>
        <CRUD/>
        <table width="100%" height="350" bgcolor="#E4F2FB" align="center" cellpading="1" cellspacing="1">
            <tr>
                <td>
                    <table width="800" height="420" align="right" bordercolor="#1A4A77">
                        <tr height="45" bgcolor="#1A4A77" align="center" bordercolor="#1A4A77">
                            <TableTitle title="ID"/>
                            <TableTitle title="Nombre"/>
                            <TableTitle title="Rol"/>
                            <TableTitle title="Estado"/>
                        </tr>
                        <RolesRow userID="01" userName="Alejandro" role="administrador" userState="activo" />
                        <RolesRow userID="02" userName="Alejandro" role="vendedor" userState="activo" />
                        <RolesRow userID="03" userName="Alejandro" role="administrador" userState="activo" />
                        <RolesRow userID="04" userName="Alejandro" role="administrador" userState="pendiente" />
                        <RolesRow userID="05" userName="Alejandro" role="administrador" userState="inactivo" />
                        <RolesRow userID="06" userName="Alejandro" role="administrador" userState="inactivo" />
                        <RolesRow userID="07" userName="Alejandro" role="administrador" userState="inactivo" />
                    </table>
                </td>
            </tr>
        </table>
        <TableNav total="11" page="1" cuantity="7" />
        <FOOTER />
    </div>
    )
}

export default Roles
