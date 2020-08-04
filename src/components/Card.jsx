import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import StarRatings from 'react-star-ratings';

const useStyles = makeStyles({
  root: {
    // width: 349,
    height: 580,
  },

  CardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  media: {
    height: 400,
  },
  titlecss:{
    whiteSpace: "nowrap",
    width: "18rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  
});

function MediaCard(props) {
  const classes = useStyles();

  function AddCartClick() {
    console.log("l");
  }

  return (
    
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            style={{ width: "16rem", margin: "auto" }}
            className={classes.media}
            image={props.product.restaurantImage}
            // image={require("../assets" + props.product.restaurantImage)}
          />
          <CardContent className={classes.CardContent}>
            <Typography gutterBottom variant="body2" title={props.product.restaurantName} className={classes.titlecss}>
              {props.product.restaurantName}
            </Typography>
            <Typography
              gutterBottom
              className={classes.titlecss}
              variant="body2"
              title={props.product.longDescription}>
              {props.product.shortDescription}
            </Typography>
            <div 
              style={{ display: "flex", flexDirection: "row" }}>
              <Typography variant="body1">
                {props.product.displayCostForTwo}
              </Typography>
            </div>
            <StarRatings
        rating={parseFloat(props.product.averageReview)}
          starRatedColor="blue"
          numberOfStars={6}
          starDimension="12px"
        starSpacing="5px"
          name='rating'
        />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="contained"
            style={{
              color: "#FFFFFF",
              backgroundColor: "black",
              borderRadius: "5px",
              width: "100%",
            }}
            onClick={() => AddCartClick()}>
            Order
          </Button>
        </CardActions>
      </Card>
  
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withRouter(MediaCard));
