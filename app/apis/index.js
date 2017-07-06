let api = {
  fetchHelloMessage() {
    //Would be an actual api call using fetch library. fetch('/someUrl', {method: 'POST'})
    // return fetch('').then((response) => {
    //   return response.json();
    // });
    return new Promise((resolve) => setTimeout(resolve, 500)).then(() => {
      return 'Hello There';
    });
  }
};

export default api;
