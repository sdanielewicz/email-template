var templateButton = document.querySelector("#button");
var formInput = document.getElementsByClassName("form-input")
var emailId = document.getElementsByClassName("email")[0].id
var templateBody=[];
var formArray = [];
var string


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
    console.log(typeof(templateBody));
   




     }
    

    
    const sendEmail = async (event) => {
  event.preventDefault();
getEmail();

const result1 = JSON.stringify(templateBody)
// templateBody.toString()
console.log(result1)
var result = result1.slice(1,-1);
console.log(result)
const result3 = result.replace(/}/,'');
console.log(result3);
const result4 = result3.replace(/{/g,'');
console.log(result4)
const final = "{"+result4
console.log(final)


        const response = await fetch(`/api/template/`+emailId, {
            method: 'POST',
        body:final,
            headers: {
                'Content-Type':'application/json'
            },
            });
        // console.log({send});
            if(response.ok){
                console.log("WORKED")
                // document.location.reload()
                // document.location.replace('/api/template/'+emailId);
            } else {
                alert('Send of form failed')
            }
        }

        templateButton.addEventListener('click',sendEmail)
    init();