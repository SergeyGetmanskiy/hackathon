import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

function createData(name, progress, result, color) {
  return { name, progress, result, color };
}

const rows = [
  createData('Продуктовый подход', '15/15', 'Пройден', '#C2E5CE'),
  createData('UX исследования', '10/15', 'В процессе', '#FFE1BD'),
  createData('Метрики', '8/12', 'В процессе', '#FFE1BD'),
  createData('UX исследования', '0/20', 'Изучить', '#FFDDE5'),
  createData('Умение вести переговоры', '22/22', 'Пройден', '#C2E5CE'),
  createData('Стратегический подход', '6/14', 'В процессе', '#FFE1BD'),
];

export default function SkillsTable() {
  return (
    <TableContainer component={Paper} sx={{ py: 2, borderRadius: '10px' }}>
      <Table sx={{ minWidth: 610 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ borderBottom:"none" }}>
              <Typography variant='body1-medium'>Навыки</Typography>
            </TableCell>
            <TableCell align="right" sx={{ borderBottom:"none" }} />
            <TableCell align="right" sx={{ borderBottom:"none" }} />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow 
              key={index}
              sx={{ "& td": { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ borderBottom:"none", py: 0 }}>
                <Typography variant='body3-regular'>{row.name}</Typography>
              </TableCell>
              <TableCell align="right" sx={{ py: 0 }}>
                <Typography variant='body3-regular'>{row.progress}</Typography>
              </TableCell>
              <TableCell align="right" sx={{ py: '7px', display: 'flex' }} >
                <Box sx={{
                  height: 23,
                  backgroundColor: row.color,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  px: '12px',
                  py: '6px',
                }}>
                  <Typography variant='caption2-regular'>
                    {row.result}
                  </Typography>  
                </Box>             
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
