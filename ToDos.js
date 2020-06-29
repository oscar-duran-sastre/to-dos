
function ToDos(id, title, description, complete) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.complete = complete;
};

ToDos.prototype.titleCapitalize = function () {
    // this.title = ToDos.title.toUpperCase();
    console.log('hola');
};

// ToDos.titleToUpperCase();

export { ToDos };