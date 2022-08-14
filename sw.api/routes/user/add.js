module.exports = function (req, res) {
    let body = req.body;
    let uid = body.uid;
    let name = body.name;
    let mail= body.mail;
    if ((uid!=null)&&(name!=null)&&(mail!=null)
        &&(uid!=undefined)&&(name!=undefined)&&(mail!=undefined))
        {
            // Insert here handler for user addition
            console.log(body);
            res.json({"Status":"OK"});
        }
};