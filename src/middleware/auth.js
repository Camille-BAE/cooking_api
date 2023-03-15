const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token)
    return res
      .status(403)
      .send({ message: "Oops ! Invalid token for the authentification. Try again !" });
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (error) {
    res.status(500).send({
        success: false,
        message: error.message
    });
}
};

module.exports = verifyToken;
