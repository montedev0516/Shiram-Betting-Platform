import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import data from '../assets/Raw/rules';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  margin: '12px 12px 0px',
  borderRadius: '4px',
  boxShadow: '0px 1px rgba(0,0,0,0.3)',
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  padding: '0px 12px',
  height: '12px important',
  marginTop: '-4px',
  // [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
  // {
  //   transform: 'rotate(90deg)',
  // },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(0),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Rules({ handleClose }) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const style = {
    position: 'absolute',
    top: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '800px',
    backgroundColor: 'white',
    border: '0px solid #000',
    borderRadius: '4px',
    boxShadow: 24,
    overflow: 'hidden',
    paddingBottom: '12px'
  };

  const table_data = data[0];

  return (
    <div style={style}>
      <div className='w-full bg-[rgba(0,0,0,0.03)] p-3 mb-2 border-b-[1px] relative'>
        <p className="text-sm text-gray-700">Rules</p>
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '5px',
            right: '10px'
          }}
        >
          <FontAwesomeIcon icon={faXmark} style={{ fontSize: '12px' }} />
        </button>
      </div>
      <div>
        {
          data.map(item =>
            <Accordion expanded={expanded === item.title} onChange={handleChange(item.title)} className={""}>
              <AccordionSummary aria-controls={item.title} id={item.title}>
                <Typography component="span">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: '10px 14px 24px' }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                      {item.rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row" sx={{ padding: '8px 6px' }}>
                            <Typography sx={{ fontSize: '12px', color: row.flag == true ? '#f55' : 'black' }}>
                              {row.data}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          )
        }
      </div>
    </div>

  );
}
