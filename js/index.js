$(function(){
    $.ajax({
        type:"GET",
        url:"data.json",
        success:function(res){
            if(res.code == 200){
                var articles = res.data.articles;
                for (var i=0;i<articles.length;i++){
                    var item = $(".itemtemp").clone();
                    item.removeClass("itemtemp").addClass("item");
                    item.css("display","block");
                    item.find("a").html(articles[i].title).attr("href",`./show.html?id=${articles[i].id}`);
                    item.find(".text").html(articles[i].text);
                    $(".content").append(item)
                }

            }
        }
    })
})