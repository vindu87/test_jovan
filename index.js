$(document).ready(    
    function(){
        debugger;
        $('a[href^="#"]').on('click',function (e) {

            if(this.hash === '') { return; };
            e.preventDefault();

            var target = this.hash,
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
                }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });

        $(".button").click(function () {
            debugger;
        });

        changelanguage = (val) => {
            debugger;
            $('#language')[0].innerText = val;
        }
    },
);