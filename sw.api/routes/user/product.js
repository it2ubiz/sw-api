module.exports = function (req, res) {
    //Add product user pair
    let body = req.body;
    let pid = body.pid;
    let uid = body.uid;
    let type = body.type;
    let product_meta  = body.meta;
    if ((pid!=null)&&(uid!=null)&&(type!=null)
        &&(pid!=undefined)&&(uid!=undefined)&&(type!=undefined)){
        switch (type){
            case 1:
                //Bought the product
                break;
            case 2:
                //Added product to the favorites
                break;
            case 3:
                //Viewed product
                break;
            case 4:
                //Liked product
                break;
            case 5:
                //Added to the cart
                break;
            case 6:
                //Added product to the custom list
                break;
        }
        //Insert handler for product DB addition
        res.json({"Status":"OK"});
    }
};