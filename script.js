function animateLastChair(count) {
    var table_chairs = document.querySelector(".table_chairs");
    var table_chairs_info = document.querySelector(".table_chairs_info");
    var chairs_count_initial = count;
    var chairs_array = [];
    var i = 1;
    for (i; i <= chairs_count_initial; i++) {
        chairs_array.push(i);
    }
    var chairs_array_length = chairs_array.length;
    var current_index = 0;
    var num_to_skip = 0;
    var chairs_leaving = [];
    chairs_leaving[0] = 1;
    while (chairs_array.length > 1) {
        chairs_array.splice(current_index, 1);
        num_to_skip++;
        current_index += num_to_skip;
        current_index %= chairs_array.length;
        chairs_leaving.push(chairs_array[current_index]);
    }
    var i = 0;
    for (i; i < chairs_count_initial; i++) {
        var x = 150 - 5 + 170 * Math.cos(2 * Math.PI * i / chairs_count_initial);
        var y = 150 - 5 + 170 * Math.sin(2 * Math.PI * i / chairs_count_initial);
        var div = document.createElement('div');
        div.setAttribute("class", "table");
        div.innerHTML = "<div id='chair" + (i + 1) + "' class='chair_sit' style='left:" + x + "px;top:" + y + "px'></div>";
        table_chairs.appendChild(div);
    }
    var chairs_leaving_length = chairs_leaving.length;
    var i = 0;
    for (i; i < chairs_leaving_length; i++) {
        var animateChairsLeaving = (function (i) {
            window.setTimeout(function () {
                if (i !== chairs_leaving_length - 1) {
                    document.getElementById("chair" + chairs_leaving[i]).className = "chair_leave";
                }
                table_chairs_info.innerHTML = "<p>" + chairs_leaving[i] + "</p>";
            }, i * 100);
        })(i);
    }
}
;
animateLastChair(100);
