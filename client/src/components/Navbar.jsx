import { AppBar, Box, Link, Toolbar, MenuItem, Typography } from '@mui/material';

function Navbar() {
    return (
        <Box>
            <AppBar>
                <Typography sx={{ textAlign: 'center', mt: 2}} >PERN-CRUD-To-Do</Typography>
                <Toolbar sx={{ flexWrap: 'wrap', justifyContent: "center" }}>
                    <MenuItem>
                        <Link color={'#fff'} href="/">Home</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link color={'#fff'} href="/tasks">Show Tasks</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link color={'#fff'} href="/new">New Task</Link>
                    </MenuItem>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;