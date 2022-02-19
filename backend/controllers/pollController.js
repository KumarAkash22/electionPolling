const Electionpoll = require("../model/electionModel");

exports.createElectionPoll = async(req,res,next) =>{
    try{
    const electionpoll = await Electionpoll.create(req.body);
    res.status(201).json({
        success:true,
        electionpoll
    })
}catch(e){
    return res.status(500).json({ message: e.message, status: "Failed" });
}
}

exports.getAllCities = async (req,res)=>{
    try{
    const electionpolls =  await Electionpoll.find();
    res.status(201).json({
        success:true,
        electionpolls
})
    }catch(e){
    return res.status(500).json({ message: e.message, status: "Failed" });
    }
}
