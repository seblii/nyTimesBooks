import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';


interface IBook {
    title: string;
    author: string;
    primary_isbn10: string;

  }

const TopBooks = () => {
    const [books, setBooks] = useState<IBook[]>([]);
    const params = useParams();

    useEffect(() => {
      axios.get(`http://localhost:3333/bestsellers/${params.listName}`).then((response) => {
        setBooks(response.data.results.books);
      });
    }, [params.listName]);

    return (
        <div>
     <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell rowSpan={2}>
                            New York Times Bestsellers
                        </TableCell>
                    </TableRow>
                </TableHead>
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
                                {book.primary_isbn10}
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