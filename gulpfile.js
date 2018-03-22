//引入gulp
var gulp=require("gulp");
//引入sass的编译，编译成css
var sass=require("gulp-sass");
//引入gulp-concat 插件
var concat=require("gulp-concat");
//印入gulp-uglify插件
var uglify=require("gulp-uglify");
//引入gulp-rename插件
var rename=require("gulp-rename");
//压缩scss
var minfyCSS = require("gulp-minify-css");



//用gulp完成一个任务的代码格式任务
//gulp.task("命令名",回调函数);


//如何用gulp完成复制文件的功能
gulp.task("copy-index",function(){
//	gulp.src("index.html")
//	.pipe(gulp.dest("dist"));
//	
  gulp.src("index.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\Morefood_Publish"));
   
});

//把根目录下的所以html复制到发布目录
gulp.task("copy-html",function(){
   gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\Morefood_Publish"));
   
});

//把根目录下的所以html复制到发布目录
gulp.task("copy-php",function(){
   gulp.src("php/*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\Morefood_Publish\\php"));
   
});
gulp.task("php",function(){
   gulp.src("*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\Morefood_Publish"));
   
});
//一次性执行多个任务
gulp.task("bat",["copy-index","copy-jpg"],function(){
	
});



////合并文件
//gulp.task("concatjs",function(){
//	gulp.src(["js/index.js","js/goodslist.js"])
//	.pipe(concat("concat.js"))
//	.pipe(gulp.dest("D:\\phpStudy\\WWW\\weblx\\js"));
//});



//合并并压缩
//gulp.task("concatanguglifyjs",function(){
//	gulp.src(["js/index.js","js/goodslist.js"])
//	.pipe(concat("concat.js"))
//	.pipe(uglify())
//	.pipe(gulp.dest("D:\\phpStudy\\WWW\\weblx\\js"));
//});



//合并并压缩并重命名
//gulp.task("concatanguglifyandrenamejs",function(){
//	gulp.src(["js/index.js","js/goodslist.js"])
//	.pipe(concat("concat.js"))
//	.pipe(gulp.dest("D:\\phpStudy\\WWW\\Publish_PC\\js"))
//	.pipe(uglify())
//	.pipe(rename("concat.min.js"))
//	.pipe(gulp.dest("D:\\phpStudy\\WWW\\Publish_PC\\js"));
//});


//sass编译u
gulp.task("sassfile",function(){
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(minfyCSS())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\Morefood_Publish\\css"));
});


//json编译u
gulp.task("jsonfile",function(){
	gulp.src("json/*.json")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\Morefood_Publish\\json"));
});


//img文件夹的jpg文件复制到发布目录
gulp.task("copy-jpg",function(){
   //gulp.src("img/*.jpg").pipe(gulp.dest("D:\\phpStudy\\WWW\\weblx"));
   
   gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\Morefood_Publish\\img"));
   
});


//把根目录下的所以js复制到发布目录
gulp.task("copy-js",function(){
   gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\Morefood_Publish\\js"));
   
});


//监听
gulp.task("watchall",function(){
	
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("*.php",["php"]);
	gulp.watch("php/*.php",["copy-php"]);
	gulp.watch("img/**/*",["copy-jpg"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("json/*.json",["jsonfile"]);
	gulp.watch("scss/*.scss",["sassfile"]);
	//gulp.watch(["js/index.js","js/goodslist.js"],["concatjs"]);
	//gulp.watch(["js/index.js","js/goodslist.js"],["concatanguglifyjs"]);
	//gulp.watch(["js/index.js","js/goodslist.js"],["concatanguglifyjs"]);
	//gulp.watch(["js/index.js","js/goodslist.js"],["concatanguglifyandrenamejs"]);
	
});


