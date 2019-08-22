
console.log("xi") 

let getId = (req) => {
    let id = req.params.id    
    return id
}

module.exports.get_all_contact = function(req, res) {
    let data = getId(req)         
    res.render('profile', {pass: data})    
}

module.exports.get_contact = function(req, res) {
    let data = getId(req)  
    res.render("profile", {pass: data})       
}