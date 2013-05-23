function create(options) {
options = $.extend({title: "Dialog"}, options || {});
var dialog = new Boxy("<div><p>This is dialog. <a href='index.html#' onclick='Boxy.get(this).hide(); 
return false'>Close me!</a></p></div>", options);
allDialogs.push(dialog);
return false;
}
