import "./index.css";


/*
Tasks
Form Submit Handler
Attach an event listener to the search form on the HTML. You may create additional supporting functions if you wish. On submission of the form the following must occur:

Validate the form
Ensure that the form is not blank. By blank is meant the empty string as well as the string containing only spaces. If the form is blank display an error message by creating and appending a new error element to the end of the form. The error element must take the form:

<div class="error" id="searchError">Please enter a search term</div>
If the form is not blank the error element should not be on the form.

Perform the search
Perform a case insensitive search of the titles of the articles (that is, the innerHTML values of the h2 elements). If the search term matches any part of the title the article should be displayed, if the search term does not match any part of the title the article should be hidden.

To hide an article add the class "hidden" to the article element. To make it visible again remove the class "hidden" from the article element.

If a second search is conducted, articles hidden by any previous searches should be made visible again.
 */

//////////////////////////
const submitHandler = (event)=>{
    event.preventDefault()
    const search = event.target
    const formData = new FormData(search)
    //const searchTerm = formData.get("searchTerm")
    //console.log(searchTerm)
    let numHidden = document.querySelectorAll(".hidden")

   // console.log("pre unhiding num hidden",numHidden)
    //console.log("pre unhiding doc.query for hidden elements",document.querySelectorAll(".hidden"))

    unhideArticles()

    //console.log("post unhiding",numHidden)
    //console.log("post unhiding",document.querySelectorAll(".hidden"))


    validateForm(formData)
    theActualSearch(formData)
    console.log("post search",document.querySelectorAll(".hidden"))
    //console.log(searchButton.parentNode)
}

//////////////

function validateExists(value) {
    return value && value.trim();
  }

function validateForm(formData) {
    // Check if anything was entered
    if (!validateExists(formData.get("searchTerm"))) {
      const errorDiv = document.createElement("div")
      errorDiv.setAttribute("class","error")
      errorDiv.setAttribute("id","searchError")
      errorDiv.innerText = "Please enter a search term"
      const emptyForm = document.querySelector("#searchForm")
      console.log(errorDiv)
      emptyForm.appendChild(errorDiv)
    }
  }

//////////////////////
function theActualSearch(formData){
    
   const articleTitles = document.querySelectorAll("h2")
   articleTitles.forEach(article=>{
       const title = article.innerText.toLowerCase()
       const searchTerm = formData.get("searchTerm")
    //    console.log(typeof title)
    //console.log(!title.includes(searchTerm))
       if(!title.includes(searchTerm.toLowerCase())){
           const wholeArticle = article.parentNode
           //console.log(wholeArticle)
          // wholeArticle.style.display = "none"
           wholeArticle.classList.toggle("hidden")
          //console.log(wholeArticle)
       }
   })

}
function unhideArticles(){
    const hiddenArticles = document.querySelectorAll(".hidden")
    //console.log(hiddenArticles)
    hiddenArticles.forEach(article=>{
        //console.log(article)
       article.classList.toggle("hidden")
        
    })
}
//////////////////////

const main = () => {
    // Get the form element
    const form = document.querySelector("#searchForm");
  
    // Attach the submit handler
    form.addEventListener("submit", submitHandler);
  };
  
window.addEventListener("DOMContentLoaded", main);
  
  //////////////////////