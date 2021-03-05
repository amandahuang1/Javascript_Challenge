/*
Welcome to 🐱‍🐉 Dino's Looping Challenge of Doom!
You will need to create 4 loops for this challenge

1. Create a loop that writes "I love homework" 5 times
2. Create a loop that counts from 0 to 4 and writes the current number on the screen.
3. Create a loop that counts from 15 to 30 but only writes multiples of 3 on the screen
      - ex. 15, 18, 21, 24, 27, 30
4. Create a loop that will draw 4X4 square using ⬜. ONLY PRINT 1 ⬜ at a time. Your loops should do the rest. It should look like this:
⬜⬜⬜⬜
⬜⬜⬜⬜
⬜⬜⬜⬜
⬜⬜⬜⬜
document.write("⬜⬜⬜⬜") (X) <-- don't do this)
HINT: Loops can be nested inside another loop

5. Dino is a very neat and organized dinosaur. He likes to stack the bones (🦴) of his victims in a nice triangle shape. Create a stack that is 7 bones high.
- You will need to create a loop writes 1 🦴, and every successive line adds one more bone. It should look like this: 

🦴
🦴🦴
🦴🦴🦴
🦴🦴🦴🦴
🦴🦴🦴🦴🦴 
🦴🦴🦴🦴🦴🦴
🦴🦴🦴🦴🦴🦴🦴

6. Create the same pile of bones as challenge 5, but this time, center them by adding a ~ in front so the shape is a pyramid 

~~~~~~🦴
~~~~~🦴🦴
~~~~🦴🦴🦴
~~~🦴🦴🦴🦴
~~🦴🦴🦴🦴🦴 
~🦴🦴🦴🦴🦴🦴
🦴🦴🦴🦴🦴🦴🦴

7. Create a loop that creates 5 stacks of bones, each with another row at the bottom

🦴

🦴
🦴🦴

🦴
🦴🦴
🦴🦴🦴

🦴
🦴🦴
🦴🦴🦴
🦴🦴🦴🦴

🦴
🦴🦴
🦴🦴🦴
🦴🦴🦴🦴
🦴🦴🦴🦴🦴

GOOD LUCK 🤹‍♂️
*/

//1.
document.write("Loop 1:<br/><br/>");
for(i=1; i<6; i++){
      document.write("I love homework <br>");
}
document.write("<br/>");

//2.
document.write("Loop 2:<br/><br/>");
for(i=0; i<4; i++){
      document.write(i);
      document.write("<br>");
}
document.write("<br/>");

//3.
document.write("Loop 3:<br/><br/>");
for(i=15; i<31; i++){
      if(i%3==0){
            document.write(i);
            document.write("<br>");
      }
}
document.write("<br/>");

//4.
document.write("Loop 4:<br/><br/>");
for(x=0; x<4; x++){
      for(i=0;i<4;i++){
            document.write(" O ");
      }
      document.write("<br>");
}
document.write("<br/>");

//5.
document.write("Loop 5:<br/><br/>");
for(i=1; i<= 7; i++){
      for(j=1; j<=i; j++){
            document.write(" * ");
      }
      document.write("<br/>");
}
document.write("<br/>");

//6.
document.write("Loop 6:<br/><br/>");
for(i=1; i<= 7; i++){
      for(k=6; k>=i; k--){ 
            document.write("~ "); 
      }
      for(j=1; j<=i; j++){
            document.write(" * ");
      }
      document.write("<br/>");
}
document.write("<br/>");

//7.
document.write("Loop 7:<br/><br/>");
      document.write(" * ");
      document.write("<br/><br/>");

      for(i=1; i<= 2; i++){
            for(j=1; j<=i; j++){
                  document.write(" * ");
            }
            document.write("<br/>");
      }  
      document.write("<br/>");
      
      for(i=1; i<= 3; i++){
            for(j=1; j<=i; j++){
                  document.write(" * ");
            }
            document.write("<br/>");
      } 
      document.write("<br/>");

      for(i=1; i<= 4; i++){
            for(j=1; j<=i; j++){
                  document.write(" * ");
            }
            document.write("<br/>");
      } 
      document.write("<br/>");

      for(i=1; i<= 5; i++){
            for(j=1; j<=i; j++){
                  document.write(" * ");
            }
            document.write("<br/>");
      } 