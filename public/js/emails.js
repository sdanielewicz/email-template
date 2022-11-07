var templateButton = document.querySelector("#button");
var formInput = document.getElementsByClassName("form-input")
var emailId = document.getElementsByClassName("email")[0].id
var templateBody=[];
var formArray = [];


function init(){
templateBody.push({id:emailId})
}

// function setClick(){
//     var element = document.getElementById("submitBtn");
//    element.classList.add("hasBeenClicked");
// }

function getEmail(){
      
for (var i = 0; i < formInput.length; i++){
    formArray.push(formInput[i].value)
    }
    templateBody.push({input:formArray})
    console.log(templateBody);
    console.log(typeof(templateBody));
    console.log(JSON.stringify(templateBody))


     }

    
    const sendEmail = async (event) => {
  event.preventDefault();
getEmail();
        const response = await fetch(`/api/template/`+emailId, {
            method: 'POST',
            body:JSON.stringify(templateBody),
            headers: {
                'Content-Type':'applicaion/json'
            },
            });
        
            if(response.ok){
                console.log("WORKED")
                // document.location.reload()
                document.location.replace('/api/template/'+emailId);
            } else {
                alert('Send of form failed')
            }
        }

        templateButton.addEventListener('click',sendEmail)
    init();