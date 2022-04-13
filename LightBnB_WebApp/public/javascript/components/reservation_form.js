/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-env jquery */

$(() => {

  const $reservationForm = $(`
  <form action="/properties" method="get" id="reservation-form" class="reservation-form">
      <div class="reservation-form__field-wrapper">
        <label for="reservation-form__city">City</label>
        <input type="text" name="city" placeholder="City" id="reservation-form__city">
      </div>

      <div class="reservation-form__field-wrapper">
        <label for="reservation-form__minimum-price-per-night">Start Date</label>
        <input type="date" name="start-date" placeholder=Start Date" id="reservation-form__start-date">
        <label for="reservation-form__end-date">End Date</label>
        <input type="date" name="end-date" placeholder="End Date" id="reservation-form__end-date">
      </div>

      <div class="reservation-form__field-wrapper">
        <label for="reservation-form__minimum-rating">Minimum Rating</label>
        <input type="number" name="minimum_rating" placeholder="Minimum Rating" id="reservation-form__minimum-rating">
      </div>

      <div class="reservation-form__field-wrapper">
          <button>Reserve</button>
          <a id="reservation-form__cancel" href="#">Cancel</a>
      </div>
    </form>
  `);

  window.$reservationForm = $reservationForm;

  $('body').on('click', '#reservation-form__cancel', function() {


    views_manager.show('listings');
    return false;
  });

});