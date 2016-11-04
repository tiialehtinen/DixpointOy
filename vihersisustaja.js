        $(document).ready(function(){
            $(window).scroll(function(){
                if ($(this).scrollTop() > 200) {
                    $('.navbar').fadeIn(1000);
                } else {
                    $('.navbar').fadeOut(1000);
                }
            });
        });

