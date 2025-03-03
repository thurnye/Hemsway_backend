const router = require('express').Router()

const appRoute = require('./app.routes');
const adminRoute = require('./admin.routes');
const employeesRoute = require('./employees.routes');
const clientRoute = require('./client.routes');
const passportRoute = require('./passport.routes');


router.use('/', appRoute);
router.use('/admin', adminRoute);
router.use('/employee', employeesRoute);
router.use('/client', clientRoute);
router.use('/client', passportRoute);


module.exports = router;
