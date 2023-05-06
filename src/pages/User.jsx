import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// const Demo = styled("div")(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

export default function User() {
  // const location = useLocation();
  // const { id, title, userId } = location.state;

  const [user, setUser] = React.useState({
    todoid: "id",
    title: "title",
    userId: "userId",
    name: "user.name",
    email: "user.email",
  });

  const myNewUser = useSelector((state) => state.data.user);

  React.useEffect(() => {
    setUser(myNewUser);
  }, [myNewUser]);

  // const user = users.filter((user) => {
  //   // Filter todos based on searchValue
  //   return user.id.toString().toLowerCase() === userId.toString().toLowerCase();
  // });

  return (
    <div
      styles={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // minHeight: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: 650,
          margin: "50px auto",
        }}
      >
        <Grid item justifyContent="center">
          {/* <Demo> */}
          <List
            style={{ textAlign: "left", border: "2px solid black", padding: 0 }}
          >
            <ListItem sx={styles.ListItem}>
              <ListItemText sx={styles.listItemText} primary="ToDo ID" />
              <ListItemText primary={user.todoid} sx={styles.listItemText} />
            </ListItem>
            <ListItem sx={styles.ListItem}>
              <ListItemText sx={styles.listItemText} primary="ToDo Title" />
              <ListItemText primary={user.title} sx={styles.listItemText} />
            </ListItem>
            <ListItem sx={styles.ListItem}>
              <ListItemText sx={styles.listItemText} primary="User ID" />
              <ListItemText primary={user.userId} sx={styles.listItemText} />
            </ListItem>
            <ListItem sx={styles.ListItem}>
              <ListItemText sx={styles.listItemText} primary="Name" />
              <ListItemText primary={user.name} sx={styles.listItemText} />
            </ListItem>
            <ListItem
              sx={{
                padding: 2,
                // borderBottom: "1px solid black",
                ":hover": { backgroundColor: "#f2f2f2" },
              }}
            >
              <ListItemText sx={styles.listItemText} primary="Email" />
              <ListItemText primary={user.email} sx={styles.listItemText} />
            </ListItem>
          </List>
          {/* </Demo> */}
        </Grid>
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          window.history.back();
        }}
        style={{
          display: "block",
          margin: "auto",
          minWidth: 140,
          minHeight: 50,
          // marginTop: 25,
        }}
      >
        Go Back
      </Button>
    </div>
  );
}

const styles = {
  ListItem: {
    padding: 2,
    borderBottom: "1px solid black",
    ":hover": { backgroundColor: "#f2f2f2" },
    textAlign: "left",
  },
  listItemText: { maxWidth: 250 },
};
