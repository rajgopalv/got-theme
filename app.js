var app = angular.module('game-of-thrones', ['ui.bootstrap']);
app.controller('AppController', function ($scope) {
    $scope.tempo = 180;
    var conductor = new BandJS();
    conductor.setTimeSignature(3, 4);
    conductor.setTempo($scope.tempo);
    var foreGround = conductor.createInstrument('square', 'oscillators'),
        backGround = conductor.createInstrument('triangle', 'oscillators');
    foreGround.setVolume(40);

    /**
     * Intro
     */
    backGround.repeatStart().note('quarter', 'G4')
        .note('quarter', 'C4')
        .note('eighth', 'D#4')
        .note('eighth', 'F4').repeat(2);
    backGround.repeatStart().note('quarter', 'G4')
        .note('quarter', 'C4')
        .note('eighth', 'E4')
        .note('eighth', 'F4').repeat(2);
    foreGround.rest('whole').rest('whole').rest('whole').rest('whole');
    foreGround.rest('half');

    /**
     * Verse 1
     */

    backGround.repeatStart().note('quarter', 'G4')
        .note('quarter', 'C4')
        .note('eighth', 'D#4')
        .note('eighth', 'F4').repeat(3);
    backGround.repeatStart().note('quarter', 'F4')
        .note('quarter', 'A#3')
        .note('eighth', 'D4')
        .note('eighth', 'D#4').repeat(3);

    backGround.repeatStart().note('quarter', 'F4')
        .note('quarter', 'A#3')
        .note('eighth', 'D4')
        .note('eighth', 'D#4').repeat(3);
    backGround.repeatStart().note('quarter', 'G4')
        .note('quarter', 'C4')
        .note('eighth', 'D#4')
        .note('eighth', 'F4').repeat(3);

    backGround.repeatStart().note('quarter', 'G4')
        .note('quarter', 'C4')
        .note('eighth', 'D#4')
        .note('eighth', 'F4').repeat(3);
    backGround.repeatStart().note('quarter', 'F4')
        .note('quarter', 'A#3')
        .note('eighth', 'D4')
        .note('eighth', 'D#4').repeat(3);

    backGround.repeatStart().note('quarter', 'F4')
        .note('quarter', 'A#3')
        .note('eighth', 'D4')
        .note('eighth', 'D#4').repeat(3);
    backGround.repeatStart().note('quarter', 'G4')
        .note('quarter', 'C4')
        .note('eighth', 'D#4')
        .note('eighth', 'F4').repeat(3);

    backGround.repeatStart().note('quarter', 'G4')
        .note('quarter', 'C4')
        .note('eighth', 'D#4')
        .note('eighth', 'F4').repeat(3);
    backGround.repeatStart().note('quarter', 'F4')
        .note('quarter', 'A#3')
        .note('eighth', 'D4')
        .note('eighth', 'D#4').repeat(3);


    backGround.repeatStart().note('quarter', 'F4')
        .note('quarter', 'A#3')
        .note('eighth', 'D4')
        .note('eighth', 'D#4').repeat(3);
    backGround.repeatStart().note('quarter', 'G4')
        .note('quarter', 'C4')
        .note('eighth', 'D#4')
        .note('eighth', 'F4').repeat(3);


    foreGround.repeatStart().note('dottedHalf', 'G4')
        .note('dottedHalf', 'C4')
        .note('eighth', 'D#4')
        .note('eighth', 'F4')
        .note('half', 'G4')
        .note('half', 'C4')
        .note('eighth', 'D#4')
        .note('eighth', 'F4')
        .note('whole', 'D4')
        .rest('whole')
        .rest('whole')

        .note('dottedHalf', 'F4')
        .note('dottedHalf', 'A#3')
        .note('eighth', 'D#4')
        .note('eighth', 'D4')
        .note('half', 'F4')
        .note('half', 'A#3')
        .note('eighth', 'D#4')
        .note('eighth', 'D4')
        .note('whole', 'C4')
        .rest('whole')
        .rest('whole')
        .repeat(1);


    foreGround.repeatStart().note('dottedHalf', 'G5')
        .note('dottedHalf', 'C5')
        .note('eighth', 'D#5')
        .note('eighth', 'F5')
        .note('half', 'G5')
        .note('half', 'C5')
        .note('eighth', 'D#5')
        .note('eighth', 'F5')
        .note('whole', 'D5')
        .rest('whole')
        .rest('whole');

    foreGround.repeatStart().note('dottedHalf', 'F5')
        .note('dottedHalf', 'A#4')
        .note('dottedQuarter', 'D5')
        .note('dottedQuarter', 'D#5')
        .note('dottedQuarter', 'D5')
        .note('dottedQuarter', 'A#4')
        .note('whole', 'C5')
        .rest('whole')
        .rest('whole')
        .repeat(0);


    /**
     * Verse 2
    **/
    backGround.repeatStart().note('dottedHalf', 'G#3,C3,D#4').repeat(1);
    backGround.repeatStart().note('dottedHalf', 'D#3,G3,A#4').repeat(1);
    backGround.repeatStart().note('dottedHalf', 'F3,G#3,C4').repeat(1);
    backGround.repeatStart().note('dottedHalf', 'C4,D#4,G4').repeat(1);
    backGround.repeatStart().note('dottedHalf', 'G#3,C3,D#4').repeat(1);
    backGround.repeatStart().note('dottedHalf', 'G#3,C3,D#4').repeat(1);
    backGround.repeatStart().note('quarter', 'G3')
        .note('quarter', 'C3')
        .note('eighth', 'D#3')
        .note('eighth', 'F3').repeat(3);

    foreGround.repeatStart().note('quarter', 'C5')
        .note('quarter', 'D#4')
        .note('eighth', 'G#4')
        .note('eighth', 'A#4');

    foreGround.repeatStart().note('quarter', 'C5')
        .note('quarter', 'D#4')
        .note('eighth', 'G#4')
        .note('eighth', 'C5');

    foreGround.repeatStart().note('quarter', 'A#4')
        .note('quarter', 'D#4')
        .note('eighth', 'G4')
        .note('eighth', 'G#4');

    foreGround.repeatStart().note('quarter', 'A#4')
        .note('quarter', 'D#4')
        .note('eighth', 'G4')
        .note('eighth', 'A#4');


    foreGround.repeatStart().note('quarter', 'G#4')
        .note('quarter', 'C4')
        .note('eighth', 'F4')
        .note('eighth', 'G4');


    foreGround.repeatStart().note('quarter', 'G#4')
        .note('quarter', 'C4')
        .note('eighth', 'F4')
        .note('eighth', 'G#4');

    foreGround.repeatStart().note('quarter', 'G4')
        .note('quarter', 'C4')
        .note('eighth', 'D#4')
        .note('eighth', 'F4');

    foreGround.repeatStart().note('quarter', 'G4')
        .note('quarter', 'C4')
        .note('eighth', 'D#4')
        .note('eighth', 'F4');


    foreGround.repeatStart().note('quarter', 'C4,G#4')
        .note('quarter', 'D#4')
        .note('eighth', 'C4')
        .note('eighth', 'D4');

    foreGround.repeatStart().note('quarter', 'D#4')
        .note('quarter', 'G#3')
        .note('eighth', 'D4')
        .note('eighth', 'D#4');

    foreGround.repeatStart().note('dottedHalf', 'G#4,C5');
    foreGround.repeatStart().note('dottedHalf', 'F4,A#5').repeat(0);
    foreGround.note('whole', 'C5,G5');
    foreGround.rest('whole');
    foreGround.rest('whole');


// REPEAT

    backGround.repeatStart().note('dottedHalf', 'G#3,C3,D#4').repeat(1);
    backGround.repeatStart().note('dottedHalf', 'D#3,G3,A#4').repeat(1);
    backGround.repeatStart().note('dottedHalf', 'F3,G#3,C4').repeat(1);
    backGround.repeatStart().note('dottedHalf', 'C4,D#4,G4').repeat(1);
    backGround.repeatStart().note('dottedHalf', 'G#3,C3,D#4').repeat(1);
    backGround.repeatStart().note('dottedHalf', 'G#3,C3,D#4').repeat(1);
    backGround.repeatStart().note('quarter', 'G4')
        .note('quarter', 'C4')
        .note('eighth', 'D#4')
        .note('eighth', 'F4').repeat(3);
    backGround.repeatStart().note('quarter', 'G5')
        .note('quarter', 'C5')
        .note('eighth', 'D#5')
        .note('eighth', 'F5').repeat(3);
    backGround.repeatStart().note('dottedHalf', 'G5');

    foreGround.repeatStart().note('quarter', 'C5')
        .note('quarter', 'D#4')
        .note('eighth', 'G#4')
        .note('eighth', 'A#4');

    foreGround.repeatStart().note('quarter', 'C5')
        .note('quarter', 'D#4')
        .note('eighth', 'G#4')
        .note('eighth', 'C5');

    foreGround.repeatStart().note('quarter', 'A#4')
        .note('quarter', 'D#4')
        .note('eighth', 'G4')
        .note('eighth', 'G#4');

    foreGround.repeatStart().note('quarter', 'A#4')
        .note('quarter', 'D#4')
        .note('eighth', 'G4')
        .note('eighth', 'A#4');


    foreGround.repeatStart().note('quarter', 'G#4')
        .note('quarter', 'C4')
        .note('eighth', 'F4')
        .note('eighth', 'G4');


    foreGround.repeatStart().note('quarter', 'G#4')
        .note('quarter', 'C4')
        .note('eighth', 'F4')
        .note('eighth', 'G#4');

    foreGround.repeatStart().note('quarter', 'G4')
        .note('quarter', 'C4')
        .note('eighth', 'D#4')
        .note('eighth', 'F4');

    foreGround.repeatStart().note('quarter', 'G4')
        .note('quarter', 'C4')
        .note('eighth', 'D#4')
        .note('eighth', 'F4');


    foreGround.repeatStart().note('quarter', 'C4,G#4')
        .note('quarter', 'D#4')
        .note('eighth', 'C4')
        .note('eighth', 'D4');

    foreGround.repeatStart().note('quarter', 'D#4')
        .note('quarter', 'G#3')
        .note('eighth', 'D4 ')
        .note('eighth', 'D#4');

    foreGround.note('dottedQuarter', 'D4')
        .note('dottedQuarter', 'D#4')
        .note('dottedQuarter', 'D4')
        .note('dottedQuarter', 'A#3');

    foreGround.note('whole', 'C4,G4');
    foreGround.rest('whole');
    foreGround.rest('whole');


    foreGround.repeatFromBeginning(0);
    backGround.repeatFromBeginning(0);

    var player = conductor.finish();

    $scope.playing = $scope.paused = $scope.muted = false;
    $scope.volume = 50;
    $scope.currentSeconds = 0;
    $scope.timeSlider = 0;
    $scope.totalSeconds = conductor.getTotalSeconds();

    var pauseTicker = false;

    conductor.setTickerCallback(function (seconds) {
        $scope.$apply(function () {
            if (!pauseTicker) {
                $scope.currentSeconds = seconds;
            }
        });
    });

    conductor.setOnFinishedCallback(function () {
        $scope.$apply(function () {
            $scope.playing = $scope.paused = false;
        });
    });

    conductor.setOnDurationChangeCallback(function () {
        $scope.totalSeconds = conductor.getTotalSeconds();
    });

    $scope.play = function () {
        $scope.playing = true;
        $scope.paused = false;
        player.play();
    };

    $scope.stop = function () {
        $scope.playing = $scope.paused = false;
        player.stop();
    };

    $scope.pause = function () {
        $scope.paused = true;
        player.pause();
    };

    $scope.updateTime = function () {
        pauseTicker = false;
        player.setTime($scope.currentSeconds);
    };

    $scope.updateTempo = function () {
        pauseTicker = false;
        conductor.setTempo($scope.tempo);
    };

    $scope.movingTime = function () {
        pauseTicker = true;
    };

    $scope.$watch('loop', function () {
        player.loop($scope.loop);
    });

    $scope.$watch('mute', function (newVal, oldVal) {
        if (newVal === oldVal) {
            return;
        }

        if ($scope.mute) {
            player.mute();
        } else {
            player.unmute();
        }
        $scope.muted = $scope.mute;
    });

    $scope.$watch('volume', function () {
        conductor.setMasterVolume($scope.volume / 100);
    });
});

