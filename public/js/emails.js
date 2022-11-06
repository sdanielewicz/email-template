var templateButton = document.querySelector("#button");
var formInput = document.getElementsByClassName("form-input")
var emailId = document.getElementsByClassName("email")[0].id
var templateBody=[];
var formArray = [];


function init(){
templateBody.push({id:emailId})
}

function getEmail(){
      
for (var i = 0; i < formInput.length; i++){
    formArray.push(formInput[i].value)
    console.log(formArray)  
    }
    templateBody.push({input:formArray})
    console.log(templateBody);
     }

    


   
        // document.location.replace('/profile');
    const sendEmail = async (event) => {
  event.preventDefault();
getEmail();
        const response = await fetch(`/api/emails/`+emailId, {
            method: 'POST',
            body:JSON.stringify({templateBody}),
            headers: {
                'Content-Type':'applicaion/json'
            },
            });
        
            if(response.ok){
                console.log("WORKED")
            } else {
                alert('Send of form failed')
            }
        }

        templateButton.addEventListener('click',sendEmail)
    init();