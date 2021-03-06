// Generated from SimpleCalculator.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('./antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\t\"\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0006\b\u001f\n\b\r\b\u000e\b \u0002\u0002\t\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0003",
    "\u0002\u0003\u0003\u00022;\u0002\"\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0003\u0011\u0003\u0002\u0002\u0002\u0005\u0013\u0003\u0002\u0002\u0002",
    "\u0007\u0015\u0003\u0002\u0002\u0002\t\u0017\u0003\u0002\u0002\u0002",
    "\u000b\u0019\u0003\u0002\u0002\u0002\r\u001b\u0003\u0002\u0002\u0002",
    "\u000f\u001e\u0003\u0002\u0002\u0002\u0011\u0012\u0007-\u0002\u0002",
    "\u0012\u0004\u0003\u0002\u0002\u0002\u0013\u0014\u0007/\u0002\u0002",
    "\u0014\u0006\u0003\u0002\u0002\u0002\u0015\u0016\u0007,\u0002\u0002",
    "\u0016\b\u0003\u0002\u0002\u0002\u0017\u0018\u00071\u0002\u0002\u0018",
    "\n\u0003\u0002\u0002\u0002\u0019\u001a\u0007*\u0002\u0002\u001a\f\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0007+\u0002\u0002\u001c\u000e\u0003",
    "\u0002\u0002\u0002\u001d\u001f\t\u0002\u0002\u0002\u001e\u001d\u0003",
    "\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002 \u001e\u0003\u0002",
    "\u0002\u0002 !\u0003\u0002\u0002\u0002!\u0010\u0003\u0002\u0002\u0002",
    "\u0004\u0002 \u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function SimpleCalculatorLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

SimpleCalculatorLexer.prototype = Object.create(antlr4.Lexer.prototype);
SimpleCalculatorLexer.prototype.constructor = SimpleCalculatorLexer;

SimpleCalculatorLexer.EOF = antlr4.Token.EOF;
SimpleCalculatorLexer.ADD = 1;
SimpleCalculatorLexer.SUB = 2;
SimpleCalculatorLexer.MUL = 3;
SimpleCalculatorLexer.DIV = 4;
SimpleCalculatorLexer.L_PAREN = 5;
SimpleCalculatorLexer.R_PAREN = 6;
SimpleCalculatorLexer.INT = 7;

SimpleCalculatorLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

SimpleCalculatorLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

SimpleCalculatorLexer.prototype.literalNames = [ null, "'+'", "'-'", "'*'", 
                                                 "'/'", "'('", "')'" ];

SimpleCalculatorLexer.prototype.symbolicNames = [ null, "ADD", "SUB", "MUL", 
                                                  "DIV", "L_PAREN", "R_PAREN", 
                                                  "INT" ];

SimpleCalculatorLexer.prototype.ruleNames = [ "ADD", "SUB", "MUL", "DIV", 
                                              "L_PAREN", "R_PAREN", "INT" ];

SimpleCalculatorLexer.prototype.grammarFileName = "SimpleCalculator.g4";



exports.SimpleCalculatorLexer = SimpleCalculatorLexer;

