// Generated from SimpleCalculator.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SimpleCalculatorParser.
function SimpleCalculatorListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SimpleCalculatorListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SimpleCalculatorListener.prototype.constructor = SimpleCalculatorListener;

// Enter a parse tree produced by SimpleCalculatorParser#program.
SimpleCalculatorListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by SimpleCalculatorParser#program.
SimpleCalculatorListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by SimpleCalculatorParser#expression.
SimpleCalculatorListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by SimpleCalculatorParser#expression.
SimpleCalculatorListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by SimpleCalculatorParser#item.
SimpleCalculatorListener.prototype.enterItem = function(ctx) {
};

// Exit a parse tree produced by SimpleCalculatorParser#item.
SimpleCalculatorListener.prototype.exitItem = function(ctx) {
};


// Enter a parse tree produced by SimpleCalculatorParser#factor.
SimpleCalculatorListener.prototype.enterFactor = function(ctx) {
};

// Exit a parse tree produced by SimpleCalculatorParser#factor.
SimpleCalculatorListener.prototype.exitFactor = function(ctx) {
};



exports.SimpleCalculatorListener = SimpleCalculatorListener;