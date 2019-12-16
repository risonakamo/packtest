const express=require("express");
const multer=require("multer");
const moment=require("moment");

const {readPb}=require("./apis/protobufhelpers");
const getWatchDirBind=require("./apis/getwatchdir");
const getWatchDirDirBind=require("./apis/getwatchdirdir");

const uploader=multer();

let app = express();

app.post("/openpb",uploader.single("upfile"),(req,res)=>{
    console.log(`${moment().format("YY-MM-DD HH:mm:ss")} recieved ${req.file.originalname}.`);
    res.json(readPb(req.file.buffer));
});

getWatchDirBind(app,"protodata","/getwatch");
getWatchDirDirBind(app,"protodata","/getwatchdir");

app.use(express.static("build"));
app.listen(80, () => console.log("express started"));

// app.get("/get-sample", (req, res) => {
//     res.send(JSON.stringify(getsample()));
// });

// app.get("/get-agentlite", (req, res) => {
//     res.send(fs.readFileSync("protodata/out6.json"));
// });

// //returns object data from sample pb file
// function getsample() {
//     return protoDecode(protobuf.loadSync("protodata/wsfextra.proto").lookup("platformArray"), fs.readFileSync("protodata/out3.pb"));
// }

// //give it proto message object from lookup and normal object to encode into buffer
// function protoEncode(pmessage, data) {
//     return pmessage.encode(pmessage.create(data)).finish();
// }

// //returns normal object given buffer data
// function protoDecode(pmessage, data) {
//     return pmessage.decode(data);
// }
