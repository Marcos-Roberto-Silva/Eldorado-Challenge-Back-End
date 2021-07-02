const { validationResult } = require("express-validator");
const errorMsg = require("../util/messageError");
const httpstatus = require("../util/httpStatus");

const validationFieldContent = (request, response, next) => {
  const errorObj = validationResult(request);
  
  if (request.body.partNumber < 0) {
    return response.status(httpstatus.BadRequest).json({ message: errorMsg.partNumberError });
  }

  if (!errorObj.isEmpty()) {
    switch (errorObj.errors[0]?.param) {
      case "category":
        return response.status(httpstatus.BadRequest).json({ message: errorMsg.categoryError });
      case "color":
        return response.status(httpstatus.BadRequest).json({ message: errorMsg.colorError });
      case "partNumber":
        return response.status(httpstatus.BadRequest).json({ message: errorMsg.partNumberError });
      case "name":
        return response.status(httpstatus.BadRequest).json({ message: errorMsg.nameError });
      default:
        next();
    }
  }
  next();
};

module.exports = validationFieldContent;
