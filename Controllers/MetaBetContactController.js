const metaBetContactSchema = require("../Models/MetaBetContact");
const nodemailer = require("nodemailer");

const MetaBetContactForm = async (req, res) => {
  const { userMessage } = req.body;
  const { mail, message } = userMessage;
  try {
    const metaContactData = await new metaBetContactSchema({
      message,
    });
    await metaContactData.save();

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
      subject: "Message from MetaBet Website",
      html: `<h3 style="color: black; font-weight: 700; ">User Message from MetaBetMask Website:</h3>
             <h4 style="color:#ff6600;">${message}</h4>`,
    };
    transporter.sendMail(mailOptions);
    return res.status(200).send({
      mesg: "User message is successfully stored into DataBase",
      data: metaContactData,
    });
  } catch (error) {
    return res.status(500).send({
      mesg: `Server Error ${error.message}`,
    });
  }
};

const MetaBetGetTest = async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing from MetaBet Backend",
    message: "The app is working properly!",
  });
};

// "/removeMesgMetaById/:id"
const RemoveMesgMetaById = async (req, res) => {
  try {
    let userMessage = await metaBetContactSchema.findOneAndDelete({
      _id: req.params.id,
    });
    if (!userMessage) {
      return res.status(400).send({
        message: "User Message not found",
      });
    }
    return res.status(200).send({
      message: "User Message deleted successfully",
      data: metaBetContactSchema,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Server Error",
    });
  }
};

module.exports = {
  MetaBetContactForm,
  MetaBetGetTest,
  RemoveMesgMetaById,
};
