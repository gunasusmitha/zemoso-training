import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Stack from "@mui/material/Stack"
import Typography from '@mui/material/Typography'

export const MyTable = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const rows = [
    { NAME: 'John Smith', ADJUDICATION: '-', STATUS: 'CLEAR', LOCATION: 'Barrouallie', DATE: '2/22/2022' },
    { NAME: 'Serene', ADJUDICATION: '-', STATUS: 'CLEAR', LOCATION: 'Vanersborg', DATE: '3/13/2022' },
    { NAME: 'Walsh', ADJUDICATION: '-', STATUS: 'CONSIDER', LOCATION: 'Sukamanah', DATE: '7/2/2022' },
    { NAME: 'Maurizia', ADJUDICATION: '-', STATUS: 'CLEAR', LOCATION: 'Sukamanah', DATE: '2/20/2022' },
    { NAME: 'Kendre', ADJUDICATION: '-', STATUS: 'CLEAR', LOCATION: 'Beutong Ateuh', DATE: '5/19/2022' },
    { NAME: 'Erastus', ADJUDICATION: '-', STATUS: 'CLEAR', LOCATION: 'Hoviyn Am', DATE: '25/1/2021' },
    { NAME: 'Jereme', ADJUDICATION: '-', STATUS: 'CONSIDER', LOCATION: 'Sharingol', DATE: '7/26/2022' },
    { NAME: 'John', ADJUDICATION: '-', STATUS: 'CONSIDER', LOCATION: 'Lianyun', DATE: '5/28/2022' },
    { NAME: 'Cari', ADJUDICATION: '-', STATUS: 'CLEAR', LOCATION: 'Taboao da Serra', DATE: '5/23/2022' },
    { NAME: 'Kimble', ADJUDICATION: '-', STATUS: 'CONSIDER', LOCATION: 'Veseli nad Moravou', DATE: '8/24/2022' }
  ];

  const filteredRows = rows.filter(row => row.NAME.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  
  return (
    <TableContainer component={Container} >
      <Stack direction='row' >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft:'20px', paddingTop:'20px' ,width:'700px'}}>
            <Typography variant='h6'>Candidate Information</Typography>
            <TextField
                label="Search by name"
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={handleSearch}
                InputProps={{
                    endAdornment: (
                    <SearchIcon />
                )
                }}
            />
        </div>
      </Stack>
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
          {filteredRows.map((row) => (
            <TableRow key={row.NAME}>
              <TableCell>{row.NAME}</TableCell>
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
};
