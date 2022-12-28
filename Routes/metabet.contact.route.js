const express = require("express");
const router = express.Router();

const {
  MetaBetContactForm,
  MetaBetGetTest,
  RemoveMesgMetaById,
} = require("../Controllers/MetaBetContactController");

router.post("/metaBetContact", MetaBetContactForm);
router.get("/metaBetHome", MetaBetGetTest);
router.delete("/removeMesgMetaById/:id", RemoveMesgMetaById);

module.exports = router;
