/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const getMyDetails = function() {
  console.log("getMyDetails");
  return $.ajax({
    url: "/users/me",
  });
};

const logOut = function() {
  return $.ajax({
    method: "POST",
    url: "/users/logout",
  });
};

const logIn = function(data) {
  return $.ajax({
    method: "POST",
    url: "/users/login",
    data
  });
};

const signUp = function(data) {
  return $.ajax({
    method: "POST",
    url: "/users",
    data
  });
};

const getAllListings = function(params) {
  let url = "/api/properties";
  if (params) {
    url += "?" + params;
  }
  return $.ajax({
    url,
  });
};

const getAllReservations = function() {
  let url = "/api/reservations";
  return $.ajax({
    url,
  });
};

const submitProperty = function(data) {
  console.log(data);
  return $.ajax({
    method: "POST",
    url: "/api/properties",
    data,
  });
};