import React, { Component } from "react";
import Appbar from "./Appbar";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getlist } from "../containers/actions/userActions";
import Card from "./Card";
import { Block } from "styled-loaders-react";
class Dashboard extends Component {
  state = {
    loading: true,
  };
  componentDidMount = () => {
    this.updatestate();
    // setTimeout(() => {
    //   this.setState({
    //     loading: false,
    //   });
    // }, 2000);
    // this.setState({ loading: true });
  };
  

  updatestate = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ latitude: 13.012345, longitude: 80.123456 }),
    };
    fetch(
      "https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        this.props.getlist(data.listRestaurants);
        this.setState({ loading: false });
      });
  };

  render() {
    return (
      <div>
        <Appbar />
        <Grid
          container
          spacing={2}
          style={{
            marginTop: 80,
            display: "flex",
            justifyContent: "space-between",
          }}>
            {this.state.loading ? (
              <Block color="black" />
            ) : (
              <>
                {this.props.user.hotel_list.map(
                  (product, index) => (
                    <Grid key={index} item xs={6} md={3}>
                      <Card product={product} />
                    </Grid>
                  )
                )}
              </>
            )}
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getlist })(withRouter(Dashboard));
