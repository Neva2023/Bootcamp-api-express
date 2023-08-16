import express from 'express'
import longestWord from './bootcamp/longestWord.js';
import shortestWord from './bootcamp/shortestWord.js';
import wordLengths from './bootcamp/wordLengths.js';
import totalPhoneBill from './bootcamp/totalPhoneBill.js';
import enoughAirtime from './bootcamp/enoughAirtime.js';

const app = express();
app.use(express.json());
app.use(express.static('public'))

const greetings = {
    'english' : 'hello',
    'xhosa'   : 'Molo',
    'zulu'    : 'Sawubona'
}

app.get('/api/greet', function(req, res) {
    const username = req.query.username;
    const language = req.query.language;

    if(!greetings[language]) {
        return res.json({
            error : 'invalid language supplied'
        })
    }

    const greeting = greetings[language];
    res.json({
        message : `${greeting}, ${username}`
    })
});

app.post('/api/greet', function(req, res) {
    const language = req.body.language;
    greetings[language] = req.body.greeting
    res.json({
        status : 'success',
        message: `added a greeting for ${language}` 
    });

});

app.get('/api/greet/', function(req, res){
    console.log(req.params);
    const username = req.query.username;
    res.json({
        message : `Hello, ${username}!`
    })
});



app.get('/api/word_game', function(req, res) {

    const sentence = req.query.sentence;

    if (!sentence) {
        res.json ({
            error : 'Please send in sentence to analyze'
        })
    }

    res.json ({
        "longestWord" : longestWord (sentence),
        "shortestWord" : shortestWord(sentence),
        "sum" : wordLengths(sentence),
    });
});



app.get('/api/phone_bill', function(req, res) {

    const usage = req.query.usage;

    if (!usage) {
        res.json ({
            error : 'Please enter the usage to calculate the phone bill from'
        })
    }

    res.json ({
        "totalCost" : totalPhoneBill(usage),
        
    });
});

app.get('/api/enoughAirtime', function(req, res) {

    const usage1 = req.query.usage1;
    const avaiAirtime = req.query.avaiAirtime;

    if (!usage1 & !avaiAirtime) {
        res.json ({
            error : 'Please enter the usage and available airtime to calculate remaining airtime from'
        })
    }

    res.json ({
        "remainder" : enoughAirtime(usage1, avaiAirtime),
        
    });
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log(`app started on port ${PORT}`);
});