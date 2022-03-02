//worker stuff
app.get('/worker', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error inserting data.")
        } else {
          res.send(data,'worker info is added to the database');
        }
    });
  });

  app.post('/worker', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error inserting data.")
        } else {
          res.send(data,'worker info is added to the database');
        }
    });
  });

  app.put('/worker', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error updating data.")
        } else {
          res.send(data,'worker info is updated in the database');
        }
    });
  });

  app.delete('/worker', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error removing data.")
        } else {
          res.send(data,'worker info is removed from the database');
        }
    });
  });