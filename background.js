var DBG = false;

String.prototype.startsWith = function(prefix) {
    return this.indexOf(prefix) === 0;
}

String.prototype.endsWith = function(suffix) {
    return this.match(suffix+"$") == suffix;
};

safari.application.addEventListener("beforeSearch", function(e) {

	if(DBG)console.log("** Check beforeSearch: ___" + e.query + "____");
	if(e.query.startsWith("\\\\") === true) {
		if(DBG)console.log("start with : \\\\");
		var newPath = e.query.replace("\\\\", "smb://").replace(/\\/g, '/');
		console.log("ready to open network neighborhood: ", newPath);
		safari.application.activeBrowserWindow.activeTab.url = newPath;
	} else {
		console.log("not start with : \\\\");
	}

});