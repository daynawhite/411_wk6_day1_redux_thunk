import React from 'react';
import {
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
    'Delete'
  ];
const ITEM_HEIGHT = 48;

const Import = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null)
    const [itemToDelete, setItemToDelete] = React.useState(null)
    const open = Boolean(anchorEl);
    let currentIdx;

    const handleClick = (event, id) => {
      setAnchorEl(event.currentTarget)
      setItemToDelete(id)
      ;
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const handleDelete = () => {
        props.deleteMake(itemToDelete);
        handleClose()
        setItemToDelete(null)
    }

    console.log(props.makes)
    return (
        <Container maxWidth="lg" className="car-container">
            <Button onClick={props.fetchMakes} variant='contained' color='primary'>Import</Button>
            <h2>COUNT: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.makes.map((make, index) => (
                    
                    <TableRow key={make.MakeId}>
                        <TableCell component="th" scope="row">
                            {make.MakeId}
                        </TableCell>
                        <TableCell>{make.MakeName}</TableCell>
                        <TableCell>
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={(event) => handleClick(event, make.MakeId)}>
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                                }}
                            >
                               
                                {options.map((option) => (
                                <MenuItem key={option} selected={option === 'Delete'} onClick={() => handleDelete(make.MakeId)}>
                                    {option}
                                </MenuItem>
                                ))}
                            </Menu>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import