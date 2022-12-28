const contactSchema = require("../Models/Contact");
const nodemailer = require("nodemailer");

const ContactForm = async (req, res) => {
  const { userMessage } = req.body;
  const { mail, message } = userMessage;
  try {
    const contactData = await new contactSchema({
      message,
    });
    await contactData.save();

    // Send User message to clients //
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    var mailOptions = {
      to: [mail],
      subject: "Message from the Mr. Potato Website",
      html: `<h3 style="color: black; font-weight: 700; ">User Message from Mr. Potato NFT Website:</h3>
             <h4 style="color:#ff6600;">${message}</h4>`,
    };
    transporter.sendMail(mailOptions);
    return res.status(200).send({
      mesg: "User message is successfully stored into DataBase",
      data: contactData,
    });
  } catch (error) {
    return res.status(500).send({
      mesg: `Server Error ${error.message}`,
    });
  }
};

const GetTest = async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing Mr. Potato Website",
    message: "The app is working properly!",
  });
};

// "/RemoveMesgMrPotatoById/:id"
const RemoveMesgMrPotatoById = async (req, res) => {
  try {
    let userMessage = await contactSchema.findOneAndDelete({
      _id: req.params.id,
    });
    if (!userMessage) {
      return res.status(400).send({
        message: "User Message not found",
      });
    }
    return res.status(200).send({
      message: "User Message deleted successfully",
      data: contactSchema,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

module.exports = {
  ContactForm,
  GetTest,
  RemoveMesgMrPotatoById,
};
