import React from 'react'

const Input = ({propertie}) => {
    return (
        <table align="center">
            <tr align="center">
                <td align="left">
                    <font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">
                        <strong>{propertie}:</strong>
                    </font>
                </td>
                <td align="right">
                    <input type={"text"} id={"fname"} />
                </td>
            </tr>
        </table>
    )
}

export default Input