import { AppBar, Badge, Input, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Search,
  Mail,
  Notifications,
  Person,
  Cancel,
} from "@material-ui/icons";
import { useState } from "react";
function Navbar() {
  const [open, setopen] = useState(false);
  const usestyles = makeStyles((theme) => ({
    logolg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    logosm: {
      display: "block",
      [theme.breakpoints.up("lg")]: {
        display: "none",
      },
    },
    search: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#fff",
      width: "40%",
      borderRadius: theme.shape.borderRadius,
      [theme.breakpoints.down("sm")]: {
        display: (props) => (props.open ? "flex" : "none"),
        width: "70%",
      },
    },
    icons: {
      alignItems: "center",
      justifyContent: "space-between",
      display: (props) => (props.open ? "none" : "flex"),
    },
    searchicon: {
      marginLeft: theme.spacing(2),
      color: theme.palette.secondary.light,
    },
    searchsec: {
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        display: (props) => (props.open ? "none" : "flex"),
      },
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    input: {
      marginLeft: theme.spacing(2),
    },
    cancel: {
      color: theme.palette.secondary.main,
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    icon: {
      marginLeft: theme.spacing(2),
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: theme.palette.secondary.light,
    },
  }));
  const classes = usestyles({ open });
  return (
    <div className={classes.appbar}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" className={classes.logolg}>
            welcome home
          </Typography>
          <Typography variant="h5" className={classes.logosm}>
            WH
          </Typography>
          <div className={classes.search}>
            <Search className={classes.searchicon}></Search>
            <Input placeholder="search" className={classes.input}></Input>
            <Cancel
              className={classes.cancel}
              onClick={() => {
                setopen(false);
              }}
            />
          </div>
          <Search
            className={classes.searchsec}
            onClick={() => {
              setopen(true);
            }}
          />
          <div className={classes.icons}>
            <Badge badgeContent={1} color="secondary" className={classes.icon}>
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="secondary" className={classes.icon}>
              <Notifications />
            </Badge>
            <Badge badgeContent={2} color="secondary" className={classes.icon}>
              <Person />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
