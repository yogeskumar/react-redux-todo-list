import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import DataToShow from "./DataToShow";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData } from "../redux/dataSlice";

// previous userid is next id
// previous id is todoid

export default function StickyHeadTable() {
  // userId >> id
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.data.searchValue);
  const rows = DataToShow(searchValue);
  const navigate = useNavigate();

  const users = useSelector((state) => state.data.users);

  const columns = [
    { id: "todoid", label: "ToDo ID", minWidth: 80 },
    { id: "title", label: "Title", minWidth: 170 },
    {
      id: "status",
      label: "Status",
      minWidth: 130,
    },
    {
      id: "action",
      label: "Action",
      minWidth: 150,
      align: "center",
      format: ({ id, userId, title }) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            const user = users.filter((user) => {
              // Filter todos based on searchValue
              return (
                user.id.toString().toLowerCase() ===
                userId.toString().toLowerCase()
              );
            });
            console.log(user);
            dispatch(
              setData({
                key: "user",
                data: {
                  todoid: id,
                  title: title,
                  userId: userId,
                  name: user[0].name,
                  email: user[0].email,
                },
              })
            );

            navigate("/user");
          }}
        >
          View User
        </Button>
      ),
    },
  ];
  // }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper
      sx={{ width: "auto", overflow: "hidden", minWidth: 650, maxWidth: 720 }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.action.id}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
