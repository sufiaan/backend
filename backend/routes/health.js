//health stuff
app.get('/health', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error inserting data.")
        } else {
          res.send(data,'health info is added to the database');
        }
    });
  });

  app.post('/health', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error inserting data.")
        } else {
          res.send(data,'health info is added to the database');
        }
    });
  });

  app.put('/health', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error updating data.")
        } else {
          res.send(data,'health info is updated in the database');
        }
    });
  });

  app.delete('/health', (req, res, next) => {
    FamilyModel.create(req.body, (error, data) => {
        if (error) {
          return next(error, "Error removing data.")
        } else {
          res.send(data,'income info is removed from the database');
        }
    });
  });