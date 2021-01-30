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


// Enter a parse tree produced by SimpleCalculatorParser#additiveItem.
SimpleCalculatorListener.prototype.enterAdditiveItem = function(ctx) {
};

// Exit a parse tree produced by SimpleCalculatorParser#additiveItem.
SimpleCalculatorListener.prototype.exitAdditiveItem = function(ctx) {
};


// Enter a parse tree produced by SimpleCalculatorParser#singleItem.
SimpleCalculatorListener.prototype.enterSingleItem = function(ctx) {
};

// Exit a parse tree produced by SimpleCalculatorParser#singleItem.
SimpleCalculatorListener.prototype.exitSingleItem = function(ctx) {
};


// Enter a parse tree produced by SimpleCalculatorParser#singleFactor.
SimpleCalculatorListener.prototype.enterSingleFactor = function(ctx) {
};

// Exit a parse tree produced by SimpleCalculatorParser#singleFactor.
SimpleCalculatorListener.prototype.exitSingleFactor = function(ctx) {
};


// Enter a parse tree produced by SimpleCalculatorParser#multiplicativeFactor.
SimpleCalculatorListener.prototype.enterMultiplicativeFactor = function(ctx) {
};

// Exit a parse tree produced by SimpleCalculatorParser#multiplicativeFactor.
SimpleCalculatorListener.prototype.exitMultiplicativeFactor = function(ctx) {
};


// Enter a parse tree produced by SimpleCalculatorParser#parenthesesFactor.
SimpleCalculatorListener.prototype.enterParenthesesFactor = function(ctx) {
};

// Exit a parse tree produced by SimpleCalculatorParser#parenthesesFactor.
SimpleCalculatorListener.prototype.exitParenthesesFactor = function(ctx) {
};


// Enter a parse tree produced by SimpleCalculatorParser#integerFactor.
SimpleCalculatorListener.prototype.enterIntegerFactor = function(ctx) {
};

// Exit a parse tree produced by SimpleCalculatorParser#integerFactor.
SimpleCalculatorListener.prototype.exitIntegerFactor = function(ctx) {
};



exports.SimpleCalculatorListener = SimpleCalculatorListener;