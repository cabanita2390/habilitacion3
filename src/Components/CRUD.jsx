import React from "react";
import Boton from './Boton';

const CRUD = () => {
    return (
        <table width="100%" height="50" bgcolor="#E4F2FB" align="center" cellpading="1" cellspacing="1">
            <tr>
                <td>
                    <table align="right" cellspacing="30">
                        <tr>
                            <td>
                                <Boton titulo="Crear"/>
                            </td>
                            <td>
                                <Boton titulo="Modificar"/>
                            </td>
                            <td>
                                <Boton titulo="Eliminar"/>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    )
}
export default CRUD