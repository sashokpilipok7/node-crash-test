
const fs = require('fs');

//read
fs.readFile('./docs/block1.txt', (err,data = {})=>{
    if(err){
        console.log(err);
    }
    console.log(data)
    console.log(data.toString())
})

console.log('last line')

//create

fs.writeFile('./docs/block1.txt', 'Hello my dear friends, i want to say something for you', (err, data) => {
    console.log('file was succussfully written');
})
fs.writeFile('./docs/block2.txt', 'Hello my dear friends, i want to say something for you', (err, data) => {
    console.log('file was succussfully written');
})

console.log('last line');

//directories

if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err) => {
        if(err){
            console.log(err, 'err');
        }
        console.log('folder where created swettie')
    })
}else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder were deleted')
    })
}

//delete

if(fs.existsSync('./docs/deleteme.txt')){
 fs.unlink('./docs/deleteme.txt',(err)=> {
    if(err){
        console.log(err);
    }
    console.log('file were deleted')
} )   
}
