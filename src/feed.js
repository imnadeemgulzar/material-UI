import { Add, RadioButtonUnchecked } from "@material-ui/icons";
import {
  Button,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { RadioButtonUncheckedTwoTone } from "@material-ui/icons";

const Feed = () => {
  const [open, setopen] = useState(false);
  const usestyles = makeStyles((theme) => ({
    feed: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "2rem",
      flex: "0 0 60%",
      paddingTop: theme.spacing(12),
      [theme.breakpoints.down("sm")]: {
        flex: "0 0 90%",
        paddingTop: theme.spacing(10),
      },
    },
    img: {
      height: "20rem",
      [theme.breakpoints.down("sm")]: {
        height: "10rem",
      },
    },
    card: {
      marginBottom: theme.spacing(10),
    },
    add: {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "1rem",
      color: "#fff",
      position: "fixed",
      right: "30%",
      bottom: 20,
      [theme.breakpoints.down("sm")]: {
        right: 20,
      },
    },
    title: {
      width: "100%",
      marginBottom: theme.spacing(4),
    },
    form: {
      padding: theme.spacing(2),
    },
    container: {
      height: "25rem",
      width: "25rem",
      zIndex: 10,
      margin: "10rem auto",
      backgroundColor: "white",
      [theme.breakpoints.down("sm")]: {
        height: "30rem",
        width: "15rem",
      },
    },
    btn: {
      margin: "0 1rem",
      [theme.breakpoints.down("sm")]: {
        margin: ".5rem",
      },
    },
    viewer: {
      marginBottom: theme.spacing(4),
    },
  }));
  const classes = usestyles();
  return (
    <>
      <Container className={classes.feed}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.img}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdPJ5-VNm8Dg58K44epzRmL80EbUSkBXfdw&usqp=CAU"
            ></CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                className={classes.cardtext}
              >
                hello
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis placeat cumque corporis sint modi ad vel nihil illo
                voluptatem enim. Lorem ipsum dolor sit amet consectetur Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                placeat cumque corporis sint modi ad vel nihil illo voluptatem
                enim. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis placeat cumque corporis sint modi ad vel nihil illo
                voluptatem enim.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button color="primary" size="small">
              share
            </Button>
            <Button color="primary" size="small">
              click
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.img}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnbMl6sT_4yoG5Y-tO3879v32wtgGUpDe3A&usqp=CAU"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5">
                hello
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis placeat cumque corporis sint modi ad vel nihil illo
                voluptatem enim. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Blanditiis placeat cumque corporis sint modi
                ad vel nihil illo voluptatem enim. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Blanditiis nihil illo voluptatem
                enim.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button color="primary" size="small">
              share
            </Button>
            <Button color="primary" size="small">
              click
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.img}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdPJ5-VNm8Dg58K44epzRmL80EbUSkBXfdw&usqp=CAU"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5">
                hello
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis placeat cumque corporis sint modi ad vel nihil illo
                voluptatem enim. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Blanditiis placeat cumque corporis sint modi
                ad vel nihil illo voluptatem enim. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Blanditiis placea nihil illo
                voluptatem enim.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button color="primary" size="small">
              share
            </Button>
            <Button color="primary" size="small">
              click
            </Button>
          </CardActions>
        </Card>
        <Tooltip title="Add" aria-label="top">
          <Add
            className={classes.add}
            onClick={() => {
              setopen(true);
            }}
          />
        </Tooltip>
        <Modal open={open}>
          <Container className={classes.container}>
            <form className={classes.form}>
              <TextField
                className={classes.title}
                placeholder="title"
              ></TextField>
              <TextField
                className={classes.title}
                placeholder="your story"
              ></TextField>
              <Container className={classes.viewer}>
                <Typography variant="h6">who can view your story</Typography>
                <RadioGroup>
                  <FormControlLabel
                    value="everyone"
                    control={<Radio />}
                    label="everyone"
                  />
                  <FormControlLabel
                    value="my friends"
                    control={<Radio />}
                    label="my friends"
                  />
                  <FormControlLabel
                    value="nobody"
                    control={<Radio />}
                    label="nobody"
                  />
                </RadioGroup>
              </Container>
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                className={classes.btn}
                onClick={() => setopen()}
              >
                submit
              </Button>
              <Button
                color="primary"
                variant="outlined"
                size="small"
                className={classes.btn}
                onClick={() => setopen(false)}
              >
                cancel
              </Button>
            </form>
          </Container>
        </Modal>
      </Container>
    </>
  );
};
export default Feed;
