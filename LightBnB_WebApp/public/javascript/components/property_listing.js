/* eslint-disable camelcase */
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
          ${isReservation
                ? `<p>${moment(property.start_date).format('ll')} - ${moment(property.end_date).format('ll')}</p>`
                : ``}
          <div class='property-listing__reservation'>
            <form class="reservation-form" id="reservation-property-form">
              <button id='reservation-show-controls' class="reservation-form__show">Reserve</button>
              <fieldset class="reservation-form__dates">
                <label for="reservation-form__start-date">Start Date</label>
                <input type="date" name="reservation-form__start-date" placeholder="Start Date" id="reservation-form__start-date" class="reservation-form__input" />
                <label for="reservation-form__end-date">End Date</label>
                <input type="date" name="reservation-form__end-date" placeholder="End Date" id="reservation-form__end-date" class="reservation-form__input" />
                <fieldset class='reservation-form__controls'>
                  <button type='submit' title='${property.title}' property_id=${property.id}' guest='Name' guest_email='email' id="reservation-submit">Submit</button>
                  <button type='reset' id='reservation-cancel'>Cancel</button>
                </fieldset>
              </fieldset>
            </form>
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

  $("body").on("click", '#reservation-show-controls', (event) => {
    event.preventDefault();
    console.log('reservation button clicked', event.target.nextSibling);
    console.log($(event.currentTarget.nextElementSibling).css('visibility') == 'hidden');
    if ($(event.target.nextElementSibling).css('visibility') == 'hidden') {
      $(event.target.nextElementSibling).css('visibility', 'visible');
      $(event.target).css('visibility', 'hidden');
    } else {
      $(event.target.nextElementSibling).css('visibility', 'hidden');
      $(event.target).css('visibility', 'visible');
    }
  });

  $("body").on("click", '#reservation-cancel', event => {
    event.preventDefault();
    console.log('cancel clicked', event.target.parentNode.parentNode.form[0]);
    $('#reservation-property-form').trigger('reset');
    $(event.target.parentNode.parentNode).css('visibility', 'hidden');
    $(event.target.parentNode.parentNode.form[0]).css('visibility', 'visible');
  });
});