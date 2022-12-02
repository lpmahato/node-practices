const router = require('express').Router();

// Default route
router.get('/', (req, res) => {
    res.send({ message: 'Hello World' });
});

module.exports = router;
