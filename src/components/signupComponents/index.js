import React from "react";

import { Container } from "semantic-ui-react/dist/commonjs";

// Component
import Signup from "./signupComponent/signup";
import Negative from "../negativeComponent";
import Positive from "../positiveComponent";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      negativeMessage: false,
      negativeText: undefined,

      positiveMessage: false,
      positiveText: undefined
    };
  }

  negativeFunction = (flag, text) => {
    this.setState({
      negativeMessage: flag,
      negativeText: text
    });
  };

  positiveFunction = (flag, text) => {
    this.setState({
      positiveMessage: flag,
      positiveText: text
    });
  };

  callSignupAction = (userName, userEmail, userPassword) => {
    this.props.postSignup(userName, userEmail, userPassword);
  };

  render() {
    return (
      <Container>
        <h1
          style={{
            color: "#7a52c0",
            textAlign: "center",
            fontSize: "35px",
            paddingTop: "70px",
            paddingBottom: "40px"
          }}
        >
          Signup
        </h1>

        {this.state.negativeMessage ? (
          <Container text style={{ marginBottom: "10px" }}>
            <Negative negativeText={this.state.negativeText} />
          </Container>
        ) : null}

        {this.state.positiveMessage ? (
          <Container text style={{ marginBottom: "10px" }}>
            <Positive positiveText={this.state.positiveText} />
          </Container>
        ) : null}

        <Signup
          signupReducer={this.props.signupReducer}
          negativeFunction={this.negativeFunction}
          positiveFunction={this.positiveFunction}
          callSignupAction={this.callSignupAction}
          parentState={this.state}
        />
      </Container>
    );
  }
}
