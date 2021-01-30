var antlr4 = require('./antlr4/index');
const SimpleCalculatorListener = require('./SimpleCalculatorListener.js').SimpleCalculatorListener

SimpleListener = function () {
    this.Array = [];
    SimpleCalculatorListener.call(this);
    return this;
}
SimpleListener.prototype = Object.create(SimpleCalculatorListener.prototype);
SimpleListener.prototype.constructor = SimpleCalculatorListener;

// Enter a parse tree produced by SimpleCalculatorParser#program.
SimpleListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by SimpleCalculatorParser#program.
SimpleListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by SimpleCalculatorParser#additiveItem.
SimpleListener.prototype.enterAdditiveItem = function(ctx) {

};

// Exit a parse tree produced by SimpleCalculatorParser#additiveItem.
SimpleListener.prototype.exitAdditiveItem = function(ctx) {
    let rightNumber = this.Array.pop();
    let leftNumber = this.Array.pop();
    let result = undefined;
    if(ctx.getChild(1).getText()==="+"){
        result = leftNumber + rightNumber;
    }else{
        result = leftNumber - rightNumber;
    }
    this.Array.push(result)
    document.getElementById("output").innerHTML += (ctx.getText()+"="+result+"<br>");
    document.getElementById("stack").innerHTML += ("["+this.Array+"]"+"<br>");
};


// Enter a parse tree produced by SimpleCalculatorParser#singleItem.
SimpleListener.prototype.enterSingleItem = function(ctx) {

};

// Exit a parse tree produced by SimpleCalculatorParser#singleItem.
SimpleListener.prototype.exitSingleItem = function(ctx) {

};


// Enter a parse tree produced by SimpleCalculatorParser#singleFactor.
SimpleListener.prototype.enterSingleFactor = function(ctx) {

};

// Exit a parse tree produced by SimpleCalculatorParser#singleFactor.
SimpleListener.prototype.exitSingleFactor = function(ctx) {

};


// Enter a parse tree produced by SimpleCalculatorParser#multiplicativeFactor.
SimpleListener.prototype.enterMultiplicativeFactor = function(ctx) {

};

// Exit a parse tree produced by SimpleCalculatorParser#multiplicativeFactor.
SimpleListener.prototype.exitMultiplicativeFactor = function(ctx) {
    let rightNumber = this.Array.pop();
    let leftNumber = this.Array.pop();
    let result = undefined;
    if(ctx.getChild(1).getText()==='/'){
        result = leftNumber / rightNumber;
    }else{
        result = leftNumber * rightNumber;
    }
    this.Array.push(result);
    document.getElementById("output").innerHTML += (ctx.getText()+"="+result+"<br>");
    document.getElementById("stack").innerHTML += ("["+this.Array+"]"+"<br>");
};


// Enter a parse tree produced by SimpleCalculatorParser#parenthesesFactor.
SimpleListener.prototype.enterParenthesesFactor = function(ctx) {

};

// Exit a parse tree produced by SimpleCalculatorParser#parenthesesFactor.
SimpleListener.prototype.exitParenthesesFactor = function(ctx) {

};

// Enter a parse tree produced by SimpleCalculatorParser#integerFactor.
SimpleListener.prototype.enterIntegerFactor = function(ctx) {

};

// Exit a parse tree produced by SimpleCalculatorParser#integerFactor.
SimpleListener.prototype.exitIntegerFactor = function(ctx) {
    let result = parseInt(ctx.getText());
    this.Array.push(result);
    document.getElementById("output").innerHTML += (ctx.getText()+"="+result+"<br>");
    document.getElementById("stack").innerHTML += ("["+this.Array+"]"+"<br>");
};

exports.SimpleListener = SimpleListener;