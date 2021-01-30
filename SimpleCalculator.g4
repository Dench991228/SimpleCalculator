grammar SimpleCalculator;

program: expression;
expression: expression(ADD|SUB)item|item
item: item(MUL|DIV)factor|factor
factor: L_PAREN expression R_PAREN|INT

ADD : '+';
SUB : '-';
MUL : '*';
DIV : '\';
L_PAREN : '(';
R_PAREN : ')';
INT : [0-9]+;