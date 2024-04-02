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

const Import = (props) => {
    console.log(props.makes)
    return (
        <Container maxWidth="lg" className="car-container">
            <Button onClick={props.fetchMakes} variant='contained' color='primary'>Import</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.makes.map((make) => (
                    <TableRow key={make.MakeId}>
                        <TableCell component="th" scope="row">
                            {make.MakeId}
                        </TableCell>
                        <TableCell>{make.MakeName}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import