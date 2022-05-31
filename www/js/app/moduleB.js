// moduleB also uses 'context'
define(["context"], function (context) {
    context.register(this);
    return {
        old: function() {
            console.log('old');
        }
    };
}); 

