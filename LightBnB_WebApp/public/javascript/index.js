/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-env jquery */
$(() => {
  getAllListings().then(function(json) {
    propertyListings.addProperties(json.properties);
    views_manager.show('listings');
  });
});