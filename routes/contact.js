const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
//test
/*router.get("/", (req,res) => {
    res.send("test")
})
*/

//path localhost:5000/api/contacts/add
//add
// (public/prive)
/*router.post('/add',(req,res)=>{
const {name,email,phone}=req.body
const newContact=new Contact({
name,email,phone
})
newContact.save()
.then(contact=>res.json({msg:'contact aDDeD',contact:contact}))
.catch(err=>console.log(err))
})
*/
router.post("/add", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newContact = new Contact({
      name,
      email,
      phone,
    });

    const contact = await newContact.save();
    res.json({ msg: "contact aDDeD", contact });
  } catch (error) {
    console.log(error);
  }
});

//path http://localhost:5000/api/contacts/getall
// get
// (public/prive)

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json({ msg: "Data fetcheD", contacts });
  } catch (error) {
    console.log(error);
  }
});

//path http://localhost:5000/api/contacts/delete
// delete
// (public/prive)
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findOneAndDelete({ _id: id });
    res.json({ msg: "contact DelteEd", contact });
  } catch (error) {
    console.log(error);
  }
});
//path http://localhost:5000/api/contacts/edit
// edit
// (public/prive)
router.put("/update/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const contactToedit = await Contact.findOneAndUpdate(
      { _id },
      { $set: req.body }
    );
    res.json({ msg: "contact updaTeD", contactToedit });
    console.log(contactToedit);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
