import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {

  const uploadPath = path.join(process.cwd(), "/uploads");

  const form = formidable({
    uploadDir: uploadPath,
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {

    if (err) {
      res.status(500).json({ error: "Upload failed" });
      return;
    }

    res.status(200).json({
      message: "File uploaded successfully",
      files,
    });

  });
}