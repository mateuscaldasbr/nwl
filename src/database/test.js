const Database = require('./db');

Database.then(function(db) {
    //inserir dados na tabela
    db.run(`
        INSERT INTO orphanages(
            lat,
            lng,
            name,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) 
        
        VALUES (
        "-3.1442911",
        "-58.4300785",
        "Lar das meninas",
        "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabiliadde social.",
        "https://images.unsplash.com/photo-1594753154778-273013529793?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "venha para se sentir a vontade e traga muito amor e paciência para dar.",
        "Horário de Visitas Das 18h até 8h",
        "1"
        );
    `)
    //consultar dados na tabela
    })