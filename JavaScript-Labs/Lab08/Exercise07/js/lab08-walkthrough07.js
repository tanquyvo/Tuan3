
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");


daysOfWeek.push("Sat");


daysOfWeek.unshift("Sun");

// document.write(daysOfWeek + "<br>");


document.write("<table border=1>");
document.write("<tr>");


var day;

for (var i = 0; i < daysOfWeek.length; i++) {

    if (daysOfWeek[i].length < 4) {
        day = daysOfWeek[i];
    } else {
        day = "<em>" + daysOfWeek[i] + "</em>";
    }

    document.write("<th>" + day + "</th>");
}

document.write("</tr>");


for (var week = 0; week < 5; week++) {

    document.write("<tr>");

    for (var d = 0; d < 7; d++) {

        var date = week * 7 + d + 1;

        if (date <= 30) {
            document.write("<td>" + date + "</td>");
        } else {
            document.write("<td></td>");
        }
    }

    document.write("</tr>");
}

document.write("</table>");
