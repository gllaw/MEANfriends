console.log('mongo connection, mongoose setup');

var mongoose = require('mongoose'),
    fs            = require('fs'),                 //require file-system to load,read,+require all model files.
    path          = require('path'),               //use path for easy dir/file joining.
    models_path   = path.join( __dirname, "../models"),       //Dir where our models are located.
    reg           = new RegExp( ".js$", "i" ),      //Regular expression that checks for .js extension.
    // mongoose.connect('mongodb://localhost/first_mean_project');
    dbURI         = 'mongodb://localhost/friendsAPI';         //Database information.

//DATABASE--------------------------------------------------------------------------------------

mongoose.connect( dbURI );                                               //Connect to the database.

/*CONNECTION EVENTS*/
mongoose.connection.on( 'connected', function () {                       //When successfully connected.
    console.log( `Mongoose default connection open to ${ dbURI }` );
});
mongoose.connection.on( 'error', function ( err ) {                      //If the connection throws an error.
    console.error( `Mongoose default connection error: ${ err }` );
});
mongoose.connection.on( 'disconnected', function () {                    //When the connection is disconnected.
    console.log( 'Mongoose default connection disconnected' );
});
process.on( 'SIGINT', function() {                      //If Node process ends, close the Mongoose connection.
    mongoose.connection.close( function () {
      console.log( 'Mongoose default connection disconnected through app termination' );
      process.exit( 0 );
    });
});
fs.readdirSync( models_path ).forEach( function( file ) {                 //Read all of the files in the models directory and check if they're javascript files before requiring it.
    if( reg.test( file ) ) {
      require( path.join( models_path, file ) );
    }
});





// mongoose.Promise = global.Promise; Need whenever you use .exec whatever that is lololololol.