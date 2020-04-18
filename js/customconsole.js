var consoleEnginer = CodeMirror.fromTextArea(document.getElementById("console_enginer"), 
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
    var oldError = console.error;
    var oldWarn = console.warn;
    console.log = function (message) {
    	consoleEnginer.getDoc().setValue(consoleEnginer.getValue() + arguments.toString() + "\n");
        oldLog.apply(console, arguments);
    };
    console.error = function (message) {
    	consoleEnginer.getDoc().setValue(consoleEnginer.getValue() + arguments.toString() + "\n");
        oldError.apply(console, arguments);
    };
    console.warn = function (message) {
    	consoleEnginer.getDoc().setValue(consoleEnginer.getValue() + arguments.toString() + "\n");
        oldWarn.apply(console, arguments);
    };
})();