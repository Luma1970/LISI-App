import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import './luoghi.html';
import './form-luoghi.html';
import { Accounts } from 'meteor/accounts-base';


Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});

/////
// template helpers 
/////

// helper function that returns all available places
Template.elenco_luoghi.helpers({
	places:function(){
		return Places.find({});
	}
});


/////
// template events 
/////

Template.insertPlaceForm.events({
    "click.js-rating-place":function(event) {
        var rating = $("#rating").data("userrating");
        var image_id = this.data_id;
        
        Places.update({_id:place_id},
                     {$set: {rating:rating}});

        return false;// prevent the button from reloading the page
    },
    
    "submit .js-salva-form-luoghi":function(event){
        
        var titolo = event.target.titolo.value;
        console.log("il titolo è: "+titolo);
        
        var luogo = event.target.luogo.value;
        console.log("la provincia è: "+luogo);
        
        var indirizzo = event.target.indirizzo.value;
        console.log("l'indirizzo è: "+indirizzo);
        
        var tipologia = event.target.tipologia.value;
        console.log("la tipologia è: "+tipologia);
        
        if(Meteor.user()){
            Places.insert({
                titolo:titolo,
                luogo:luogo,
                indirizzo:indirizzo,
                tipologia:tipologia,
                createdOn:new Date(),
                submittedBy:Meteor.user().username
            })
        }
        else {
            alert('Fai login per inserire nuovi luoghi');
        }
        return false;
    }
});


