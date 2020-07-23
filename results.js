//the way we get rseults is a list by grabbing things off the page
const resultDiv = document.querySelector('#results')
console.log(resultDiv);

//keyword called url search perams
//go to window and go on object inside the window .locatino and search for anything your looking for
//URLSerachParams paramter to search for window then location then search then .forEach value name
new URLSearchParams(window.location.search).forEach((value, name) =>{
    console.log(name)
    console.log(value)
    // making a p tag
    // let nameELement = document.createElement('p')
    // let valueElement = document.createElement('p')
    //putting in text
    // nameELement.textContent = name
    // valueElement.textContent = value
    // console.log(nameELement)
    //put on html
    // resultDiv.appendChild(nameELement)
    // resultDiv.appendChild(valueElement)

let resultElement = document.createElement('p')
resultElement.textContent = name + ' ' +  vale

resultDiv.appendChild(resultElement)

})

