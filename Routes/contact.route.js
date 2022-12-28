const express = require("express");
const router = express.Router();

const {
  ContactForm,
  GetTest,
  RemoveMesgMrPotatoById,
} = require("../Controllers/ContactController");

router.post("/contact", ContactForm);
router.get("/home", GetTest);
router.delete("/RemoveMesgMrPotatoById/:id", RemoveMesgMrPotatoById);

module.exports = router;
