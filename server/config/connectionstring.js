
var keys = process.env.dbusername ? {
    dbusername: process.env.dbusername,
    dbpassword: process.env.dbpassword
} : require("./keys");

module.exports = `mongodb://${keys.dbusername}:${keys.dbpassword}@ds163595.mlab.com:63595/holmichapp`;