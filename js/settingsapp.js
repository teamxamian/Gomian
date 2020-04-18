var input = document.getElementById("select-theme");
var code = document.getElementById("show-code").contentWindow.document;

 var editorJs = CodeMirror.fromTextArea(document.getElementById("code-js"), {
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
function compile(){
    code.open();
    code.writeln("<script>" + editorJs.getValue() + "</script>");
    code.close();
}
function _init_() {
    editorJs.getDoc().setValue(dataProyect.findByName("game").content);
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
function selectTheme() {
    var theme = input.options[input.selectedIndex].textContent;
    editorJs.setOption("theme", theme);
    location.hash = "#" + theme;
}