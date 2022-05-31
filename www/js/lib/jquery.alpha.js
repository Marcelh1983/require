// define(["test"], function($) {
//   $.fn.alpha = function() {
//       return this.append('<p>Alpha is Go!</p>');
//   };
// });
define("context", function () {
  return {
    register: function () {
      console.log(this);
    },
  };
});

// define('qtiCustomInteractionContext',function ()  {
//   // console.log(this.)
//   return {
//     register: (ctxA) => this.register(ctxA),
//     notifyReady: (qtiInteraction) => {
//       /* nothing */
//     },
//   };
// });
