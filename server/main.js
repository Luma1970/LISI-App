import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {
  if (!Places.findOne()) {
            Places.insert( {
                titolo:"Lago di Tenno",
                luogo:"Trento",
                indirizzo:"Comune di Tenno, a pochi passi dal borgo medievale Canale di Tenno",
                tipologia:"Paesaggio; acqua",
                createdOn:new Date(),
                submittedBy:"LuMa"
            });
            Places.insert( {
                titolo:"Grotte di Osimo",
                luogo:"Ancona",
                indirizzo:"Via Fonte Magna, 12 - Osimo",
                tipologia:"Grotte artificiali",
                createdOn:new Date(),
                submittedBy:"LuMa"
            });
            Places.insert( {
                titolo:"Bergamo sotterranea",
                luogo:"Bergamo",
                indirizzo:"Presso le mura della città alta in un percorso che va fino al centro partendo dalla Cannoniera di San Giovanni a sud-ovest delle mura",
                tipologia:"Grotte artificiali",
                createdOn:new Date(),
                submittedBy:"LuMa"
            });
            Places.insert( {
                titolo:"Orrido di Cunardo",
                luogo:"Varese",
                indirizzo:"SP30, 3 - Via Garibaldi - Cunardo",
                tipologia:"Grotte naturali",
                createdOn:new Date(),
                submittedBy:"LuMa"
            });
         }
});
