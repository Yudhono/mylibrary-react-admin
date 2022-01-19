import Mbaas from "./mbaasProvider";

let id = null;
let email = null;
const client = Mbaas.client;

const authProvider = {
  // called when the user attempts to log in
  login: async ({ username, password }) => {
    const { data, error } = await client.auth.login("local", {
      email: username,
      password: password,
    });

    if (!error) {
      localStorage.setItem("username", username);
      // accept all username/password combinations
      return Promise.resolve();
    } else {
      // throw new Error();
      console.log(error);
      return Promise.reject("cannot login.");
    }
  },
  // called when the user clicks on the logout button
  logout: async () => {
    client.user.logout();
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: async () => {
    const { error } = await client.user.get();
    if (error && (error.status === 401 || error.status === 403)) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: async () => {
    const { error } = await client.user.get();
    const isLoggedIn = client.user.isLoggedIn;
    return isLoggedIn && !error ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: async () => {
    const { data } = await client.user.get();
    id = data.id;
    email = data.email;
    return data ? Promise.resolve(data.roles) : Promise.reject();
  },
  id: () => id,
  email: () => email,
};

export default authProvider;
