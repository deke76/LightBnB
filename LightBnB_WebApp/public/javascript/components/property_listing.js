/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-env jquery */

$(() => {
  window.propertyListing = {};
  
  const createListing = function(property, isReservation) {
    return `
    <article class="property-listing">
      <header class="property-listing__heading">
        <h3>${property.title}</h3>
      </header>
      <section class="property-listing__content">
        <div class="property-listing__preview-image">
          <img src="${property.thumbnail_photo_url}" alt="house" />
        </div>
        <div class="property-listing__details">  
          <ul class="property-listing__details__list">
            <li>Bedrooms: ${property.number_of_bedrooms}</li>
            <li>Bathrooms: ${property.number_of_bathrooms}</li>
            <li>Parking Spaces: ${property.parking_spaces}</li>
          </ul>
          <div class='property-listing_reservation'>
            ${isReservation
                ? `<p>${moment(property.start_date).format('ll')} - ${moment(property.end_date).format('ll')}</p>`
                : ``}
            <button type='submit' value="Submit">Reserve</>
          </div>
        </div>
      </section>
      <footer class="property-listing__footer">
        <div class="property-listing__rating">${Math.round(property.average_rating * 100) / 100} / 5 stars</div>
        <div class="property-listing__price">$${property.cost_per_night / 100.0} / night</div>
      </footer>
    </article>
    `;
  };

  window.propertyListing.createListing = createListing;

});