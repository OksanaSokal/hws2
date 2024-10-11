import React from 'react'
import {UserType} from './HW8'
import s from './HW8.module.css'

// types
type UserPropsType = {
    u: UserType
}

const User: React.FC<UserPropsType> = ({u}) => {
    return (
        <tr id={'hw8-user-' + u._id + '-' + u.age} className={s.item}>
        {/*<TableRow*/}
        {/*    key={u._id}*/}
        {/*    sx={{'&:last-child td, &:last-child th': {border: 0}}}*/}
        {/*>*/}
        {/*    <TableCell component="th" scope="row"> {u.name} </TableCell>*/}
        {/*    <TableCell component="th" scope="row"> {u.age} </TableCell>*/}
            <td id={'hw8-user-name-' + u._id} className={s.nameCol}>
                {u.name}

            </td>
            <td id={'hw8-user-age-' + u._id}>
                {u.age}

            </td>
        {/*</TableRow>*/}
    </tr>
)
}

export default User
