//отправляет запросы
const reqUrl0 = '/about';
const reqUrl1 = '/person';
const reqUrl2 = '/person/uuid234';


function getData(reqUrl) {
    //parsing url
    let [, pathname, id] = reqUrl.split('/');
    console.log('readfile')
    
}

function postData(reqUrl){
    let [, pathname, id] = reqUrl.split('/');
    console.log('writefile')
}

function putData(reqUrl) {
    console.log('read + write');
}

function deleteData(reqUrl) {
    console.log('read + write')
}

getData(reqUrl0);
getData(reqUrl1);
getData(reqUrl2)

module.exports = {getData, postData, putData};