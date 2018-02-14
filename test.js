function countWords(message) {
    var str = message.split(/ ,./);
    var n = str.length;
    var count = 0;
    for (i = 0; i < n; i++) {
        if (str[i] !== "") {
            count++;
        }
    }
    console.log(count);
}
countWords('Good morning, I love JavaScript.')