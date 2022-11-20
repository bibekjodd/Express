const express = require('express');
const path = require('path');
const app = new express();
const hbs = require('hbs'); 
const port = 3000;

const staticPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.static(staticPath));

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);


app.get("/", (req, res) => {
    res.render('index', {
        hello: "Bibek",
        api: "API",
    });
});


app.get("/about", (req, res) => {
    res.render('about', {
        hey: "passed this as a prop in hbs using express"
    });
});

app.get("/about/*", (req, res) => {
    res.render("404", {
        name: "About"
    })
});

app.get("/*", (req, res) => {
    res.render("404", {
        name: "Page"
    })
});

app.listen(port, () => {
    console.log("listening to the server on", port);
}); 