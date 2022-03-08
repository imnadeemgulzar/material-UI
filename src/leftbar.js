import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Contactless,
  Flight,
  Home,
  Email,
  AddIcCall,
  AddLocation,
  Build,
  Camera,
  Close,
} from "@material-ui/icons";

const Leftbar = () => {
  const usestyles = makeStyles((theme) => ({
    leftbar: {
      margin: "0rem -1.5rem",
      justifyContent: "center",
      flexDirection: "column",
      height: "100vh",
      boxShadow: ".7rem 0 1rem rgba(250,0,250,.4)",
      paddingTop: theme.spacing(10),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(7),
      },
      position: "sticky",
      width: "15%",
      top: 0,
    },
    item: {
      display: "flex",
      padding: "0.2rem 1rem",
      paddingTop: theme.spacing(2),
      color: theme.palette.secondary.main,
    },
    text: {
      textTransform: "capitalize",
      paddingLeft: "1rem",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    icon: {
      [theme.breakpoints.down("sm")]: {
        margin: "0 auto",
        paddingTop: theme.spacing(0.5),
      },
    },
  }));
  const classes = usestyles();
  return (
    <>
      <Container className={classes.leftbar}>
        <div className={classes.item}>
          <Home className={classes.icon} />
          <Typography className={classes.text}>homepage</Typography>
        </div>
        <div className={classes.item}>
          <Contactless className={classes.icon} />
          <Typography className={classes.text}>Contactless</Typography>
        </div>
        <div className={classes.item}>
          <Flight className={classes.icon} />
          <Typography className={classes.text}>flight</Typography>
        </div>
        <div className={classes.item}>
          <Email className={classes.icon} />
          <Typography className={classes.text}>email</Typography>
        </div>
        <div className={classes.item}>
          <AddIcCall className={classes.icon} />
          <Typography className={classes.text}>call</Typography>
        </div>
        <div className={classes.item}>
          <AddLocation className={classes.icon} />
          <Typography className={classes.text}>location</Typography>
        </div>
        <div className={classes.item}>
          <Build className={classes.icon} />
          <Typography className={classes.text}>build</Typography>
        </div>
        <div className={classes.item}>
          <Camera className={classes.icon} />
          <Typography className={classes.text}>Camera</Typography>
        </div>
        <div className={classes.item}>
          <Close className={classes.icon} />
          <Typography className={classes.text}>close</Typography>
        </div>
      </Container>
    </>
  );
};
export default Leftbar;
