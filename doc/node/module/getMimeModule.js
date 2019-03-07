exports.getMime = function(fs,fileLastName){
    /*获取后缀名的方法*/
    let data=fs.readFileSync('./mime.json');
    let Mimes=JSON.parse(data.toString());
    return Mimes[fileLastName] || 'text/html';
};
