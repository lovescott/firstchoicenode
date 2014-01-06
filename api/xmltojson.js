var xml2js = new (require('xml2js')).Parser();
var fs = require('fs');

module.exports = function xmltojson(filePath) {
	var xml = fs.readFileSync(filePath, 'utf8');

	var audit = function(){
		var jsonReturn = '';
		xml2js.parseString(xml, function (err, obj) {
			jsonReturn = JSON.stringify(obj);

		});
		return jsonReturn;
	};

	return (audit());


}


