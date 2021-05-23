const express = require('express');
const recipe = require('./all-Recipes/all-Recipes');
const recipeDetail = require('./all-Recipes/recipe-details/recipe-details');

const app = express();
const PORT = process.env.PORT || 5000 ;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/' , (req , res , next) => {
    res.send("Your API is working");
});

app.get('/recipe/:q' , (req , res , next) => {
    res.json(recipe.filter(rec => rec.q == req.params.q));
});
app.get('/recipeDetail/:rId' , (req , res , next) => {
    res.json(recipeDetail.filter(rec => rec.id == req.params.rId));
});

app.listen(PORT , () => console.log(`Server started at Port no. ${PORT}`));