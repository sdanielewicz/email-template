

var templateButton = document.querySelector("#button");


var emalObj = {};

  const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

 function submitEmail(){
  // var items = document.getElementsByClassName("form-input")[1].value;
  // console.log(items)
  
  let buttonParent = templateButton.parentElement;
  let formChild = buttonParent.childNodes[1].children[0].childNodes[1];
  console.log(formChild.value)
  

  // console.log(templateButton.parentElement);
  // console.log(formChild);
 }




//   document
//     .querySelector('.new-project-form')
//     .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);

templateButton.addEventListener('click',submitEmail)

    document.querySelector('#logout').addEventListener('click', logout);


    // const getEmail = async () => {
//     preventDefault();

//     const response = await fetch(`/api/emails`, {
//         method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
// }