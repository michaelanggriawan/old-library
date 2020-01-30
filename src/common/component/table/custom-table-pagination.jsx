/* eslint-disable react/forbid-prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';
import { TableFooter } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import TablePaginationActions from './table-pagination';
import StyledTableCell from './table-cell';
import StyledTableRow from './table-row';
import PreLoader from '../preloader/preloader';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    width: '90%',
  },
  table: {
    minWidth: 500,
  },
}));

const useStyles2 = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}));

const customTablePagination = ({
  header, Icon, data, titles, loading,
  remove, mapTable, leftMargin, setCurrentData,
  isWidth, openAddData,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const classes = useStyles();
  const classes2 = useStyles2();
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div style={{ marginLeft: leftMargin, marginTop: '-30px', width: isWidth }}>
      <Paper className={classes.root}>
        <Typography style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '900',
        }}
        >
          <span style={{ paddingRight: '7px' }}>
            <Icon />
          </span>
          {header}
        </Typography>
        <div className={classes2.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <StyledTableRow>
                { titles.map((title) => (
                  <StyledTableCell key={title}>{title}</StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              { loading ? <PreLoader />
                : data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <StyledTableRow key={row.id}>
                    { mapTable.map((item) => (
                      <StyledTableCell key={item}>{row[item]}</StyledTableCell>
                    ))}
                    <StyledTableCell align="left">
                      <EditIcon onClick={() => { setCurrentData(row); }} style={{ cursor: 'pointer' }} />
                      {' '}
                      <DeleteIcon style={{ cursor: 'pointer' }} onClick={() => remove(row.id)} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}

              {emptyRows > 0 && (
              <StyledTableRow style={{ height: 48 * emptyRows }}>
                <StyledTableCell colSpan={6} />
              </StyledTableRow>
              )}

            </TableBody>
            <TableFooter>
              <StyledTableRow>
                <ControlPointIcon onClick={openAddData} style={{ marginTop: '15px', marginLeft: '10px', cursor: 'pointer' }} />
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={6}
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </StyledTableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    </div>
  );
};

customTablePagination.propTypes = {
  header: PropTypes.string.isRequired,
  Icon: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  remove: PropTypes.func.isRequired,
  mapTable: PropTypes.array.isRequired,
  leftMargin: PropTypes.string.isRequired,
  setCurrentData: PropTypes.func.isRequired,
  isWidth: PropTypes.string.isRequired,
  openAddData: PropTypes.func.isRequired,
};

export default customTablePagination;
