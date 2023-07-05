import * as fs from "fs";

export default async function handler(req, res) {
  try {
    let data = await fs.promises.readdir("blogdata");
    let allBlogs = [];

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      console.log(item);
      const myFile = await fs.promises.readFile("blogdata/" + item, "utf-8");
      console.log(myFile);
      allBlogs.push(JSON.parse(myFile));
    }

    res.status(200).json(allBlogs);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
