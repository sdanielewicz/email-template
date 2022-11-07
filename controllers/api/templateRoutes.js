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
        console.log(req.body)
        const dataId=data.id
        const dataIn=data.input
        console.log(dataId)


        const process = await Email.findByPk(dataId)
        const templateBody = process.email_body

        
        var emailString="";
        const regex=/([%])+([%])+([%])/g;
        const stringMatch = templateBody.match(regex)
        console.log(stringMatch)
        
        
        var splitString=templateBody.split(' ')
        
        
        var count = -1;
        for(var i =0; i < splitString.length; i++){
            
            if(splitString[i].match(regex)){
                count = count + 1;
               var result = splitString[i].replace(/([%])+([%])+([%])/, dataIn[count]);
                console.log(result);
                emailString +=" " + result
            }
            else{
                emailString += " "+splitString[i]
            }
            
        }

    

      res.status(200).json(emailString)
    // res.render('template',{
    //     emailString,
    // })
  

    } catch (err) {
      res.status(400).json(err);
    }
  });



module.exports = router;
