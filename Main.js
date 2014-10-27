/* Program JS AIML 2.1 implementation
    Based on program AB.
    Copyright (C) 2014 Ángel González

    Copyright (C) 2013 ALICE A.I. Foundation
    Contact: info@alicebot.org

    This library is free software; you can redistribute it and/or
    modify it under the terms of the GNU Library General Public
    License as published by the Free Software Foundation; either
    version 2 of the License, or (at your option) any later version.

    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    Library General Public License for more details.

    You should have received a copy of the GNU Library General Public
    License along with this library; if not, write to the
    Free Software Foundation, Inc., 51 Franklin St, Fifth Floor,
    Boston, MA  02110-1301, USA.
*/

var FS = require("fs"),
HashMap = require("./util/HashMap");

function convert(bot, action) {
    switch(action){
        case "aiml2csv":
            bot.writeAIMLIFFiles();
            break;
        case "csv2aiml":
            bot.writeAIMLFiles();
            break;
    }
}

function getGloss(bot, filename) {
    console.log("getGloss");
    try{
        var lines = FS.createReadStream(filename).lines;
        getGlossFromInputStream(bot, lines);
    } catch(e) {
        console.error("ERROR: " + e);
    }
}

function getGlossFromInputStream(bot, lines){
    console.log("getGlossFromInputStream");
    var strLine, 
    cnt = 0, 
    fileCnt = 0,
    def = new HashMap();
    try{
        //Read file line by line.
        var word = null,
        gloss = null;
        lines.forEach(function(line){
            strLine = line;
            if(strLine.indexOf("<entry word") !== -1){
                var start = strLine.indexOf("<entry word=\"")+"<entry word=\"".length,
                end = strLine.indexOf("#");

                word = strLine.substring(start, end);
                word = word.replace("/_/g", " ");
                console.log(word);
            } else if(strLine.indexOf("<gloss>") !== -1){
                gloss = strLine.replace("/<gloss>/g", "");
                gloss = strLine.replace("/</gloss>/g", "");
                gloss = gloss.trim();
                console.log(gloss);
            }

            if(word !== null && gloss !== null){
                word = word.toLowerCase().trim();
                if(gloss.length > 2){
                    gloss = gloss.substring(0,1).toUpperCase();
                }
                var definition;
                if()
            }
        });
    }
}

function mainFunction(args) {
    var botName = "alice2";
    MagicBooleans.jp_tokenize = false;
    MagicBooleans.trace_mode = true;
    var action = "chat";
    console.log(MagicStrings.program_name_version);
    for(var s in args){
        var splitArg = s.split("=");
        if(splitArg.length >= 2){
            var option = splitArg[0],
                value = splitArg[1];
            switch(option){
                case "bot": 
                    botName = value;
                    break;
                case "action":
                    action = value;
                    break;
                case "trace":
                    if(value === true){
                        MagicBooleans.trace_mode = true;
                    } else {
                        MagicBooleans.trace_mode = false;
                    }
                    break;
                case "morph":
                    if(value === true){
                        MagicBooleans.jp_tokenize = true;
                    } else {
                        MagicBooleans.jp_tokenize = false;
                    }
                    break;
            }
        }
    }
    if(MagicBooleans.trace_mode) {
        console.log("Working Directory = " + MagicStrings.root_path);
    }
    Graphmaster.enableShortCuts = true;
    var bot = new Bot(botName, MagicStrings.root_path, action);
    if(MagicBooleans.make_verbs_sets_maps) {
        Verbs.makeVerbSetsMaps(bot);
    }
    if(bot.brain.getCategories().size() < MagicNumbers.brain_print_size){
        bot.brain.printgraph();     
    }
    if(MagicBooleans.trace_mode) {
        console.log("Action = '" + action + "'");
    }
    switch(action) {
        case "chat":
        case "chat-app":
            var doWrites = !(action === "chat-app");
            TestAB.testChat(bot, doWrites, MagicBooleans.trace_mode);
            break;
        case "ab":
            TestAB.testAB(bot, TestAB.sample_file);
            break;
        case "aiml2csv":
        case "csv2aiml":
            convert(bot, action);
            break;
        case "abwq":
            AB ab = new AB(bot, TestAB.sampleFile);
            ab.abwq();
            break;
        case "test":
            TestAB.runTests(bot, MagicBooleans.trace_mode);
            break;
        case "shadow": 
            MagicBooleans.trace_mode = false; bot.shadowChecker());
            break;
        case "iqtest":
            ChatTest ct = new ChatTest(bot);
            try {
                ct.testMultisentenceRespond();
            } catch(ex){
                console.log(ex);
            }
            break;
        default:
            console.loeg("Unrecognized action " + action);

    }
}

function main(args) {
    MagicStrings.setRootPath();

    AIMLProcessor.extension =  new PCAIMLProcessorExtension();
    mainFunction(args);
}

main(process.argv.slice(2));