const { Router } = require("express");
const { validateSyper, validatePutHero } = require("../helpers/validate");
const Superman = require("../models/Superman");


const router = Router();

router.post("/create",validateSyper,
  async (req,res)=>{
      try {
          const {nickname,real_name,origin_description,superpowers,
            catch_phrase,
            _id
          } = req.body
          
          const heros =  new Superman({
            nickname,
            real_name,
            origin_description,
            superpowers,
            catch_phrase,
            _id
          })
          await heros.save()
          
          return res.status(201).json(heros);

      } catch (error) {
        console.log(error.message);
      }
  }
)
router.get("/info",
async (req,res)=>{
    try {
       const info = await Superman.find() 
       return res.json(info)
    } catch (error) {
        console.log(error.message);  
    }
}

)
router.delete('/delete:id',
async(req,res)=>{
  
try {
  const delet = await Superman.findByIdAndDelete(req.params.id)
  res.json(delet)
} catch (error) {
  console.log(error.message); 
}
})
router.put('/put:id',validatePutHero,
async(req,res)=>{
  try {
    const puting = await Superman.findByIdAndUpdate(req.params.id,req.body,{
      new: true,
    })
    res.json(puting)
  } catch (error) {
    
  }
})
module.exports = router