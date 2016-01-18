var fs = require("fs");

module.exports =  {
	pwd: function(arg) {
		process.stdout.write(process.env.PWD);
		process.stdout.write("\nprompt > ");
	},
	date: function(arg) {
		var date = new Date();
		process.stdout.write(date.toString());
		process.stdout.write("\nprompt > ");
	},
	ls: function(arg) {
		fs.readdir(".", function(err, files) {
			if (err) throw err;
			files.forEach(function(file) {
				if(!(file.toString().charAt(0) === ".")) process.stdout.write(file.toString() + "\n");
			})
		process.stdout.write("prompt > ");
		})		
	},
	echo: function(arg) {
		if(arg.charAt(0) === "$") {
			if(process.env.hasOwnProperty(arg.slice(1))) {
				process.stdout.write(process.env[arg.slice(1)]);	
			} else {
				process.stderr.write("No such environmental variable");	
			}
		}
		else {
			process.stdout.write(arg);
		}	
		process.stdout.write("\nprompt > ");
	},
	cat: function(arg) {
		fs.readFile(arg, "utf8", function(err, data) {
			if (err) throw err;
			process.stdout.write(data);
			process.stdout.write("\nprompt > ");
		});
	},
	head: function(arg) {
		fs.readFile(arg, "utf8", function(err, data) {
			if (err) throw err;
			var fullTextArray = data.split("\n");
			for(var i = 0; i < 5; i++) {
				process.stdout.write(fullTextArray[i]);
				process.stdout.write("\n");
				}
		process.stdout.write("prompt > ");
		});
	},
	tail: function(arg) {
		fs.readFile(arg, "utf8", function(err, data) {
			if (err) throw err;
			var fullTextArray = data.split("\n");
			for(var i = fullTextArray.length - 5; i < fullTextArray.length; i++) {
				process.stdout.write(fullTextArray[i]);
				process.stdout.write("\n");
				}
		process.stdout.write("prompt > ");
		});
	},
	sort: function(arg) {
		fs.readFile(arg, "utf8", function(err, data) {
			if (err) throw err;
			var lowercaseData = data.toLowerCase();
			var fullTextArray = lowercaseData.split("\n");
			var sortedFullTextArray = fullTextArray.sort();
			for(var i = 0; i < sortedFullTextArray.length; i++) {
				process.stdout.write(sortedFullTextArray[i]);
				process.stdout.write("\n");
				}
		process.stdout.write("prompt > ");
		});
	},
	wc: function(arg) {
		fs.readFile(arg, "utf8", function(err, data) {
			if (err) throw err;
			var fullTextArray = data.split("\n");
			process.stdout.write(fullTextArray.length.toString());
			process.stdout.write("\nprompt > ");
		});
	},
	uniq: function(arg) {
		fs.readFile(arg, "utf8", function(err, data) {
			if (err) throw err;
			var fullTextArray = data.split("\n");
			for(var i = 1; i < fullTextArray.length; i++) {
				if(fullTextArray[i] != fullTextArray[i-1]) {
					process.stdout.write(fullTextArray[i]);
					process.stdout.write("\n");
				}
			}
		process.stdout.write("prompt > ");
		});
	}

}