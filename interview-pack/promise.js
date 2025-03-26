// promises in js, its officially part of js.
// promises solve, inversion of ctrl and callback hell that occured in callback functions.
// promises are not meant to resolve callback hell. it creates promise hell.
// promises are readbility enhancers.
// They are a special js object which can help us to ctrl future related tasks.
// promises are js objects
// there are 2 aspects of promises to understand promises
// 1. how to create a promise,
// 2. how to consume a promise.

// Generally we prefer promises, when we have to deal with future related tasks.
// future tasks, like timer, download, file read.

// Implement a set of dummy functions, which can mimic the behaviour of the following functions
// download: mimic downloading of the functions
// writeFile: mimic writeFile of the file
// uploadFile: mimic upload of the file


function download(content, cb) {
  setTimeout(() => {
    console.log(`Downloaded ${content}`);
    cb('pdf file');
  }, 5000);
}

function writeFile(content, cb) {
  setTimeout(() => {
    console.log(`Wrote ${content} to a file`);
    cb(true);
  }, 1000);
}

function uploadFile(url, content, cb) {
  setTimeout(() => {
    console.log(`file has been uploaded at ${url} with content ${content}`);
    cb(true);
  }, 1000);
}

download('pdf file', function (file) {
  writeFile(file, function (err) {
    uploadFile('url', 'pdf file', function (status) {

    });
  });
})