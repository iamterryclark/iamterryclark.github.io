
class QuadClass {
  PVector [] point = new PVector [4]; // points for quad
  PVector [] pointChange = new PVector [4]; // points changed for quad
  float x, y;
  float angle = 1; //0.05 is original angle
  int scalar = 200;
  float speed = 0.05;

  QuadClass( int x1, int y1, int _x1, int _y1, float _speed) {
    point[0] = new PVector(x1, y1);
    point[1] = new PVector(x1, y1 + _y1);
    point[2] = new PVector(x1 + _x1, y1 + _y1);
    point[3] = new PVector(x1 + _x1, y1);
    speed = _speed;
  }

  void run() {
    update();    
    display();
  }

  void update() {
    //this makes each point in the quad draw a circle
    x = sin(angle) * scalar/6; // x position for changed vector points
    y = cos(angle) * scalar/6; // y position for changed vector points

    if (mousePressed) {
      angle += speed;
    } else {
      angle -= speed;
    }

    pointChange[0] = new PVector(x, y).add(point[0]);
    pointChange[1] = new PVector(-x, -y).add(point[1]);
    pointChange[2] = new PVector(x, -y).add(point[2]);
    pointChange[3] = new PVector(x, y).add(point[3]);
  }

  void display() {
    noFill();
    beginShape();
    if (key == '1') {
      strokeWeight(2);
      stroke(255, 255, 255);
      for (int count = 0; count < pointChange.length; count++) {
        point(pointChange[count].x, pointChange[count].y);
      }
    } else if (key == '2') {
      strokeWeight(1);
      stroke(255, 255, 255);
      for (int count = 0; count < pointChange.length; count++) {
        vertex(pointChange[count].x, pointChange[count].y);
      }
    } else {
      strokeWeight(2);
      stroke(255, 255, 255);
      rect(pointChange[0].x, pointChange[0].y, 15, 15);
      ellipse(pointChange[1].x, pointChange[1].y, 5, 5);
      ellipse(pointChange[2].x, pointChange[2].y, 10, 10);
      rect(pointChange[3].x, pointChange[3].y, 5, 5);
    }
    endShape(CLOSE);
  }
}