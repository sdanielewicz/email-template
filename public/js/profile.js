 const goToEmail = async (event) => {
  event.preventDefault();
  
  // let destination = document.getElementsByClassName('emailBtn').value
  console.log(idValue+" is where you are going")

  const response = await fetch(`/api/emails/${idValue}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    // console.log(response)

    document.location.replace('/api/emails/'+idValue);

  } else {
    alert('Failed to get Email template');
  }

  // console.log(emailButtons.getAttribute("value"))

  }

function get(clickedButton){
  idValue= clickedButton.getAttribute('value');
  console.log(idValue)
  return idValue;
}

  var emailButtons = document.getElementsByClassName('emailBtn')
  var idValue;

    for (var i = 0; i < emailButtons.length; i++){
      emailButtons[i].addEventListener('click',goToEmail);
      var emailButtonId = emailButtons[i].parentElement.id;
      emailButtons[i].setAttribute("value" , emailButtonId);

    }


