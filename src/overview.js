import Leftbar from "./leftbar";
import Feed from "./feed";
import Rightbar from "./rightbar";
import { makeStyles } from "@material-ui/core/styles";

const Overview = () => {
  const usestyles = makeStyles((theme) => ({
    overview: {
      color: "#777",
      display: "flex",
      backgroundColor: "white",
    },
  }));
  const classes = usestyles();
  return (
    <>
      <div className={classes.overview}>
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};
export default Overview;
