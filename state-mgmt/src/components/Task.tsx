import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';


export const MyTable = () => {

    function createData(
        NAME: string,
        ADJUDICATION: string,
        STATUS: string,
        LOCATION: string,
        DATE: string,
      ) {
        return { NAME,ADJUDICATION,STATUS,LOCATION,DATE };
      }
      
      const rows = [
        createData('John Smith','-','CLEAR','Barrouallie','2/22/2022'),
        createData('Serene','-','CLEAR','Vanersborg','3/13/2022'),
        createData('Walsh','-','CONSIDER','Sukamanah','7/2/2022'),
        createData('Maurizia','-','CLEAR','Sukamanah','2/20/2022'),
        createData('Kendre','-','CLEAR','Beutong Ateuh','5/19/2022'),
      ];

  return (
    <TableContainer component={Container} >
      <Table sx={{ width:'700px',margin:'20px',padding:'20px',border:'1px solid gray'}}>
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell>ADJUDICATION</TableCell>
            <TableCell>STATUS</TableCell>
            <TableCell>LOCATION</TableCell>
            <TableCell>DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.NAME}>
              <TableCell >{row.NAME}</TableCell>
              <TableCell>{row.ADJUDICATION}</TableCell>
              <TableCell>{row.STATUS}</TableCell>
              <TableCell>{row.LOCATION}</TableCell>
              <TableCell>{row.DATE}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}