import type { APIRoute } from "astro";        
import {v2 as cloudinary, type UploadApiResponse} from 'cloudinary';
import fs from 'node:fs/promises';
import path from 'node:path';
                    
cloudinary.config({ 
    cloud_name: '', 
    api_key: '', 
    api_secret: '' 
});

const outputDir=path.join(process.cwd(),'public/text');

const uploadStream = async (buffer: Uint8Array, options: {
    folder: string;
    ocr?: string;
  }): Promise<UploadApiResponse> => {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(options, (error, result) => {
        if (error) {
          reject(error);
        } else if (result) {
          resolve(result);
        } else {
          // Handle unexpected cases where neither error nor result is present
          reject(new Error('Unexpected upload response'));
        }
      });
  
      uploadStream.write(buffer);
      uploadStream.end();
    });
  };
  

export const POST: APIRoute = async ({request}) => {
    const formData=await request.formData();
    const file = formData.get("file") as File;
    if(!file){
        return new Response("No file found",{status:400});
    }
    const buffer=await file.arrayBuffer();
    const unit8Array=new Uint8Array(buffer);
    const result=await uploadStream(unit8Array,{
        folder:"pdf",
        ocr:'adv_ocr'
    });
    const {
        asset_id:id,
        secure_url:url,
        pages,
        info
    }=result;

    const data = info?.ocr?.adv_ocr?.data

  const text = data.map((blocks: { textAnnotations: { description: string }[] }) => {
    const annotations = blocks['textAnnotations'] ?? {}
    const first = annotations[0] ?? {}
    const content = first['description'] ?? ''
    return content.trim()
  }).filter(Boolean).join('\n')

  // TODO: Meter esta info en una base de datos
  // Mejor todavía en un vector y hacer los embeddings
  // pero no nos da tiempo
  fs.writeFile(`${outputDir}/${id}.txt`, text, 'utf-8')

    return new Response(JSON.stringify({
        id,
        url,
        pages
    }));
} 
