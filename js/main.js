$(document).ready(function () {

    function search() {
        var quote = "";

        if (!$("#ed-srch-term").val().trim()) {
            $("#result").html("");
        } else {
            quote = $("#ed-srch-term").val();
            $.ajax({
                url: '//en.wikipedia.org/w/api.php',
                data: {
                    action: 'query',
                    list: 'search',
                    srsearch: quote,
                    format: 'json'
                },
                dataType: 'jsonp',
                success: function (x) {
                    var data = [];
                    var result = "";
                    data = x.query.search;
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        result += `
           <div class="card"> 
             <div class="card-block">
               <h4 class="card-title">${data[i].title}</h4>
               <p class="card-text">${data[i].snippet}</p>
               <a href="https://en.wikipedia.org/wiki/${data[i].title}" class="btn btn-primary" target="_blank">More Information</a>
             </div>
           </div>
          `;
                    }
                    $("#result").html(result);
                }
            }) /*end of $.ajax()*/
        } /*end of if(quote === undefined)*/

    } /*end of search()*/


    $("#ed-srch-term").keypress(function (e) {
        if (e.which == 13) {
            search();
            return false;
        }
    }); /*end of $("#ed-srch-term").keypress()*/

}); /*end of $(document).ready()*/