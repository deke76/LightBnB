module.exports = function(router, database) {

  router.get('/properties', (req, res) => {
    database.getAllProperties(req.query, 20)
      .then(properties => res.send({properties}))
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  router.post('/properties', (req, res) => {
    const userId = req.session.userId;
    database.addProperty({...req.body, owner_id: userId})
      .then(property => {
        // console.log(property);
        res.send(property);
      })
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  router.delete('/properties', (req, res) => {
    console.log(req.body.property_id);
    const userId = req.session.userId;
    database.deleteProperty(req.body.property_id)
      .then(() => res.send({message: 'Property deleted', user_id: userId}))
      .catch(e => {
        console.log(e);
        res.send(e);
      });
  });

  router.get('/reservations', (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.error("💩");
      return;
    }
    database.getAllReservations(userId)
      .then(reservations => res.send({reservations}))
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  router.post('/reservations', (req, res) => {
    const userId = req.session.userId;
    database.addReservation({...req.body, guest_id: userId})
      .then(reservation => {
        res.send(reservation);
      })
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  router.delete('/reservations', (req, res) => {
    console.log(req.body);
    const userId = req.session.userId;
    database.cancelReservation({...req.body, guest_id: userId})
      .then(() => res.send("Reservation cancelled"))
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });

  return router;
};