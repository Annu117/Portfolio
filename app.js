const text=['A DESIGNER','A DEVELOPER'];
let count=0,index=0,currentText='',letter='';

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

//self invokes function
function type(){
    if(count===text.length)
    {
        count=0;    //if printed both words in text then reset count to 0
    }
    currentText=text[count];
    letter=currentText.slice(0,index++);    //take a subset of the string intext till index position
    
    document.querySelector('.name .typing').textContent=letter;
    if(letter.length===currentText.length){
        count++;    //change pointer to the next element in text array
        index=0;    //reset index to first letter of the next word
    }
    setTimeout(type,400); //calls after 400ms/
}
type();