const antlr4 = require("./antlr4/index")
const SimpleLexer = require("./SimpleCalculatorLexer.js")
const SimpleParser = require("./SimpleCalculatorParser.js")
const SimpleListener = require("./SimpleListener.js").SimpleListener

function executeParse() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("stack").innerHTML = "";
    var input = document.getElementById('editor').textContent;
    var input_stream = new antlr4.InputStream(input);
    var lexer = new SimpleLexer.SimpleCalculatorLexer(input_stream);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new SimpleParser.SimpleCalculatorParser(tokens);
    parser.buildParseTrees = true;

    antlr4.tree.ParseTreeWalker.DEFAULT.walk(new SimpleListener(), parser.expression())
}

window.executeParse = executeParse;