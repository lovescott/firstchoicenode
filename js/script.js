var reportData;
var options = {
	url: '/api',
	data: {
		filename: 'fileName'
	}
}


var reportModel = Backbone.Model.extend({
	operatorTraining: {},
	tankArea: {},
	cathodicProtection: {},
	dispensers: {},
	leakDetection: {},
	documentRetention: {},
	signatures: {},
	sections: [],
	categories: [],
	questions: []

});

var report = new reportModel ();
var item;

var output = {

}


report.fetch({
	type: 'POST',
	dataType: 'json',
	url: options.url,
	contentType: 'application/json',
	data: JSON.stringify(options.data),
	success: function (data){
		console.log(report);
		item = report.attributes.root.items[0].item;
		this.model.sections = _.map(item, function(i){

		});
		_.each(item, function (i){
			if(i.label[0] === '1.0 Operator Training'){
				this.model.operatorTraining.id = i.item_id[0];
			}
			if(i.label[0] === '2.0 Tank Area'){
				this.model.tankArea.id = i.item_id[0];
			}
			if(i.label[0] === '3.0 Cathodic Protection'){
				this.model.cathodicProtection.id = i.item_id[0];
			}
			if(i.label[0] === '4.0 Dispensers'){
				this.model.dispensers.id = i.item_id[0];
			}
			if(i.label[0] === '5.0 Leak Detection'){
				this.model.leakDetection.id = i.item_id[0];
			}
			if(i.label[0] === '6.0 Document Retention'){
				this.model.documentRetention.id = i.item_id[0];
			}
			if(i.label[0] === '7.0 Signatures'){
				this.model.signatures.id = i.item_id[0];
			}
			if(i.type[0] === 'question'){

			}

		});
	}
})



