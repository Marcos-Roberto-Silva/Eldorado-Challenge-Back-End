const { validationResult } = require("express-validator");
const errorMsg = require("../util/messageError");

const validationFieldContent = (request, result, next) => {
  const errorObj = validationResult(request);

  if (request.body.partNumber < 0) {
    return result.status(401).json({ message: errorMsg.partNumberError });
  }

  if (!errorObj.isEmpty()) {
    switch (errorObj.errors[0]?.param) {
      case "category":
        return result.status(401).json({ message: errorMsg.categoryError });
      case "color":
        return result.status(401).json({ message: errorMsg.colorError });
      case "partNumber":
        return result.status(401).json({ message: errorMsg.partNumberError });
      case "name":
        return result.status(401).json({ message: errorMsg.nameError });
      default:
        next();
    }
  }
};

module.exports = validationFieldContent;
