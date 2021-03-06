var express = require('express');
var router = express.Router();

// Appel des controllers
const UserController = require('../controllers/user');
const BulletinController = require('../controllers/bulletin');

// Appel du middleware isAdmin
const isAdmin = require('../middlewares/isAdmin');

/* Get All Users */
router.get('/', isAdmin, UserController.getAllUsers);

/* Get Profile */
router.get('/profiles/:id', UserController.getUserProfile);

/* Register */
router.post('/', UserController.registerUser);

/* Update User */
router.put('/profiles/:id', UserController.updateUserProfile);

/* Delete User */
router.delete('/profiles/:id', UserController.deleteUserById);

// Custom routes

/* Get User courses */
router.get('/:idUser/courses', UserController.getUserCourses)

/* Get User courses */
router.get('/:idUser/courses', UserController.getUserCourses)

/* Get User reports stats */
router.get('/:idUser/reports/stats', BulletinController.getReportStatsByUser);

module.exports = router;
