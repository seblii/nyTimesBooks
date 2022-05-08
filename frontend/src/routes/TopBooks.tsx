import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import * as backend from '../api';
import { InlineResponse2001 as IBook } from '../api';


const TopBooks = () => {
    const [books, setBooks] = useState<IBook[]>([]);
    const params = useParams();

    // FIXME: Renders two times. (and calls the api)
    useEffect(() => {
        if (!params.listName) {
            return;
        }
        new backend.DefaultApi().bestsellersListNameEncodedGet(params.listName).then((response) => {
            const books = response.data as IBook[];
            setBooks(books);
        })
    }, [params.listName]);

    return (
        <div>
            <TableContainer>
                    <Table>
                        <TableBody>
                            {books.map( book => (
                                <TableRow>
                                    <TableCell>
                                        <Typography variant={'body1'}>
                                            {book.title}
                                        </Typography>
                                        <Typography variant={'body2'}>
                                            by {book.author}
                                        </Typography>          
                                    </TableCell>
                                    <TableCell>
                                        {book.isbn}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    )
}

export default TopBooks;