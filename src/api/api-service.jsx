const apiUrl = `${process.env.REACT_APP_API_URL}`


export const ApiRequest = (variables, endUrl, apiMethod, token, id) => {

  if (id === "apiWithImage") {
    var init = {
      method: "post",
      body: variables,
    };
  } else {
    init =
      apiMethod === "GET"
        ? {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            // authorization: token ? token : ""
          },
        }
        : {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // authorization: token ? token : "",
          },
          body: JSON.stringify(variables),
        };
  }

  return fetch(apiUrl + endUrl, init)
    .then((res) =>
      res.json().then((data) => {
        const token = localStorage.getItem("_jw_token")
          ? "Bearer " + localStorage.getItem("_jw_token")
          : "";
        if (res.status === 503) {
          var apiData = {
            status: res.status,
            data: data,
          };
        } else {
          var apiData = {
            status: res.status,
            data: data,
          };
        }
        return apiData;
      })
    )
    .catch((err) => {
      var apiData = {
        status: 900,
        data: "Please check your internet connection",
      };
      return apiData;
    });
};


