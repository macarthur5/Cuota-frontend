export default {
  post: function <T>(url: RequestInfo, options: RequestInit) {
    return new Promise<T>((resolve) => {
      fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        ...options,
      }).then((response) => {
        resolve(response.json() as Promise<T>);
      });
    });
  },

  get: function <T>(url: RequestInfo, options: RequestInit) {
    return new Promise<T>((resolve) => {
      fetch(url, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        ...options,
      }).then((response) => {
        resolve(response.json() as Promise<T>);
      });
    });
  },
};
