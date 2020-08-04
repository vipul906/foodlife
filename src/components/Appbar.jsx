import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "../containers/actions/userActions";
import HomeIcon from "@material-ui/icons/Home";

import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),

    height: "50%",
  },
  title: {
    flexGrow: 1,
  },
}));

function PrimarySearchAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar style={{ position: "fixed", backgroundColor: "#000000" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="home">
            <HomeIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            Food Life
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withRouter(PrimarySearchAppBar));
