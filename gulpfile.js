var gulp = require("gulp");
var rename = require("gulp-rename");
var ejs = require("gulp-ejs");
var replace = require("gulp-replace");

var sects = [
  {
    name: "simple",
    title: "Simple (Algebraic) Data Types",
    desc: "Algebraic data types, which can be typed in existing functional languages, can also be typed in LMNtal ShapeType.",
    files: ["list","tree"]
  },
  {
    name: "constraints",
    title: "ShapeTypes with Constraints",
    desc: "Since LMNtal ShapeType targets more than context-free types, it can handle constraints on the graph structure.",
    files: ["rbtree", "lambda", "skip3"]
  },
  {
    name: "not-one-root",
    title: "ShapeTypes with Not One Root",
    desc: "A ShapeType can have two or more roots, while a data type in almost all functional languages cannot.",
    files: ["dlist", "skiplist", "mesh", "threaded"]
  },
  {
    name: "others",
    title: "Other types",
    desc: "LMNtal ShapeType can express even more data types.",
    files: ["sensitive"]
  }
]

var date = require("moment")().format('LL');

gulp.task("ejs", done => {
  gulp
    .src(["ejs/*.ejs", "!ejs/**/_*.ejs"])
    .pipe(ejs({sects:sects, date:date}, {}, { ext: ".html" }))
    .pipe(rename({ extname: ".html" }))
    .pipe(replace(/[\s\S]*?(<!DOCTYPE)/, "$1"))
    .pipe(replace(/\s*(<\/pre>)/g, "$1"))
    .pipe(replace(/(<pre[\s\S]*?>)\s*/g, "$1"))
    .pipe(gulp.dest("html"));
  done();
});

gulp.task("default", gulp.series("ejs"));
