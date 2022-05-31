// moduleA uses 'context'
define(["context"], function (context) {
    context.register(this);
    return {
        new: function() {
            console.log('new');
            
        }
    };

}); 