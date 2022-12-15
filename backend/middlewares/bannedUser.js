const { BannedUserModel } = require("../models/banneduser.model");

const banneduserCheck = async (req, res, next) => {
  const { email } = req.body;

  try {
    const IsBanned = await BannedUserModel.findOne({ email });

    if (IsBanned) return res.status(410).send({ msg: "User is banned" });

    next();
  } catch (err) {
    res.send({ msg: "Something went wrong" });
  }
};
module.exports={banneduserCheck}
