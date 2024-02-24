async function info(req,res) {
   return res.json({message:'Flights API is live. HELLO'});
}

module.exports ={
   info,
}