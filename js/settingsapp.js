function compile() {
	var html = document.getElementById("code-html");
	var css = document.getElementById("code-css");
	var js = document.getElementById("code-js");
	var code = document.getElementById("show-code").contentWindow.document;

    document.body.onkeyup = function(){
        code.open();
        code.writeln("<script>" + editorJs.getValue() + "</script>");
        code.close();
    };
    var editorJs = CodeMirror.fromTextArea(document.getElementById("code-js"), {
        value: dataProyect.findByName("game"),
        lineNumbers: true,
        mode: "javascript",
        keyMap: "sublime",
        autoCloseBrackets: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: "monokai",
        tabSize: 4,
        extraKeys:{"Shift-Space":"autocomplete"}
    });
    editorJs.on('keyup', function(editor, event){
        if(event.key != "{" && event.key != "}" && event.key != "Backspace" &&
            event.key != "Shift" && event.key != "ArrowLeft" && 
            event.key != "ArrowRight" && event.key != "ArrowUp" && 
            event.key != "ArrowDown" && event.key != "Enter" &&
            event.key != ";" && event.key != "Control" && event.key != "CapsLock" &&
            event.key != "1" && event.key != "2" && event.key != "3" &&
            event.key != "4" && event.key != "5" && event.key != "6" &&
            event.key != "7" && event.key != "8" && event.key != "7" && 
            event.key != "0" && event.key != "{" && event.key != "}"){
            CodeMirror.commands.autocomplete(editor);
        }
    });
    consoleEnginer = CodeMirror.fromTextArea(document.getElementById("console_enginer"), {
        lineNumbers: true,
        mode: "javascript",
        showCursorWhenSelecting: true,
        theme: "monokai",
        readOnly: true,
        disableInput: true
    });
    var choice = (location.hash && location.hash.slice(1)) ||
           (document.location.search &&
            decodeURIComponent(document.location.search.slice(1)));
    if (choice) {
        input.value = choice;
        editorJs.setOption("theme", choice);
    }
    CodeMirror.on(window, "hashchange", function() {
        var theme = location.hash.slice(1);
        if (theme) { input.value = theme; selectTheme(); }
    });
};

var input = document.getElementById("select-theme");
function selectTheme() {
	var theme = input.options[input.selectedIndex].textContent;
	editorJs.setOption("theme", theme);
	location.hash = "#" + theme;
}