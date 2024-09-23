// const {people,ages} = require('./test');
// const os = require('os');
const fs = require('fs');

// fs.readFile('./docs/blog1.txt', (error, data) => {
//     console.log(data.toString());
// });

// fs.writeFile('./docs/blog1.txt','Mr Elvin',() => {
//     console.log('here');
// });

// fs.writeFile('./docs/blog2.txt','Mr Ndoli',() => {
//     console.log('here');
// });

// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Folder created");
//     });
// }else
// {
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);  
//         }
//         console.log('folder deleted');
        
//     });
// }

if(fs.existsSync('./docs/deleteMe.txt')){
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if (err) {
            console.log(err);  
        }
        console.log('file deleted');
    });
}






// console.log(os.platform(),os.homedir());


