const atlasUser = {
    username: 'dbuser',
    password: 'user123'
}

module.exports = {
    port: 3002,
    staticPath: './static',
    atlasURI: `mongodb+srv://${atlasUser.username}:${atlasUser.password}@cluster0-phnko.mongodb.net/test?retryWrites=true&w=majority`
}