const {isUuid } = require('uuidv4');

function isValidId(id) {
    return isUuid(id);
}

function isValidBody(body){

}

module.exports = {isValidId, isValidBody};