var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

var url = format("mongodb://%s:%s@%s:%s/%s"
    , process.env.OPENSHIFT_MONGODB_DB_USERNAME
    , process.env.OPENSHIFT_MONGODB_DB_PASSWORD
    , process.env.OPENSHIFT_MONGODB_DB_HOST
    , parseInt(process.env.OPENSHIFT_MONGODB_DB_PORT)
    , process.env.OPENSHIFT_APP_NAME)

MongoClient.connect(url, function(err, db) {
  if(err) throw err;
  console.log("Connected to Database");
})

