const { Pool } = require('pg');

const pool = new Pool({
  user: 'darcy',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  let values = [email];
  let stringQuery = `SELECT * FROM users WHERE email = $1`;

  return pool
    .query(stringQuery, values)
    .then((result) => result.rows[0])
    .catch((err) => console.log(err.message));
};
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  let values = [id];
  let stringQuery = `SELECT * FROM users WHERE id = $1`;

  return pool
    .query(stringQuery, values)
    .then((result) => result.rows[0])
    .catch((err) => console.log(err.message));
};
exports.getUserWithId = getUserWithId;

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  let values = [user.name, user.email, user.password];
  let stringQuery = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;`;

  return pool
    .query(stringQuery, values)
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
};
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guestID, limit = 10) {
  let values = [guestID, limit];
  let stringQuery = `
  SELECT * FROM properties
  JOIN reservations ON property_id = properties.id
  WHERE guest_id = $1 
  LIMIT $2;`;

  return pool
    .query(stringQuery, values)
    .then((result) => result.rows)
    .catch((err) => console.log(err.message));
};
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 **/
const getAllProperties = function(options, limit = 10) {
  const values = [];

  let stringQuery = `
  SELECT properties.*, avg(property_reviews.rating) as average_rating 
  FROM properties
  LEFT JOIN property_reviews ON property_id = properties.id
  WHERE 1 = 1`;

  if (options.owner_id) {
    values.push(options.owner_id);
    stringQuery += ` AND properties.owner_id = $${values.length}`;
  }
  if (options.city) {
    values.push(`%${options.city}%`);
    stringQuery += ` AND city LIKE $${values.length}`;
  }
  
  if (options.minimum_price_per_night) {
    values.push(options.minimum_price_per_night * 100);
    stringQuery += ` AND cost_per_night >= $${values.length}`;
  }

  if (options.maximum_price_per_night) {
    values.push(options.maximum_price_per_night * 100);
    stringQuery += ` AND cost_per_night <= $${values.length}`;
  }

  stringQuery += ` GROUP BY properties.id`;
  
  if (options.minimum_rating) {
    values.push(options.minimum_rating);
    stringQuery += ` HAVING avg(property_reviews.rating) >= $${values.length}`;
  }
  
  values.push(limit);
  stringQuery += `
  ORDER BY cost_per_night
  LIMIT $${values.length};`;
  console.log(stringQuery, values[0], values[1]);
  return pool
    .query(stringQuery, values)
    .then((result) => result.rows)
    .catch((err) => console.log(err.message));
};
exports.getAllProperties = getAllProperties;


/**
 * Get user properties.
 * @param {{string}} ownerID An object containing query options.
 * @return {Promise<[{}]>}  A promise to the properties.
 **/
const getUserProperties = function(ownerID) {
  const values = [ownerID];
  const stringQuery =
    `SELECT * FROM PROPERTIES WHERE owner_id = $1;`;

  return pool
    .query(stringQuery, values)
    .then(result => result.rows)
    .catch(err => console.log(err.message));
};
exports.getUserProperties = getUserProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  let values = Object.values(property);
  let keys = Object.keys(property);
  let stringQuery = `
  INSERT INTO properties (${keys[0]}, ${keys[1]}, ${keys[2]}, ${keys[3]}, ${keys[4]}, ${keys[5]}, ${keys[6]}, ${keys[7]}, ${keys[8]}, ${keys[9]}, ${keys[10]}, ${keys[11]}, ${keys[12]}, ${keys[13]})
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
  RETURNING *;`;

  console.log(property);
  console.log(keys);
  return pool
    .query(stringQuery, values)
    .then((result) => console.log(result))
    .catch((err) => console.log('catch',err.message));
};
exports.addProperty = addProperty;
