import React from 'react'
import logo from '../../Media/logo.png'
import fondoLogin from '../../Media/fondoLogin.png'
import FOOTER from '../../Components/FOOTER'
import Input from '../../Components/Input'

function Index() {
    return (
        <div>
            <table id="modulo login" width="100%" height="570" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td>
                        <table width="1200" height="570" bgcolor="#69BED7" align="center" cellspacing="1" cellpadding="5">
                            <tr>
                                <td width="600" background={fondoLogin} align="center">
                                </td>
                                <td width="600" align="center">
                                    <table>
                                        <tr height="250">
                                            <td align="center"><img src={logo} width="181" height="111" alt="logo"/></td>
                                        </tr>
                                        <tr height="200">
                                            <td>
                                                <Input propertie="Nombre de Usuario" width="300"/>
                                                <Input propertie="Contraseña" width="500"/>
                                            </td>
                                        </tr>
                                        <tr height="120">
                                            <td align="center">
                                                <button>
                                                    <font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77"><strong>Ingresar</strong></font>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <FOOTER/>
    </div>
    )
}

export default Index
