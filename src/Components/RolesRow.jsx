import React from 'react'

const RolesRow = ({ userID, userName, role, userState}) => {
    return (
        <tr height="45" align="center" bordercolor="#1A4A77">
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{userID}</font></td>
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{userName}</font></td>
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{role}</font></td>
            <td width="170"><font face="Verdana, Geneva, sans-serif" size="3" color="#1A4A77">{userState}</font></td>
        </tr>
    )
}

export default RolesRow