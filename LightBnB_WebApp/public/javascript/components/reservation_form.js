/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-env jquery */

$(() => {
  window.reservation = {};

  const createReservation = function(details) {
    return `
      <form action="/properties" method="get" id="reservation-form" class="reservation-form">
        <div class="reservation-form__field-wrapper">
          <label for="reservation-form__city">City</label>
          <h2>${details.title}</h2>
        </div>

        <div class="reservation-form__field-wrapper">
          <label for="reservation-form__start-date">Start Date</label>
          <input type="date" name="reservation-form__start-date" placeholder=Start Date" id="reservation-form__start-date">
          <label for="reservation-form__end-date">End Date</label>
          <input type="date" name="reservation-form__end-date" placeholder="End Date" id="reservation-form__end-date">
        </div>

        <div class="reservation-form__field-wrapper">
          <label for="reservation-form__guest">Guest</label>
          <input type="number" name="reservation-form__guest" placeholder="Guest Name" id="reservation-form__guest">
        </div>

        <div class="reservation-form__field-wrapper">
          <label for="reservation-form__guest-email">Guest</label>
          <input type="number" name="reservation-form__guest-email" placeholder="Guest Email" id="reservation-form__guest-email">
        </div>

        <div class="reservation-form__field-wrapper">
          <button>Reserve</button>
          <a id="reservation-form__cancel" href="#">Cancel</a>
        </div>
      </form>`;
  };
  window.reservation.createReservation = createReservation;

  const $reserveProperty =
  $(`
    <form action="/properties" method="get" id="reservation-form" class="reservation-form">
      <div class="reservation-form__field-wrapper">
        <label for="reservation-form__city">City</label>
      </div>

      <div class="reservation-form__field-wrapper">
        <label for="reservation-form__start-date">Start Date</label>
        <input type="date" name="reservation-form__start-date" placeholder=Start Date" id="reservation-form__start-date">
        <label for="reservation-form__end-date">End Date</label>
        <input type="date" name="reservation-form__end-date" placeholder="End Date" id="reservation-form__end-date">
      </div>

      <div class="reservation-form__field-wrapper">
        <label for="reservation-form__guest">Guest</label>
        <input type="number" name="reservation-form__guest" placeholder="Guest Name" id="reservation-form__guest">
      </div>

      <div class="reservation-form__field-wrapper">
        <label for="reservation-form__guest-email">Guest</label>
        <input type="number" name="reservation-form__guest-email" placeholder="Guest Email" id="reservation-form__guest-email">
      </div>

      <div class="reservation-form__field-wrapper">
        <button>Reserve</button>
        <a id="reservation-form__cancel" href="#">Cancel</a>
      </div>
    </form>
  `);
  
  window.$reserveProperty = $reserveProperty;
});