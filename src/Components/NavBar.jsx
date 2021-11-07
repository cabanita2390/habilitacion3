import React from 'react'
import logo from '../Media/logo.png'
import { Link } from 'react-router-dom'
import Boton from './Boton'

const NavBar = ({ site,alternativa1,alternativa2 }) => {
    return (
        <table width="100%" height="60" border="0" cellspacing="0" cellpading="5" bgcolor="#1A4A77">
            <tr>
                <td align="center">
                    <table width="1300" border="0" align="center" cellpading="1" cellspacing="1">
                        <td align="left" width="100" cellpading="1" cellspacing="1">
                            <img src={logo} height="60" alt="logo" />
                        </td>
                        <td width="500" align="left">
                            <font face="Verdana, Geneva, sans-serif" color="#E4F2FB">
                                <ul><h3>Otros sistemas</h3>
                                    <li>{alternativa1}</li>
                                    <li>{alternativa2}</li>
                                </ul>
                            </font>
                        </td>
                        <td width="400">
                            <font face="Verdana, Geneva, sans-serif" color="#E4F2FB">
                                <h3>{site}</h3>
                            </font>
                        </td>

                        <td width="400" align="right">
                            <Link to='/'>
                                <Boton titulo="Cerrar Sesión" />
                            </Link>
                        </td>
                    </table>
                </td>
            </tr>
        </table>
    )
}

export default NavBar