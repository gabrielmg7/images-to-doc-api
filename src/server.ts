import express from "express";
import fileUpload from "express-fileupload";
import { Document, Packer, Paragraph, ImageRun, TextRun } from "docx";
import path from "path";

const app = express();
app.use(fileUpload());

app.post("/upload", (req, res) => {
  const file = req.files?.file as fileUpload.UploadedFile;
  const width = parseInt(req.body.width, 10);
  const height = parseInt(req.body.height, 10);

  const sections = [
    {
      properties: {},
      children: [
        new Paragraph({
          children: [new TextRun("Teste")],
        }),
      ],
    },
  ];

  const image = new ImageRun({
    data: file.data as Buffer,
    transformation: {
      width: width,
      height: height,
    },
  });

  sections.push({
    properties: {},
    children: [
      new Paragraph({ children: [image] }),
      new Paragraph({ text: path.parse(file.name).name }), // Nome do arquivo como legenda
    ],
  });

  const doc = new Document({ sections });

  Packer.toBuffer(doc).then((buffer) => {
    res.setHeader("Content-Disposition", "attachment; filename=example.docx");
    res.send(buffer);
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
