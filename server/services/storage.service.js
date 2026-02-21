//for files (images) we use CLOUD STORAGE PROVIDERS , one such CSP is imageKit.io
import ImageKit from '@imagekit/nodejs'; 

const client = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});
async function uploadFile(buffer){
    
    const response = await client.files.upload({
        file: buffer.toString('base64'),
        fileName: 'image.jpg',
    });
    return response;
}


export default uploadFile;