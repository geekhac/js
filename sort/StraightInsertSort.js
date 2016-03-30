window.onload= function () {
    var procedure = "<br>";

    function straightInsertSort(array) {
        for (var i = 1; i < array.length; i++) {
            var temp = array[i];
            for (var j = i - 1; j >= 0; j--) {
                if (temp < array[j]) {
                    array[j + 1] = array[j];
                } else {
                    break;
                }
            }
            array[j + 1] = temp;
            procedure += array + "<br>";
        }
        return array;
    }

    var submit = document.getElementsByTagName("input")[1];
    submit.onclick = function () {
        var initStrArray = document.getElementById("input").value.split(",");
        var initArray = initStrArray.map(function (item, index, strArray) {
            return parseInt(item);
        });
        var sortArray = straightInsertSort(initArray);

        var init = document.getElementById("init");
        var sort = document.getElementById("sort");
        var process = document.getElementById("process");

        init.innerHTML = initStrArray;;
        sort.innerHTML = sortArray;
        process.innerHTML = procedure;
    };
};