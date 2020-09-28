import axios from "axios";
import authActions from "./authActions"

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const setToken = token => (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
const unSetToken = () => (axios.defaults.headers.common.Authorization = " ");

const register = credentials => dispatch => {
    dispatch(authActions.registerRequest())

    axios
        .post('/users/signUp', credentials)
        .then(response => {
            console.log(response.data)
            setToken(response.data.token)
            dispatch(authActions.registerSuccess(response.data))
            setToken(response.data.token)
        })
            .catch(error => dispatch(authActions.registerError(error)))
    
}

const logIn = credentials => dispatch => {
    dispatch(authActions.loginRequest());

    axios
        .post('/users/login', credentials)
        .then(response => {
          console.log(response)
          setToken(response.data.token);
            dispatch(authActions.loginSuccess(response.data))
            
        })
    .catch(error => dispatch(authActions.loginError(error.message)))
}




const logOut = () => dispatch => {
    dispatch(authActions.logoutRequest())
    axios
    .post('/users/logout')
        .then(() => {
           unSetToken()
            dispatch(authActions.logoutSuccess());
})
.catch(error => dispatch(authActions.logoutError(error.message)))
}


const currentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  setToken(persistedToken);
  dispatch(authActions.getCurrentUserRequest());
  axios
    .get("/users/current")
    .then((res) => {
      dispatch(authActions.getCurrentUserSuccess(res.data));
    })
    .catch((error) => dispatch(authActions.getCurrentUserError(error.message)));
};

export default {
    register,logIn,logOut,currentUser
}