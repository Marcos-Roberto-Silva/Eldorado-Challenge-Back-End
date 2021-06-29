const { validationResult } = require("express-validator");
const errorMsg = require("../util/messageError");

const validationFieldContent = (request, response, next) => {
  const errorObj = validationResult(request);
  console.log(errorObj);
  if (request.body.partNumber < 0) {
    return response.status(401).json({ message: errorMsg.partNumberError });
  }

  if (!errorObj.isEmpty()) {
    switch (errorObj.errors[0]?.param) {
      case "category":
        return response.status(401).json({ message: errorMsg.categoryError });
      case "color":
        return response.status(401).json({ message: errorMsg.colorError });
      case "partNumber":
        return response.status(401).json({ message: errorMsg.partNumberError });
      case "name":
        return response.status(401).json({ message: errorMsg.nameError });
      default:
        next();
    }
  }
  next();
};

module.exports = validationFieldContent;
