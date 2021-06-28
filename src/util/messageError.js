const messageError = {
    colorError: 'The field color is required and must has min size of 4 characters or max size of 16 characters long.',
    nameError: 'The field name is required and must be at least 128 characters long.',
    categoryError: 'The field category can not be empty.',
    partNumberError: 'The part number is required and must be a positive number',
    categoryIdError: 'The category ID is required and must be a number',
    apiMessageError: 'The required category does not exists for the field categoryId.'
};

module.exports = messageError;