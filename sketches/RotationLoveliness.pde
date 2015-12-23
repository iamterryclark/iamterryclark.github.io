//Description:
//RoatationLoveliness is an Interactive visualulisation.
//I wanted to create a program which used PI as I am interested in circle 
//movements and also is a value recently understood within my mathematics class.

//METHOD:
//The method used was to try different functions from the reference of Processing.org 
//and to place them inside and outside of the loops to test the different looks of
//the visualisations.

//INSTRUCTIONS: 
//Click the mouse to change the rotation.
//Move the mouse in order to dim and change the colors.
//Press 1, 2 or 3 to change rotation style.

// ---------------------------------------------------------------------- //

//This variable sets the speed of the rotation
float speed;
//https://learn.gold.ac.uk/mod/forum/discuss.php?d=127425
char store = '1';

//This sets the screen size in pixels
void setup() {
  size(450, 450);
  smooth();
}

//The draw function repeats all of the code within it in a continuous loop.
void draw() {
  //Having the background here will mean that it effectively clears the screen continuously
  //and will stop the circles 'trailing'.
  background(0);
  //REFERENCE: https://processing.org/reference/translate_.html
  //Here I wanted to change the area in which the visualisation rotatates 
  //from the top left hand side of the screen to the center.   
  translate(height/2, width/2);
  
  //REFERENCE: https://processing.org/reference/for.html
  //From my previous experience in foundation I understood that a nested for loop 
  //would create a grid and I wanted to use this to draw a grid of circles.
  //I needed the reference to understand syntax.
      
  //The for loop sets a variable cY to 0 and creates loctations at every 30 pixels left 
  //of the previous point going up to a maximum value under 500 pixels. This repeats the
  //same process to each row under it and thus creates a grid.
  for (int cX = 0; cX < 250; cX += 15) {
    for (int cY = 0; cY < 250; cY += 15) { 
      //REFERENCE: https://processing.org/reference/rotate_.html
      //The rotation is set to each of the circles creates below as this its within 
      //the nested for loops and rotates slowly by adding speed.
      rotate(PI+speed);  
      //The circles are created with no stroke (border) around them
      noStroke();
        
      //Fill is created using variables cX and cY values from the for loop.
      //This creates the effect that the colors slightly change the further 
      //from the center the circles are located. mouseY is also used to add
      //interactivity and turns the color towards black creating a dimming effect
        
      //Fill has an opacity option as the last variable and I used cY to slowly increase the opactity
      //to create a sense of depth
      fill(cX-150+cY, cY + mouseX-150, mouseY-150, cY);
        
      //The ellipse uses the cY variable to create different sized circles and I divided
      //it to make them smaller and give each circle space to move
      //The if functions here help add more interactivity and change the style in which the circles are drawn by 
      //changing their X and Y positions. When each key is pressed different styles of rotations are drawn to screen
      
      //if (key > '0' && key < '4') {
      //    store = key;
      //}
      store = (key > '0' && key < '4') ? key : store;
      
      if (store == '3') {
       ellipse(cX, cX, cY/10, cY/10); 
      } else if (store == '2') {
       ellipse(cY, cY, cY/10, cY/10); 
      } else if (store == '1') {
       ellipse(cX, cY, cY/10, cY/10);
      }
      
      //switch(key){
      //  case '3':
      //    ellipse(cX, cX, cY/10, cY/10); 
      //  break;
      //  case '2':
      //    ellipse(cY, cY, cY/10, cY/10); 
      //  break;
      //  default:
      //    ellipse(cX, cY, cY/10, cY/10); 
      //  break;
      //}
    }
  }  
  //This if function reverses the speed in order to play the visualisation in the opposite direction.
  //This allows a user to repeat a particular orbit that they prefer.
  if (mousePressed) {
    speed -= 0.0001;
  } else {
    speed += 0.0001;
  }  
}