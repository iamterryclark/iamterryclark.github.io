/*
 Description: A visulisation that using the circular motion 
 References: https://www.youtube.com/watch?v=PP4_96YzBnM
 //Reference: http://www.openprocessing.org/sketch/106191
 Instructions: Press mouse to reverse the rotation. Press 1 to 3 to change visuals
 
 */

QuadClass myQuad; //Initiate the QuadClass with a name
ArrayList<QuadClass> myQuads = new ArrayList<QuadClass>(); // Store a dynamic list of Quads
int amount = 30; // This is the amount of quads

void setup() {
  size(640, 640);
  //used a for loop at the start to sraw the first points of the quad
  //These are assigned to 'point' within the QuadClass class
  //'pointChange' is 
  
  for (int i = 1; i < amount; i++) {
    myQuads.add(new QuadClass(width/3, height/8 + (i*15), 3*width/8, height/8, float(i)/160));
  }
}

void draw() {

  background(0);
  for (QuadClass quad : myQuads) {
    quad.run();
  }
}