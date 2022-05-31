const validName = new RegExp("^[a-zA-Z\u00c0-\u017F\u00f1\u00d1\\s]{1,100}$");
const validPhone = new RegExp("^[0-9]+$");
const validEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
const validAddress = new RegExp("^[a-zA-Z0-9.,\u00c0-\u017F\u00f1\u00d1\\s\']{1,100}$");
const validAppartment = new RegExp("^[a-zA-Z0-9\\s]{1,20}$");
const validCity = new RegExp("^[0-9a-zA-Z\u00c0-\u017F\u00f1\u00d1\\s\-]{1,100}$");
const validZip = new RegExp("^[a-zA-Z0-9\s]{1,10}$");

export {
    validName,
    validPhone,
    validEmail,
    validAddress,
    validAppartment,
    validCity,
    validZip
}