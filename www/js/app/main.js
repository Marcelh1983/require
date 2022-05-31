// define(["jquery", "jquery.alpha", "jquery.beta"], function($) {
//     //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
//     $(function() {
//         // $('body').alpha().beta();
//         $('#1').alpha();
//         $('#2').alpha();
//     });
// });

const pciVariables = new Map();
define("context", function () {
  return {
    register: function (c) {
      console.log("register", c, dom, config);
    },
  };
});

// webcomponent
// dom = 'Adom';
// config = 'Aconfig';
requirejs(["./js/app/moduleA.js"], function (moduleA) {
  // console.log('run when moduleA and thus context are loaded
  console.log("moduleA");
  moduleA.new();
  pciVariables.set("moduleA", { dom: "A" });
});

define("context", function () {
  return {
    register: function (c) {
      console.log("register", c, dom, config);
    },
  };
});

// webcomponent
// dom = 'Bdom';
// config = 'Bconfig';
requirejs(["./js/app/moduleB.js"], function (moduleB) {
  // console.log('run when moduleB and thus context are loaded
  console.log("moduleB");
  moduleB.old();
  pciVariables.set("moduleA", { dom: "B" });
});
