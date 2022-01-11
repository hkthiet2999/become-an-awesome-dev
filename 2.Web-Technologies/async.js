function readMultipleFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
      if (err) {
        return reject(err);
      }
      resolve(content);
    });
  });
}

Promise.all([readMultipleFile("file1"), readFile("file2"), readFile("file3")])
  .then((content) => console.log(content))
  .catch((content) => console.log(content));

///
const readFileAsync = async function (file){
    try {
        let content = await fs.readFile(file);
        return content;
    } catch (error) {
        return error;
    }
}

const contents = await Promise.all([readFileAsync("file1"), readFileAsync("file2"), readFileAsync("file3")]);
console.log(contents)

