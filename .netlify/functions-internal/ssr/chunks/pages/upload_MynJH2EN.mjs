import { v2 } from 'cloudinary';
import fs from 'node:fs/promises';
import path from 'node:path';

v2.config({
  cloud_name: "dniyqu7yq",
  api_key: "628562391211963",
  api_secret: "kXCkUa3uVGvnNY73OXWCsimvtjQ"
});
const outputDir = path.join(process.cwd(), "public/text");
const uploadStream = async (buffer, options) => {
  return new Promise((resolve, reject) => {
    v2.uploader.upload_stream(options, (error, result) => {
      if (result)
        return resolve(result);
      reject(error);
    }).end(buffer);
  });
};
const POST = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("file");
  if (!file) {
    return new Response("No file found", { status: 400 });
  }
  const buffer = await file.arrayBuffer();
  const unit8Array = new Uint8Array(buffer);
  const result = await uploadStream(unit8Array, {
    folder: "pdf",
    ocr: "adv_ocr"
  });
  const {
    asset_id: id,
    secure_url: url,
    pages,
    info
  } = result;
  const data = info?.ocr?.adv_ocr?.data;
  const text = data.map((blocks) => {
    const annotations = blocks["textAnnotations"] ?? {};
    const first = annotations[0] ?? {};
    const content = first["description"] ?? "";
    return content.trim();
  }).filter(Boolean).join("\n");
  fs.writeFile(`${outputDir}/${id}.txt`, text, "utf-8");
  return new Response(JSON.stringify({
    id,
    url,
    pages
  }));
};

export { POST };
