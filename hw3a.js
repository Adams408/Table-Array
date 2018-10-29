function start() {
    var rows = parseInt(window.prompt("Number of rows", 1)),
        cols = parseInt(window.prompt("Number of columns", 1)),
        inAr;

    inAr = inputArray(rows, cols);
    sumAll(inAr);
    rowAvg(inAr);
    colSum(inAr);
}

function inputArray(rows, cols) {
    var arr = [],
        table = "";
    for (var i = 0; i < cols; i++) {
        arr[i] = [];
        table += "<tr>";
        for (var j = 0; j < rows; j++) {
            arr[i][j] = parseInt(window.prompt("Input value", 0));
            table += "<td>" + arr[i][j] + "</td>";
        }
        table += "</tr>";
    }
    document.getElementById("input").innerHTML += table;
    return arr;
}

function sumAll(inAr) {
    var sum = 0;
    for (var i = 0; i < inAr.length; i++) {
        for (var j = 0; j < inAr[0].length; j++) {
            sum += inAr[i][j];
        }
    }
    document.getElementById("sum").innerHTML += sum;
}

function rowAvg(inAr) {
    var rAvg = 0,
        table = "";
    for (var j = 0; j < inAr[0].length; j++) {
        for (var i = 0; i < inAr.length; i++) {
            rAvg += inAr[i][j];
        }
        table += "<td>" + (rAvg / inAr.length) + "</td>";
        rAvg = 0;
    }
    document.getElementById("rowA").innerHTML += table;
}

function colSum(inAr) {
    var cSum = 0,
        table = "";
    for (var i = 0; i < inAr.length; i++) {
        for (var j = 0; j < inAr[0].length; j++) {
            cSum += inAr[i][j];
        }
        table += "<tr><td>" + cSum + "</td></tr>";
        cSum = 0;
    }
    document.getElementById("colS").innerHTML += table;
}