grammar SimpleCalculator;

program: expression;
expression: expression(ADD|SUB)item #additiveItem|item # singleItem;
item: item(MUL|DIV)factor # multiplicativeFactor|factor # singleFactor;
factor: L_PAREN expression R_PAREN # parenthesesFactor|INT # integerFactor;

ADD : '+';
SUB : '-';
MUL : '*';
DIV : '/';
L_PAREN : '(';
R_PAREN : ')';
INT : [0-9]+;