const router = require('express').Router();
const { text } = require('express');
const { Email, User, Template } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', async (req, res) => {
//     // find all categories
//     // be sure to include its associated Products
//     try {
//       const emailData = await Email.findAll({
        
//       });
//       res.status(200).json(emailData);
//     } 
//     catch (err) {
//       res.status(500).json(err);
//     }
//   });

  router.get('/:id', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    
    try {
        const emailData = await Template.findByPk(req.params.id, {
            include: [
              {
                model: User,
                attributes: ['name'],
              },
            ],
          });
      
      res.status(200).json(emailData);
    } 
    catch (err) {
      res.status(500).json(err);
    }
  });

//   router.post('/:id', async (req,res)=>{
//     try {
//       const data = await (req.body)
  
//       res.status(200).json(data)
//     //   res.render('template',{data})
      
//     }catch{
//       res.status(500).json(err);
//     }
// })

router.post('/:id', async (req, res) => {
    try {
        const data = await (req.body)
        // console.log(data.id)
        // console.log(data.input)
        const dataId=data.id
        const dataIn=data.input

        const process = await Email.findByPk(dataId)
        const templateBody = process.email_body

        
        // console.log(process)
        // let templateArray = data.input;
        // let emailInput = Email.findByPk(data.id)
        // console.log(emailInput);
        // templateArray.array.forEach(element => {
            
        // });
        var emailString="";
        const regex=/([%])+([%])+([%])/g;
        const stringMatch = templateBody.match(regex)
        console.log(stringMatch)
        
        // for(var i =0; i > dataIn.length; i++){
        // templateBody.forEach(element => {
        //     console.log(dataIn.replace(/([%])+([%])+([%])/, dataIn[i]))
            
        
        
        
        // });
        // }
            // emailString = templateBody.replace(regex,dataIn)
        var splitString=templateBody.split(' ')
        // console.log(splitString);
        

        for(var i =0; i < splitString.length; i++){
            if(splitString[i].match(regex)){
               var result = splitString[i].replace(/([%])+([%])+([%])/, dataIn[0]);
                console.log(result);
                emailString +=" " + result
            }
            else{
                emailString += " "+splitString[i]
            }
            // emailString
            // console.log(splitString[i])
        }

    
        // splitString.forEach(element => {
        //     emailString=splitString.join()
        // });

    //     for(var i =0; i > dataIn.length; i++){
    //     for(var j =0; j > templateBody.length; j++){
    //     if(/([%])+([%])+([%])/){
    //         emailString.join(replace(/([%])+([%])+([%])/,dataIn[i]))
    //     }
    //     else{
    //         emailString.join(j)
    //     }
    // }
    // }
    // for(var j =0; j > templateBody.length; j++){
    // emailString.join(templateBody[j]);
    // }
            
    //     for(var i =0; i < templateBody.length; i++){
    //         // console.log(templateBody[i])
    //         if(templateBody.match(regex)){
    //             emailString.join("HI")
            
    //     }
    //     else{
    //         emailString.join()
    //     }
        
    // }

        

        // for (var i =0; i > stringMatch.length; i++){
        //     // for (var i =0; i > dataIn.length; i++){
        //     emailString = templateBody.replace(/([%])+([%])+([%])/, dataIn.forEach(element=>{element}))
        //     console.log(emailString)
        // }

        // console.log(processEmail);

       
    
      res.status(200).json(emailString)
  
    //   const newTemplate = await Template.create({
    //     ...req.body,
        
    //   });
  
    //   res.status(200).json(newProject);

    } catch (err) {
      res.status(400).json(err);
    }
  });



module.exports = router;
