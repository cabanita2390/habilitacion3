import React from 'react'
import FOOTER from '../../Components/FOOTER'
import RolesRow from '../../Components/RolesRow'
import logo from '../../Media/logo.png'

function Roles() {
    return (
        <div>
            <body bgcolor="#E4F2FB">
                <table width="100%" height="60" border="0" cellspacing="0" cellpading="5" bgcolor="#1A4A77">
                    <tr>
                        <td align="center">
                            <table width="1300" border="0" align="center" cellpading="1" cellspacing="1">
                                <td align="left" width="100" cellpading="1" cellspacing="1">
                                    <img src={logo} height="60" />
                                </td>
                                <td width="500" align="center">
                                    <font face="Verdana, Geneva, sans-serif" color="#E4F2FB">
                                        <h3>Sistema de gestión de roles</h3>
                                    </font>
                                </td>
                                <td width="400">
                                    <font face="Verdana, Geneva, sans-serif" color="#E4F2FB">
                                        <h3>Cambiar de plataforma</h3>
                                    </font>
                                </td>
                                <td width="400">
                                    <font face="Verdana, Geneva, sans-serif" color="#E4F2FB">
                                        <h3>Nombre de usuario</h3>
                                    </font>
                                </td>
                                <td width="200">
                                    <font face="Verdana, Geneva, sans-serif" color="#E4F2FB">
                                        <h3>Cerrar sesión</h3>
                                    </font>
                                </td>
                            </table>
                        </td>
                    </tr>
                </table>
                <table width="100%" height="50" bgcolor="#E4F2FB" align="center" cellpading="1" cellspacing="1">
                    <tr>
                        <td>
                            <table align="right" cellspacing="20">
                                <tr>
                                    <td>
                                        <button>
                                            <font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77"><strong>Crear</strong></font>
                                        </button>
                                    </td>
                                    <td>
                                        <button>
                                            <font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77"><strong>Modificar</strong></font>
                                        </button>
                                    </td>
                                    <td>
                                        <button>
                                            <font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77"><strong>Eliminar</strong></font>
                                        </button>
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>
                </table>
                <table width="100%" height="350" bgcolor="#E4F2FB" align="center" cellpading="1" cellspacing="1">
                    <tr>
                        <td>
                            <table width="1200" height="420" align="right" bordercolor="#1A4A77">
                                <tr height="50" bgcolor="#1A4A77" align="center" bordercolor="#1A4A77">
                                    <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="white">ID venta</font></td>
                                    <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="white">Cliente</font></td>
                                    <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="white">Estado</font></td>
                                    <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="white">Valor</font></td>
                                    <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="white">Responsable</font></td>
                                    <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="white">Fecha pedido</font></td>
                                    <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="white">Fecha de pago</font></td>
                                </tr>
                                <RolesRow userID="001" userName="Alejandro" role="administrador" userState="administrador"/>
                                <RolesRow userID="001" userName="Alejandro" role="administrador" userState="administrador"/>
                                <RolesRow userID="001" userName="Alejandro" role="administrador" userState="administrador"/>
                                <RolesRow userID="001" userName="Alejandro" role="administrador" userState="administrador"/>
                                <RolesRow userID="001" userName="Alejandro" role="administrador" userState="administrador"/>
                               
                            </table>
                        </td>
                    </tr>
                </table>
                <table table width="100%" height="50" bgcolor="#E4F2FB" align="center" cellpading="1" cellspacing="1">
                    <tr>
                        <td>
                            <table table align="right" cellspacing="20">
                                <tr>
                                    <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">Total registros: 25</font></td>
                                    <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">Visualización por pagina: 5</font></td>
                                    <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">pagina: 1 de 5</font></td>
                                </tr>

                            </table>
                        </td>
                    </tr>
                </table>
                <FOOTER/>
            </body>
        </div>
    )
}

export default Roles
