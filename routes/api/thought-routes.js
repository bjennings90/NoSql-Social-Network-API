const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction

} = require('../../controllers/thought-controllers');

// Set up GET all and POST at /api/thoughts
router.route('/')
    .get(getAllThought)
    .post(addThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

//Set up POST at /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

//Set up DELETE at /api/thoughts/:thoughtId/reactions:reactionId
router.route('/:thoughtId/reactions/reactionId').delete(removeReaction);

module.exports = router;