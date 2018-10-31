import getQueryString from "./paramParser";

// Base Url
const host = "https://twitter-auth-sushantlp.c9users.io/";

export default {
  postSignupApi: (name, email, password) => {
    return new Promise((resolve, reject) => {
      fetch(
        host +
          "api/v1/signup?" +
          getQueryString({
            email: email,
            name: name,
            password: password
          }),
        {
          method: "POST"
        }
      ).then(response => {
        response.json().then(signup => resolve(signup));
      });
    });
  }
};
