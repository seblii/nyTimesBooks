import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import * as backend from "../api";
import { InlineResponse200 as IListName } from "../api";
import { useQuery } from "react-query";

const ListNames = () => {
  const [listNames, setListsNames] = useState<IListName[]>([]);

  useQuery("listnames", () => {
    new backend.DefaultApi().listNamesGet().then((response) => {
      const listNames = response.data as IListName[];
      setListsNames(listNames);
    });
  });

  return (
    <TableContainer>
      <Table>
        <TableBody>
          {listNames.map((list, index) => (
            <TableRow key={index}>
              <TableCell>
                <Link to={`/bestsellers/${list.list_name_encoded}`}>
                  {list.display_name}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListNames;
