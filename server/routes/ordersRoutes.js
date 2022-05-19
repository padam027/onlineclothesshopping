const router = require('express').Router()
const ordersController = require('../controllers/ordersController')


router.get('/', ordersController.getOrders)

router.post('/', ordersController.postOrders)

    
router.put('/', ordersController.updateOrders)
        
    
router.delete('/',ordersController.deleteOrders)

module.exports = router
            