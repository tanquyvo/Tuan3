var stories = document.getElementById("stories");

for (i = 0; i < stories.childNodes.length; i++) {

    var child = stories.childNodes[i];

    console.log(
        "child " + i + " =" + child +
        " nodeType=" + child.nodeType
    );

    if (child.nodeType === 1) {
        child.style.backgroundColor = "green";
    }

}