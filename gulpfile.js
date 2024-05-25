var gulp = require("gulp");
var rename = require("gulp-rename");
var ejs = require("gulp-ejs");
var replace = require("gulp-replace");

var sects = [
  {
    name: "simple",
    title: "Simple (Algebraic) Data Types",
    desc: "Algebraic data types, the main target of classical type systems in functional languages, can also be expressed by LMNtalGG.",
    files: ["list","tree"]
  },
  {
    name: "multiple-roots",
    title: "Data structures with multiple roots",
    desc: "LMNtalGG can express data structures with two or more roots, i.e., graphs, whereas classical type systems in functional languages cannot.",
    files: ["threaded", "skiplist"]
  },
  {
    name: "constraints",
    title: "LMNtalGGs with Constraints",
    desc: "With indexed LMNtalGG, we can handle constraints on the graph structure.",
    files: ["rbtree", "bst", "ctree"]
  },
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

gulp.task("watch", ()=>{
  gulp.watch(["./ejs/**/*.ejs"], gulp.series("ejs"))
})

gulp.task("default", gulp.series("ejs"));
