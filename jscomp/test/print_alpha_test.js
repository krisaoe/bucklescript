// GENERATED CODE BY BUCKLESCRIPT VERSION 0.3 , PLEASE EDIT WITH CARE
'use strict';

var Mt    = require("./mt");
var Block = require("../runtime/block");
var Curry = require("../runtime/curry");

function f(h, _) {
  var u = 3;
  console.log(u);
  return function (x, y) {
    return Curry._2(h, x, y);
  };
}

Mt.from_pair_suites("print_alpha_test.ml", /* :: */[
      /* tuple */[
        'File "print_alpha_test.ml", line 15, characters 4-11',
        function () {
          return /* Eq */Block.__(0, [
                    f(function (prim, prim$1) {
                            return prim + prim$1 | 0;
                          }, /* () */0)(1, 2),
                    3
                  ]);
        }
      ],
      /* [] */0
    ]);

exports.f = f;
/*  Not a pure module */