//global layout
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

//main page
Router.route('/', function () {
	this.render('landing', {
		to:"main"
	});
});

//prova di pagina in più
Router.route('/luoghi', function () {
	this.render('barraNav', {
		to:"navbar"
	});
    this.render('elenco_luoghi', {
		to:"main"
	});
});

//single place page
Router.route('/:_id', function () {
	this.render('barraNav', {
		to:"navbar"
	});
    this.render('scheda', {
		to:"main",
        data:function(){
            return
            Places.findOne({_id:this.params._id});
        }
	});
});

//places form
Router.route('/edit', function () {
    this.render('edit', {
        to:"main"
    });
});