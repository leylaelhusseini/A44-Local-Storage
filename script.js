const Form = document.getElementById("noteForm")
const Title= document.getElementById("title")
const Area= document.getElementById("area")
const Display= document.getElementById("displayNote");
const Clear= document.getElementById("clearNote");
const TitleP = document.getElementById("TitleP");
const AreaP = document.getElementById("AreaP");

Form.addEventListener(
    "submit",function(e){
        e.preventDefault();
        if (Title.value==="" || Area.value===""){
            alert("Please fill in both the title and note content");
        }
        else {
        localStorage.setItem("title", Title.value);
        localStorage.setItem("area", Area.value);
        alert("note saved successfully");
    }
    }
);

Display.addEventListener("click", function(){
    TitleP.textContent= localStorage.getItem("title") || "";
    AreaP.textContent=localStorage.getItem("area")|| "";
});

Clear.addEventListener("click", function(){
    localStorage.removeItem("title");
    localStorage.removeItem("area");
TitleP.textContent="";
AreaP.textContent="";
Area.value="";
Title.value="";
});