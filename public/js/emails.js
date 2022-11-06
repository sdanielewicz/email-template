    // emailButtons.forEach(element => {
    //   element.addEventListener('click',goToEmail);
    // })
    // .addEventListener('click',goToEmail)


    var templateButton = document.querySelector("#button");
console.log(templateButton);
    function submitEmail(event){
      // var items = document.getElementsByClassName("form-input")[1].value;
      // console.log(items)
      event.preventDefault();
      
      let buttonParent = templateButton.parentElement;
      let formChild = buttonParent.childNodes[1].children[0].childNodes[1];
      console.log(formChild.value)
      
    
      // console.log(templateButton.parentElement);
      // console.log(formChild);
     }

    templateButton.addEventListener('click',submitEmail)