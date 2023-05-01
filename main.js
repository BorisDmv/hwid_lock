import { getHWID } from 'hwid'
import fs from 'fs'

console.log('██╗  ██╗██╗    ██╗██╗██████╗     ██╗      ██████╗  ██████╗██╗  ██╗\n' +
            '██║  ██║██║    ██║██║██╔══██╗    ██║     ██╔═══██╗██╔════╝██║ ██╔╝\n' +
            '███████║██║ █╗ ██║██║██║  ██║    ██║     ██║   ██║██║     █████╔╝ \n' +
            '██╔══██║██║███╗██║██║██║  ██║    ██║     ██║   ██║██║     ██╔═██╗ \n' +
            '██║  ██║╚███╔███╔╝██║██████╔╝    ███████╗╚██████╔╝╚██████╗██║  ██╗\n' +
            '╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝╚═════╝     ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝\n' +
            '                                                                  \n' +
            '\n')




// specify the file path and the id you want to check for
const filePath = 'hwid.json';

function isHWIDExists(id){
    // read the file contents
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        // parse the JSON data into a JavaScript object
        const jsonData = JSON.parse(data);

        // check if the id exists in the data
        const idExists = jsonData.some(item => item.id === id);

        if (idExists) {
            console.log(`ID ${id} exists in the data`);
            // do something if the id exists
        } else {
            console.log(`ID ${id} does not exist in the data`);
            // do something if the id does not exist
        }
    });
}


getHWID().then(id => {
    isHWIDExists(id)
})

async function main() {
    const id = await getHWID()
}