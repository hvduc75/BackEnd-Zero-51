import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeController.getHomePage);
  router.get('/detail/user/:id', homeController.getDetailPage);
  router.post('/create-new-user', homeController.createNewUser);
  router.post('/delete-user', homeController.deleteUser);
  router.get('/edit-user/:id', homeController.getEditPage);
  router.post('/update-user', homeController.UpdateUser);
  router.get("/about", (req, res) => {
    res.send('hello world');
  });

  return app.use('/', router);
};

export default initWebRoute;
