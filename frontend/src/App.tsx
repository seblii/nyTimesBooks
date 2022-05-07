import React, { useEffect, useState } from 'react';
import axios from "axios";
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

interface ICategory {
  display_name: string;
  list_name_encoded: string;
}

function App() {
  const [lists, setListsNames] = useState<ICategory[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3333/listnames').then((response) => {
      setListsNames(response.data);
    });
  }, []);
  
  return (
    <div>
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
            {list.display_name}
          </TableCell>
        </TableRow>
        ))}
        </TableBody>
      </Table>
      </TableContainer>
    </div>
  );
}

export default App;
