let myPromise = new Promise(function(resolve, rejected){
    //performing some backend opration
    let status = false;
    if(status){
        resolve(`promise is fullfiled`);
    }else{
        rejected(`promise is rejected`);
    }
});

myPromise.then(function(res){
    document.write(`<p> callback inside then ${res}</p>`);
}).catch(function(err){
    document.write(`<p> callback inside catch ${err}</p>`);
});