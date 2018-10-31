import React from "react";

import { Container } from "semantic-ui-react/dist/commonjs";

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

  render() {
    return (
      <Container>
        <a href="https://twitter-auth-sushantlp.c9users.io/api/v1/auth/twitter">
          Log In with Twitter
        </a>
      </Container>
    );
  }
}
