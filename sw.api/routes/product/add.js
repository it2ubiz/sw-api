module.exports = function (req, res) {
    let body = req.body;
    let pid = body.pid;
    let product_name  = body.name;
    let product_price = body.price;
    let product_meta  = body.meta;
    if ((pid!=null)&&(product_name!=null)&&(product_price!=null)
        &&(pid!=undefined)&&(product_name!=undefined)&&(product_price!=undefined)){
        res.json({"Status":"OK"});
        if ((product_meta!=undefined) && (product_meta!=null)){
            for (i=0; i<product_meta.length;i++){
                let json_meta = product_meta[i];
                if ((json_meta!=null)&&(json_meta!=undefined)){
                    if ((json_meta.hasOwnProperty('name'))&&(json_meta.hasOwnProperty('name')))
                        if ((json_meta.name!=null)&&(json_meta.name!=undefined)&&
                            (json_meta.value!=null)&&(json_meta.name!=undefined))
                            console.log(json_meta.name,":",json_meta.value);
                            //Insert here handler for product addition
                }
            }
        }
    }
};