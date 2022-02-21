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
exports.sortCity = async(req,res,next) =>{
    try{
    const electionpoll = await Electionpoll.find({placeType:"City"});

    res.status(201).json({
        success:true,
        electionpoll
    })
}catch(e){
    return res.status(500).json({ message: e.message, status: "Failed" });
}
}
exports.sortTown = async(req,res,next) =>{
    try{
    const electionpoll = await Electionpoll.find({placeType:"Town"});

    res.status(201).json({
        success:true,
        electionpoll
    })
}catch(e){
    return res.status(500).json({ message: e.message, status: "Failed" });
}
}
exports.sortVillage = async(req,res,next) =>{
    try{
    const electionpoll = await Electionpoll.find({placeType:"Village"});

    res.status(201).json({
        success:true,
        electionpoll
    })
}catch(e){
    return res.status(500).json({ message: e.message, status: "Failed" });
}
}
exports.sortMetroCity = async(req,res,next) =>{
    try{
    const electionpoll = await Electionpoll.find({placeType:"Metro City"});

    res.status(201).json({
        success:true,
        electionpoll
    })
}catch(e){
    return res.status(500).json({ message: e.message, status: "Failed" });
}
}
exports.highPolling = async(req,res,next) =>{
    try{
    const electionpoll = await Electionpoll.find().limit();

    res.status(201).json({
        success:true,
        electionpoll
    })
}catch(e){
    return res.status(500).json({ message: e.message, status: "Failed" });
}
}
exports.lowPolling = async(req,res,next) =>{
    try{
    const electionpoll = await Electionpoll.find();

    res.status(201).json({
        success:true,
        electionpoll
    })
}catch(e){
    return res.status(500).json({ message: e.message, status: "Failed" });
}
}