import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

const AppBarComponent = () => {
  const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(2),
    },
    root: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" xs={12}>
        <Toolbar>
          <IconButton>
            <FormatListBulletedIcon edge="start" fontSize="large" />
          </IconButton>
          <Typography className={classes.title}>TODO App</Typography>
          <IconButton>
            <Brightness7Icon></Brightness7Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarComponent;
