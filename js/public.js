$(function(){
    $(".so").each(function(){
        $(this).hover(
            function(){
                $(this).find(".st").css({borderBottom:"3px solid red"});
                $(this).find("ul").css({display:"block"});
            },
            function(){
                $(this).find(".st").css({borderBottom:"none"});
                $(this).find("ul").css({display:"none"});
            }
        );
    });
});

$(function(){
    $(".logo ul li a").each(function(){
        $(this).hover(
            function(){
                $(this).css({
                    transition:"all .5s linear",
                    transform:"scale(1.1)",
                    backgroundColor:"#f9f9f9"
                 });
            },

            function(){
                $(this).css({
                    transition:"all .5s linear",
                    transform:"scale(1)",
                    backgroundColor:"#fff"
                 });
            }
        );
    });
});

$(function(){
    $(".list form input").focus(
        function(){
            $("form").css({
                borderBottom:"3px solid red"
            });
        },
    )

     $(".list form input").blur(
        function(){
            $("form").css({
                borderBottom:"none"
            });
        },
    )

});