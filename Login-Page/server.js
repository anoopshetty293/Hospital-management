const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
const path = require("path");
const loginPageHTML ='frontendHTML.html';
const loginPageCSS ='frontendCSS.css';
const aboutPageHTML = path.join(__dirname, '..', 'About-Page (My Version)', 'aboutPage.html');
const aboutPageCSS = path.join(__dirname, '..', 'About-Page (My Version)', 'aboutPage.css');
const doctorImage = path.join(__dirname, '..', 'Miscellaneous', 'doctor.jpg');
const contactUsHTML = path.join(__dirname, '..', 'Contact-Us-Page', 'Contact_Us.html');
const contactUsCSS = path.join(__dirname, '..', 'Contact-Us-Page', 'Contact_Us.css');
const fontBold = path.join(__dirname, '..', 'Miscellaneous', 'LEMONMILK-Bold.otf');
const fontLight = path.join(__dirname, '..', 'Miscellaneous', 'LEMONMILK-Light.otf');
const ourDoctorsHTML = path.join(__dirname, '..', 'Our-Doctors', 'Our_Doctors.html');
const ourDoctorsCSS = path.join(__dirname, '..', 'Our-Doctors', 'Our_Doctors.css');
const onejpg = path.join(__dirname, '..', 'Miscellaneous', '1.JPG');
const threejpg = path.join(__dirname, '..', 'Miscellaneous', '3.jpg');
const fourjpg = path.join(__dirname, '..', 'Miscellaneous', '4.jpg');
const fivejpg = path.join(__dirname, '..', 'Miscellaneous', '5.jpg');
const doconejpg = path.join(__dirname, '..', 'Miscellaneous', 'DOC1.jpg');

const server = http.createServer((req, res)=>{ //Creating a server to handle incoming requests

    switch(req.url){ //Routing based on the URL requested by the client

        case "/":
            fs.readFile(loginPageHTML, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{   
                res.end(data);
                }
            });
        break;

        case "/frontendCSS.css":
            fs.readFile(loginPageCSS, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        break;

        case "/Miscellaneous/LEMONMILK-Bold.otf":
    
            fs.readFile(fontBold, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        
        break;

        case "/Miscellaneous/LEMONMILK-Light.otf":
            fs.readFile(fontLight, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        break;

        case "/about":
            fs.readFile(aboutPageHTML, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        break;

        case "/aboutPage.css":
            fs.readFile(aboutPageCSS, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        break;

        case "/Miscellaneous/doctor.jpg":
            fs.readFile(doctorImage, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        break;

        case "/done":

            //Data Parsing (Decrypting the user data coming from the the loginpage)
            let body = ''; 
            req.on('data', (chunk)=>{
                body += chunk.toString();
            });
            req.on('end', ()=>{
                const parsedData = querystring.parse(body);
                const pool = require('./db'); 
                
                // Query to insert the user data into the Users table in the database
                const query = {
                  text: 'INSERT INTO Users(Username, Password1) VALUES($1, $2)',
                  values: [parsedData.username, parsedData.password],
                }
                
                pool.query(query) 
                .then(result => { 
                    console.log(result.rows); 
                }) 
                .catch(error => { 
                    console.log(error); 
                });
                fs.readFile(aboutPageHTML, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
            });

        break;

        case "/contact-us":
            fs.readFile(contactUsHTML, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        break;

        case "/Contact_Us.css":
            fs.readFile(contactUsCSS, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        break;

        case "/our-doctors":
            fs.readFile(ourDoctorsHTML, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        break;

        case "/Our_Doctors.css":
            fs.readFile(ourDoctorsCSS, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        break;

        case "/Miscellaneous/1.JPG":
            fs.readFile(onejpg, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        break;

        case "/Miscellaneous/3.jpg":
            fs.readFile(threejpg, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        break;

        case "/Miscellaneous/4.jpg":
            fs.readFile(fourjpg, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        break;

        case "/Miscellaneous/5.jpg":
            fs.readFile(fivejpg, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        break;

        case "/Miscellaneous/DOC1.jpg":
            fs.readFile(doconejpg, (err, data)=>{
                if(err){
                res.end(err);
                }
                else{
                res.end(data);
                }
            });
        break;

        default:
        res.end("404 Not Found.");
        break;
    }

});

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
});