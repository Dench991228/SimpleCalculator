// Generated from SimpleCalculator.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SimpleCalculatorListener = require('./SimpleCalculatorListener').SimpleCalculatorListener;
var grammarFileName = "SimpleCalculator.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\t*\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0013\n",
    "\u0003\f\u0003\u000e\u0003\u0016\u000b\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004\u001e\n",
    "\u0004\f\u0004\u000e\u0004!\u000b\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005(\n\u0005\u0003\u0005\u0002",
    "\u0004\u0004\u0006\u0006\u0002\u0004\u0006\b\u0002\u0004\u0003\u0002",
    "\u0003\u0004\u0003\u0002\u0005\u0006\u0002(\u0002\n\u0003\u0002\u0002",
    "\u0002\u0004\f\u0003\u0002\u0002\u0002\u0006\u0017\u0003\u0002\u0002",
    "\u0002\b\'\u0003\u0002\u0002\u0002\n\u000b\u0005\u0004\u0003\u0002\u000b",
    "\u0003\u0003\u0002\u0002\u0002\f\r\b\u0003\u0001\u0002\r\u000e\u0005",
    "\u0006\u0004\u0002\u000e\u0014\u0003\u0002\u0002\u0002\u000f\u0010\f",
    "\u0004\u0002\u0002\u0010\u0011\t\u0002\u0002\u0002\u0011\u0013\u0005",
    "\u0006\u0004\u0002\u0012\u000f\u0003\u0002\u0002\u0002\u0013\u0016\u0003",
    "\u0002\u0002\u0002\u0014\u0012\u0003\u0002\u0002\u0002\u0014\u0015\u0003",
    "\u0002\u0002\u0002\u0015\u0005\u0003\u0002\u0002\u0002\u0016\u0014\u0003",
    "\u0002\u0002\u0002\u0017\u0018\b\u0004\u0001\u0002\u0018\u0019\u0005",
    "\b\u0005\u0002\u0019\u001f\u0003\u0002\u0002\u0002\u001a\u001b\f\u0004",
    "\u0002\u0002\u001b\u001c\t\u0003\u0002\u0002\u001c\u001e\u0005\b\u0005",
    "\u0002\u001d\u001a\u0003\u0002\u0002\u0002\u001e!\u0003\u0002\u0002",
    "\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002\u0002",
    "\u0002 \u0007\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002",
    "\"#\u0007\u0007\u0002\u0002#$\u0005\u0004\u0003\u0002$%\u0007\b\u0002",
    "\u0002%(\u0003\u0002\u0002\u0002&(\u0007\t\u0002\u0002\'\"\u0003\u0002",
    "\u0002\u0002\'&\u0003\u0002\u0002\u0002(\t\u0003\u0002\u0002\u0002\u0005",
    "\u0014\u001f\'"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'+'", "'-'", "'*'", "'/'", "'('", "')'" ];

var symbolicNames = [ null, "ADD", "SUB", "MUL", "DIV", "L_PAREN", "R_PAREN", 
                      "INT" ];

var ruleNames =  [ "program", "expression", "item", "factor" ];

function SimpleCalculatorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SimpleCalculatorParser.prototype = Object.create(antlr4.Parser.prototype);
SimpleCalculatorParser.prototype.constructor = SimpleCalculatorParser;

Object.defineProperty(SimpleCalculatorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SimpleCalculatorParser.EOF = antlr4.Token.EOF;
SimpleCalculatorParser.ADD = 1;
SimpleCalculatorParser.SUB = 2;
SimpleCalculatorParser.MUL = 3;
SimpleCalculatorParser.DIV = 4;
SimpleCalculatorParser.L_PAREN = 5;
SimpleCalculatorParser.R_PAREN = 6;
SimpleCalculatorParser.INT = 7;

SimpleCalculatorParser.RULE_program = 0;
SimpleCalculatorParser.RULE_expression = 1;
SimpleCalculatorParser.RULE_item = 2;
SimpleCalculatorParser.RULE_factor = 3;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SimpleCalculatorParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SimpleCalculatorListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SimpleCalculatorListener ) {
        listener.exitProgram(this);
	}
};




SimpleCalculatorParser.ProgramContext = ProgramContext;

SimpleCalculatorParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SimpleCalculatorParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SimpleCalculatorParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function AdditiveItemContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AdditiveItemContext.prototype = Object.create(ExpressionContext.prototype);
AdditiveItemContext.prototype.constructor = AdditiveItemContext;

SimpleCalculatorParser.AdditiveItemContext = AdditiveItemContext;

AdditiveItemContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AdditiveItemContext.prototype.item = function() {
    return this.getTypedRuleContext(ItemContext,0);
};

AdditiveItemContext.prototype.ADD = function() {
    return this.getToken(SimpleCalculatorParser.ADD, 0);
};

AdditiveItemContext.prototype.SUB = function() {
    return this.getToken(SimpleCalculatorParser.SUB, 0);
};
AdditiveItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof SimpleCalculatorListener ) {
        listener.enterAdditiveItem(this);
	}
};

AdditiveItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof SimpleCalculatorListener ) {
        listener.exitAdditiveItem(this);
	}
};


function SingleItemContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SingleItemContext.prototype = Object.create(ExpressionContext.prototype);
SingleItemContext.prototype.constructor = SingleItemContext;

SimpleCalculatorParser.SingleItemContext = SingleItemContext;

SingleItemContext.prototype.item = function() {
    return this.getTypedRuleContext(ItemContext,0);
};
SingleItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof SimpleCalculatorListener ) {
        listener.enterSingleItem(this);
	}
};

SingleItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof SimpleCalculatorListener ) {
        listener.exitSingleItem(this);
	}
};



SimpleCalculatorParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, SimpleCalculatorParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new SingleItemContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 11;
        this.item(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 18;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new AdditiveItemContext(this, new ExpressionContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, SimpleCalculatorParser.RULE_expression);
                this.state = 13;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 14;
                _la = this._input.LA(1);
                if(!(_la===SimpleCalculatorParser.ADD || _la===SimpleCalculatorParser.SUB)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 15;
                this.item(0); 
            }
            this.state = 20;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SimpleCalculatorParser.RULE_item;
    return this;
}

ItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ItemContext.prototype.constructor = ItemContext;


 
ItemContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function SingleFactorContext(parser, ctx) {
	ItemContext.call(this, parser);
    ItemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SingleFactorContext.prototype = Object.create(ItemContext.prototype);
SingleFactorContext.prototype.constructor = SingleFactorContext;

SimpleCalculatorParser.SingleFactorContext = SingleFactorContext;

SingleFactorContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};
SingleFactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof SimpleCalculatorListener ) {
        listener.enterSingleFactor(this);
	}
};

SingleFactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof SimpleCalculatorListener ) {
        listener.exitSingleFactor(this);
	}
};


function MultiplicativeFactorContext(parser, ctx) {
	ItemContext.call(this, parser);
    ItemContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplicativeFactorContext.prototype = Object.create(ItemContext.prototype);
MultiplicativeFactorContext.prototype.constructor = MultiplicativeFactorContext;

SimpleCalculatorParser.MultiplicativeFactorContext = MultiplicativeFactorContext;

MultiplicativeFactorContext.prototype.item = function() {
    return this.getTypedRuleContext(ItemContext,0);
};

MultiplicativeFactorContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

MultiplicativeFactorContext.prototype.MUL = function() {
    return this.getToken(SimpleCalculatorParser.MUL, 0);
};

MultiplicativeFactorContext.prototype.DIV = function() {
    return this.getToken(SimpleCalculatorParser.DIV, 0);
};
MultiplicativeFactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof SimpleCalculatorListener ) {
        listener.enterMultiplicativeFactor(this);
	}
};

MultiplicativeFactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof SimpleCalculatorListener ) {
        listener.exitMultiplicativeFactor(this);
	}
};



SimpleCalculatorParser.prototype.item = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ItemContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, SimpleCalculatorParser.RULE_item, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        localctx = new SingleFactorContext(this, localctx);
        this._ctx = localctx;
        _prevctx = localctx;

        this.state = 22;
        this.factor();
        this._ctx.stop = this._input.LT(-1);
        this.state = 29;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new MultiplicativeFactorContext(this, new ItemContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, SimpleCalculatorParser.RULE_item);
                this.state = 24;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 25;
                _la = this._input.LA(1);
                if(!(_la===SimpleCalculatorParser.MUL || _la===SimpleCalculatorParser.DIV)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 26;
                this.factor(); 
            }
            this.state = 31;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SimpleCalculatorParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;


 
FactorContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function IntegerFactorContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntegerFactorContext.prototype = Object.create(FactorContext.prototype);
IntegerFactorContext.prototype.constructor = IntegerFactorContext;

SimpleCalculatorParser.IntegerFactorContext = IntegerFactorContext;

IntegerFactorContext.prototype.INT = function() {
    return this.getToken(SimpleCalculatorParser.INT, 0);
};
IntegerFactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof SimpleCalculatorListener ) {
        listener.enterIntegerFactor(this);
	}
};

IntegerFactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof SimpleCalculatorListener ) {
        listener.exitIntegerFactor(this);
	}
};


function ParenthesesFactorContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesesFactorContext.prototype = Object.create(FactorContext.prototype);
ParenthesesFactorContext.prototype.constructor = ParenthesesFactorContext;

SimpleCalculatorParser.ParenthesesFactorContext = ParenthesesFactorContext;

ParenthesesFactorContext.prototype.L_PAREN = function() {
    return this.getToken(SimpleCalculatorParser.L_PAREN, 0);
};

ParenthesesFactorContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ParenthesesFactorContext.prototype.R_PAREN = function() {
    return this.getToken(SimpleCalculatorParser.R_PAREN, 0);
};
ParenthesesFactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof SimpleCalculatorListener ) {
        listener.enterParenthesesFactor(this);
	}
};

ParenthesesFactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof SimpleCalculatorListener ) {
        listener.exitParenthesesFactor(this);
	}
};



SimpleCalculatorParser.FactorContext = FactorContext;

SimpleCalculatorParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SimpleCalculatorParser.RULE_factor);
    try {
        this.state = 37;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SimpleCalculatorParser.L_PAREN:
            localctx = new ParenthesesFactorContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 32;
            this.match(SimpleCalculatorParser.L_PAREN);
            this.state = 33;
            this.expression(0);
            this.state = 34;
            this.match(SimpleCalculatorParser.R_PAREN);
            break;
        case SimpleCalculatorParser.INT:
            localctx = new IntegerFactorContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 36;
            this.match(SimpleCalculatorParser.INT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


SimpleCalculatorParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expression_sempred(localctx, predIndex);
	case 2:
			return this.item_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

SimpleCalculatorParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

SimpleCalculatorParser.prototype.item_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SimpleCalculatorParser = SimpleCalculatorParser;
