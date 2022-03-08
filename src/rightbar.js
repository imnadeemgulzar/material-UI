import {
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Rightbar = () => {
  const usestyles = makeStyles((theme) => ({
    rightbar: {
      paddingTop: theme.spacing(10),
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      position: "sticky",
      height: "100vh",
      width: "auto",
      top: 0,
    },
    gallerytext: {
      textAlign: "center",
      marginBottom: theme.spacing(3),
      textTransform: "capitalize",
      color: theme.palette.secondary.dark,
    },
  }));
  const classes = usestyles();
  return (
    <>
      <Container className={classes.rightbar}>
        <Typography variant="h4" className={classes.gallerytext}>
          image gallery
        </Typography>
        <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={200}>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdPJ5-VNm8Dg58K44epzRmL80EbUSkBXfdw&usqp=CAU"
              alt="title"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnbMl6sT_4yoG5Y-tO3879v32wtgGUpDe3A&usqp=CAU"
              alt="title"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdPJ5-VNm8Dg58K44epzRmL80EbUSkBXfdw&usqp=CAU"
              alt="title"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnbMl6sT_4yoG5Y-tO3879v32wtgGUpDe3A&usqp=CAU"
              alt="title"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdPJ5-VNm8Dg58K44epzRmL80EbUSkBXfdw&usqp=CAU"
              alt="title"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcnbMl6sT_4yoG5Y-tO3879v32wtgGUpDe3A&usqp=CAU"
              alt="title"
              loading="lazy"
            />
          </ImageListItem>
          ))
        </ImageList>
      </Container>
    </>
  );
};
export default Rightbar;
