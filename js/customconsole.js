consoleEnginer = CodeMirror.fromTextArea(document.getElementById("console_enginer"), 
{
    lineNumbers: true,
    mode: "javascript",
    showCursorWhenSelecting: true,
    theme: "monokai",
    readOnly: true,
    disableInput: true
});
consoleEnginer.setOption("theme", "monokai");
(function(){
    var oldLog = console.log;
    console.log = function (message) {
        // DO MESSAGE HERE.
        consoleEnginer.getDoc().setValue(consoleEnginer.getValue() + message.toString() + "\n");
        oldLog.apply(console, arguments);
    };
})();
(function(){
    var oldError = console.error;
    console.error = function (message) {
        // DO MESSAGE HERE.
        consoleEnginer.getDoc().setValue(consoleEnginer.getValue() + message.toString() + "\n");
        oldError.apply(console, arguments);
    };
})();