$(document).ready(function(){

    $(".btn-bg").hover(function () {
        $("#container").css("background-image", "url('images/" + $(this).text()+ ".jpg')");
        $("#container").css("background-repeat", "no-repeat");
        $("#container").css("background-size", "cover");
    });
    $(".btn-bg").on("click", function() {
        $("#container").css("background-image", "url('images/" + $(this).text()+ ".jpg')");
        $("h1").text("Select Players");
        $(".btn-bg").remove();
        $("#btn").append(
            `<select id="player-one"> 
                <option value="select ninja">Select Ninja</option>
                <option class="characters" value="donny">Donny</option> 
                <option class="characters" value="leo">Leo</option> 
                <option class="characters" value="mikey">Mikey</option>  
                <option class="characters" value="raphael">Raphael</option> 
            </select>`);
        $("#btn").append(
            `<select id="player-two"> 
                <option value="select ninja">Select Ninja</option>
                <option class="characters" value="donny">Donny</option> 
                <option class="characters" value="leo">Leo</option> 
                <option class="characters" value="mikey">Mikey</option>  
                <option class="characters" value="raphael">Raphael</option> 
            </select>`);

            $('#player-one').on("change", 'select', function(e){
                if((e.target).attr("id") == "player-one"){
            $("#player-one-image").css("background-image", "url('images/" + $(this).text()+ ".jpg')");
                }
                
            });
    });
    
});