$(function(){
    $.ajax({
        type:"GET",
        url:"data.json",
        success:function(res){
            if(res.code == 200){
                var articles = res.data.articles;
                var id = location.search.split("=")[1];

                $(".title").html(articles[id].title);
                $(".text").html(articles[id].text)

            }
        }
    })
    $("#back").click(function(){
        history.go(-1);
    })
})