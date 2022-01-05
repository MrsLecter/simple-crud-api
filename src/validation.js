const {isUuid } = require('uuidv4');

function isValidId(id) {
    return isUuid(id);
}

function isValidBody(body){
    let id = body.id;
    let name = body.name;
    let age = body.age;
    let hobbies = body.hobbies;
    console.log(id, name, age, hobbies);
    console.log("(typeof name  =='string'): " + (typeof name  =='string'));
    console.log("(typeof age == 'number'): " + (typeof age == 'number'));
    if((typeof name  =='string') && (typeof age == 'number')){
        if(!Array.isArray(hobbies) && (typeof hobbies !== 'undefined')){
            console.error('Invalid property hobbies');
            return false;
        }
        if(!isValidId(id) && (typeof id !== 'undefined')){
            console.error('Invalid property id');
            return false;
        }
        return true;
    }else {
        return false;
    }   
}

module.exports = {isValidId, isValidBody};