app.filter('musicTime', function () {
    function pad(num, size) {
        return ( Math.pow(10, size) + ~~num ).toString().substring(1);
    }

    return function (seconds, showRemaining) {
        var duration = moment.duration(parseInt(seconds), 'seconds'),
            secs = duration.seconds(),
            mins = duration.minutes(),
            hrs = duration.hours();

        if (hrs > 0) {
            mins += (hrs * 60);
        }

        return mins + ':' + pad(secs, 2);
    }
});


// Controller  for Carousel
function CarouselCtrl($scope) {

// initializing the time Interval
    $scope.myInterval = 3000;

    // Initializing  slide rray
    $scope.slides = [
        {image:'http://45.media.tumblr.com/0622e3c22f106c9210c4a4c7a928bc17/tumblr_ng6p93x7jg1tah9pwo8_400.gif',text:'Joffrey'},
        {image:'http://www.impact-books.com/wp-content/uploads/zwv6dmpkohnyekqvx9bk.gif',text:'Jon Snow'},
        {image:'http://1.media.dorkly.cvcdn.com/99/15/2f64bcbf579b5c1a5b10ca64757a7d9a.gif',text:'White Walker'},
        {image:'http://0.media.dorkly.cvcdn.com/95/85/ed650430b697fe5eafe699d9f4f89cce.gif',text:'Tyrion'},
        {image:'https://lh3.googleusercontent.com/-axfXoGkbvRI/VGZ-GVdrOMI/AAAAAAAHnGw/IZK4H2_eYzo/w400-h200/Czarek%2B%25C5%2581uczy%25C5%2584ski%2B-%2BGame%2Bof%2BThrones%2B-%2B2',text:'Karl Drogo'},
        {image:'http://2.media.dorkly.cvcdn.com/77/10/9abfbd12a4d37008f86f2e546e2b0bbb.gif',text:'Khaleesi'},
        {image:'http://1.media.dorkly.cvcdn.com/77/70/5843493d42eb16b4ab619e44f1573361.gif',text:'Arya'},
        {image:'http://2.media.dorkly.cvcdn.com/98/15/6171bf079f250ba54b3007fa899fee9c.gif',text:'Bran& Hodor'},
        {image:'http://2.media.dorkly.cvcdn.com/87/31/b94912f0656e12423c1574ac964086e2.gif',text:'Oberyn'},
        {image:'http://jmanx.com/wp-content/uploads/2016/01/IMG_0131.gif',text:'Red woman'},
        {image:'http://i.kinja-img.com/gawker-media/image/upload/c67wnjnvfzxhk3gdvrew.gif',text:'The mountain'},
    ];

    var slides = $scope.slides;
    console.log(slides);

}
