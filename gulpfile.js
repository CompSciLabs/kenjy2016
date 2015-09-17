var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    del = require('del'),
    paths

paths =
  { src:
    { images: 'src/img/**/*'
    , styles: 'src/style/**/*.scss'
    , scripts: 'src/js/**/*'
    , vendor: 'src/vendor/**/*'
    },
    build:
    { images: 'build/img'
    , styles: 'build/style'
    , scripts: 'build/js'
    , vendor: 'build/js/vendor'
    }
  }

gulp.task('clean', function() {
  return del([ 'build' ])
})

gulp.task('sass', [ 'clean' ], function () {
  return gulp.src(paths.src.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.build.styles))
})

function minifyScripts(src, build, file) {
  return gulp.src(src)
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat(file))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(build))  
}

gulp.task('scripts', [ 'clean' ], function() {
  return minifyScripts(paths.src.scripts, paths.build.scripts, 'all.min.js')
})

gulp.task('vendor', [ 'clean' ], function () {
  return minifyScripts(paths.src.vendor, paths.build.vendor, 'vendor.min.js')
})

gulp.task('images', [ 'clean' ], function() {
  return gulp.src(paths.src.images)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(paths.build.images))
})

gulp.task('watch', function() {
  gulp.watch(paths.src.scripts, [ 'scripts' ])
  gulp.watch(paths.src.images, [ 'images' ])
  gulp.watch(paths.src.styles, [ 'sass' ])
});

gulp.task('default', [ 'watch', 'scripts', 'images', 'sass' ])

