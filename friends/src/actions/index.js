import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const ADD_FRIEND = 'ADD_FRIEND';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post('http://localhost:5000/api/login', creds).then(res => {
    localStorage.setItem('token', res.data.payload);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.payload });
    axios
      .get('http://localhost:5000/api/friends', {
        headers: { Authorization: localStorage.getItem('token') }
      })
      .then(res => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  });
};

export const addFriend = friend => dispatch => {
  axios
    .post('http://localhost:5000/api/friends', friend, {
      headers: { Authorization: localStorage.getItem('token')}})
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

