//j'import mon parametrage Axios
import Axios from "../api/axios";
//////////////////////////////////////////////
//gestion de ma connexion à l'API/////////////
//////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Authentification//
/////////////////////////////////////////////////////////////////////////////////////////////////////
let signin = (data) => {
  return Axios.post("/auth/signin/", data);
};
let signup = (data) => {
  return Axios.post("/auth/signup/", data);
};
let signout = () => {
  return Axios.get(`/auth/signout/`);
};

let forgotPassword = (data) => {
  return Axios.post("/user/reset-password", data);
};

let resetPassword = (data, id, Token) => {
  return Axios.post(`/user/reset-password/${id}/${Token}`, data);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Users//
/////////////////////////////////////////////////////////////////////////////////////////////////////

let showAllUsers = () => {
  return Axios.get(`/user/`);
};
let showProfileUser = (id) => {
  return Axios.get(`/user/${id}`);
};
let UpdateProfilUser = (data, id) => {
  return Axios.put(`/user/${id}`, data);
};

let uploadAvatarUser = (data, id) => {
  return Axios.put(`/user/avatar/${id}`, data);
};
let userUpdateEmail = (data, id) => {
  return Axios.post(`/user/email/${id}`, data);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
//Botanists//
/////////////////////////////////////////////////////////////////////////////////////////////////////

let showAllBotanists = () => {
  return Axios.get(`/waiting-list/`);
};
let showProfileBotanist = (id) => {
  return Axios.get(`/waiting-list/${id}`);
};
let UpdateProfilBotanist = (data, id) => {
  return Axios.put(`/waiting-list/${id}`, data);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
//plants//
/////////////////////////////////////////////////////////////////////////////////////////////////////

let createPlant = (dataPlant, option) => {
  return Axios.post(`/plant`, dataPlant, option);
};

let showAllPlants = () => {
  return Axios.get(`/plant/my`);
};
let showDetailsPlant = (id) => {
  return Axios.get(`/plant/${id}`);
};
let UpdateDetailsPlant = (data, id) => {
  return Axios.put(`/plant/${id}`, data);
};

/////////////////////////////////////////////////////////////////////////////////////////////////////
//offers//
/////////////////////////////////////////////////////////////////////////////////////////////////////

let createOffers = (data) => {
  return Axios.post(`/offer/`, data);
};
let showAllOffers = () => {
  return Axios.get(`/offer/`);
};

export const accountService = {
  //Authentification//
  signup,
  signin,
  signout,
  forgotPassword,
  resetPassword,
  //Users//
  showAllUsers,
  showProfileUser,
  UpdateProfilUser,
  uploadAvatarUser,
  userUpdateEmail,
  //Botanist//
  showAllBotanists,
  showProfileBotanist,
  UpdateProfilBotanist,
  //Plants//
  createPlant,
  showAllPlants,
  showDetailsPlant,
  UpdateDetailsPlant,
  //offer//
  createOffers,
  showAllOffers,
};
