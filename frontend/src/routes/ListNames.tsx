import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

interface IListName {
    display_name: string;
    list_name_encoded: string;
  }

const ListNames = () => {
    const [lists, setListsNames] = useState<IListName[]>([]);

    useEffect(() => {
      axios.get('http://localhost:3333/listnames').then((response) => {
        setListsNames(response.data);
      });
    }, []);
    return (
    <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
              New York Times Bestsellers by categories - Choose category
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {lists.map( list => (
      <TableRow>
        <TableCell>
          <Link to={`/bestsellers/${list.list_name_encoded}`}>{list.display_name}</Link>
        </TableCell>
      </TableRow>
      ))}
      </TableBody>
    </Table>
    </TableContainer>
    )
}

export default ListNames;