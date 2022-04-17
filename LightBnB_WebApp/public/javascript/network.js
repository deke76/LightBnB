/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const getMyDetails = function() {
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
  return $.ajax({
    method: "POST",
    url: "/api/properties",
    data,
  });
};

const deleteProperty = function(data) {
  return $.ajax({
    method: "DELETE",
    url: "/api/properties",
    data,
  });
};

const submitReservation = function(data) {
  let url = "api/reservations";
  return $.ajax({
    method: "POST",
    url,
    data,
  });
};

const cancelReservation = function(data) {
  let url = `/api/reservations`;
  return $.ajax({
    method: "DELETE",
    url,
    data,
  });
};