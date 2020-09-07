var dataProyect = {
            files: [], 
            findByType: function(t){
                var a = [];
                if(this.files.length <= 0) return null;
                for(var i = 0;i<this.files.length;i++){
                    if(this.files[i].type == t)
                    {
                        a.push(this.files[i]);
                    }
                }
                return a;
            },
            findByName: function(n){
                if(this.files.length <= 0) return null;
                for(var i = 0;i<this.files.length;i++){
                    if(this.files[i].name == n)
                    {
                        return this.files[i];
                    }
                }
                return null;
            },
            addFile: function(n, t, c){
                var o = {name:n,type:t,content:c};
                this.files.push(o);
            }
        };
var js = document.getElementById("code-js");

window.onload = function(){
    if(localStorage.getItem("proyect") != null){
        dataProyect = Deserialize(localStorage.getItem("files"));
    }else{
        dataProyect.addFile("game", "js", "function start(){\n\n}\n\nfunction update(time, delta){\n\n}");
        dataProyect.addFile("index", "html", "");
        dataProyect.addFile("style", "css", "body{ margin:0;padding:0; }");

        //localStorage.setItem("proyect", Serialize(dataProyect));
    }
    _init_();
    compile();
};