module.exports = {
    host:process.env.HOST || '127.0.0.1',
    port:process.env.PORT ||(process.env.NODE_ENV === 'production'?8080:3001),
    apiHost:process.env.APIHOST || '127.0.0.1',
    apiPort:process.env.APIPORT || '3030',
    dbHost:"localhost",
    dbPort:"27017",
    dbName: "bot-manager",
    app:{
        title:"Bot Manager",
        description:'Bot Manager for add, remove, edit and delete bot.',
        head:{
            titleTemplate:'Bot Manager',
            meta:[
                {
                    name:"description",
                    content:"Bot Manager for add, remove, edit and delete bot."
                },
                {charset:"utf-8"}
            ]
        }
    }
};