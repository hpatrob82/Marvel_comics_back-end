const host = 'localhost',
    database = 'marvel_comics';


const pgp = require('pg-promise')({
    query: function(event) {
        console.log('QUERY:', event.query);
    }


});

//define options

const options = {
    host,
    database,


}

const db = pgp(options);

module.exports = db;