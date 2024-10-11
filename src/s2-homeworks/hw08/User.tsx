import React from 'react'
import {UserType} from './HW8'
import {TableCell, TableRow} from '@mui/material';

// types
type UserPropsType = {
    u: UserType
}

const User: React.FC<UserPropsType> = ({u}) => {
    return (
        <TableRow
            key={u._id}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell component="th" scope="row"> {u.name} </TableCell>
            <TableCell component="th" scope="row"> {u.age} </TableCell>
        </TableRow>
    )
}

export default User
