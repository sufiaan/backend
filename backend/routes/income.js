//income stuff

//kyler stuff
app.get('/income', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error inserting data.")
        } else {
          res.send(data,'income info is added to the database');
        }
    });
  });

  app.post('/income', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error inserting data.")
        } else {
          res.send(data,'income info is added to the database');
        }
    });
  });

  app.put('/income', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error updating data.")
        } else {
          res.send(data,'income info is updated in the database');
        }
    });
  });

  app.delete('/income', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error removing data.")
        } else {
          res.send(data,'income info is removed from the database');
        }
    });
  });