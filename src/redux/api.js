import axios from "axios";

export const loadUsersApi = async () => await axios.get('https://redux-saga-curd.herokuapp.com/users/api');
export const createUsersApi = async (user) => await axios.post('https://redux-saga-curd.herokuapp.com/users/api', user);
export const deleteUsersApi = async (userId) => await axios.delete(`https://redux-saga-curd.herokuapp.com/users/api/${userId}`);
export const updateUsersApi = async (userId, userInfo) => await axios.put(`https://redux-saga-curd.herokuapp.com/users/api/${userId}`, userInfo);
