const textareaEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("totalcounter")
const remainingCounter = document.getElementById("remainingcounter")


textareaEl.addEventListener("keyup",()=>{
    updateCounter()
})
updateCounter()


function updateCounter(){
    totalCounterEl.innerText=textareaEl.value.length
    remainingCounter.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length 


}


