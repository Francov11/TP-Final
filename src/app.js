import { uploadData } from './functions/functions.js';

//Api URL
const url = 'https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees';

//Fetch API config
fetch(url)
    .then( response => response.json() )
    .then( userData => uploadData(userData) )
    .catch( error => console.log(error) )