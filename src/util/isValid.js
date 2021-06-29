const code = require('./httpStatus');
const message = require('./messageError');

const createError = (myCode, msg) => ({
  code: myCode,
  codeMsg: msg,
});

const itExists = async (data) => {

  if (data === null) {
   
    return createError(code.BadRequest, message.requestNotFound);
  } else if (data === 0) {
    console.log('entrei');
    return createError(code.BadRequest, message.requestNotFound)
  }
  return false;
};

module.exports = {
  itExists,
};