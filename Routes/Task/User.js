const express =require ('express');
const router =express.Router();
const UserControler = require("../../Controllers/user.controlller"); 
// const authentication =  require("../../Middleware/Auth");
const auth = require('../../Middleware/Auth')

router.post('/login',UserControler.Login);
router.post('/register',UserControler.Register);
router.post('/admin', UserControler.createAdmin);
router.post('/add-revision', auth, UserControler.addRevison);
router.post('/remove-revision', auth, UserControler.removeRevison);

module.exports = router;