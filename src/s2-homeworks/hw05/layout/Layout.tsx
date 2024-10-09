import React, {FC, ReactNode, useEffect, useState} from 'react'
import {Header} from '../header/Header'
import {Sidebar} from '../sidebar/Sidebar'
import {Drawer} from '@mui/material';


type PropsType = {
    children: ReactNode
}

export const Layout: FC<PropsType> = ({children}) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')
    }, [open]) // отключает прокрутку при открытом меню

    return (
        <>
            {/*<AppBar position="static">*/}
            {/*    <Toolbar variant="dense">*/}

                <Drawer open={open} onClose={handleClose}>
                    <Sidebar open={open} handleClose={handleClose}/>
                </Drawer>
                {/*<Button onClick={handleOpen}>*/}
                    <Header handleOpen={handleOpen}/>
                {/*</Button>*/}

            {/*</Toolbar>*/}
            {/*</AppBar>*/}
            <div>
                {/*страницы*/}
                {children}
            </div>
        </>
    )
}
