// Size of cells
var cellSize = 5;

// How likely for a cell to be alive at start (in percentage)
var probabilityOfAliveAtStart = 20;

// Variables for timer
var varerval = 100;
var lastRecordedTime = 0;

// Array of cells
var cells = [];
// Buffer to record the state of the cells and use this while changing the others in the varerations
var cellsBuffer =[];


// Pause
var pause = false;

function setup() {
  //fullScreen();
  //createCanvas (640, 360);


  // Instantiate arrays 
  // cells = new [width/cellSize][height/cellSize];
  // cellsBuffer = new [width/cellSize][height/cellSize];

  // This stroke will draw the background grid
  stroke(48);

  noSmooth();
  var cells =[[10, 20], [10, 20]] 
  // Initialization of cells
  for (var x=0; x<width/cellSize; x++) {
  	// cells[x] = x;
    for (var y=0; y<height/cellSize; y++) {
      var state = random (100);
      console.log(state, probabilityOfAliveAtStart);
      if(state > probabilityOfAliveAtStart) { 
        state = 0;
        console.log("mort");
        cells[x][y] = state;
      }
      else {
        state = 1;
        console.log("vivant");
        cells[x][y] = state;
      }
       // Save state of each cell
    }
  }
  background(0); // Fill in black in case cells don't cover all the windows
  console.log(cells);
}



function draw() {
  //Draw grid
  for (var x=0; x<width/cellSize; x++) {
    for (var y=0; y<height/cellSize; y++) {

      if (cells[x][y]==1) {
        fill(0, 255, 0); // If alive
      }
      else {
        fill(0); // If dead
      }
      rect (x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
  // Iterate if timer ticks
  if (millis()-lastRecordedTime>varerval) {
    if (!pause) {
      iteration();
      lastRecordedTime = millis();
    }
  }

  // Create  new cells manually on pause
  if (pause && mouseIsPressed) {
    // Map and afunction out of bound errors
    var xCellOver = map(mouseX, 0, width, 0, width/cellSize);
    xCellOver = constrain(xCellOver, 0, width/cellSize-1);
    var yCellOver = map(mouseY, 0, height, 0, height/cellSize);
    yCellOver = constrain(yCellOver, 0, height/cellSize-1);

    // Check against cells in buffer
    if (cellsBuffer[xCellOver][yCellOver]==1) { // Cell is alive
      cells[xCellOver][yCellOver]=0; // Kill
      fill(0); // Fill with kill color
    }
    else { // Cell is dead
      cells[xCellOver][yCellOver]=1; // Make alive
      fill(0, 200, 0); // Fill alive color
    }
  } 
  else if (pause && !mouseIsPressed) { // And then save to buffer once mouse goes up
    // Save cells to buffer (so we opeate with one array keeping the other varact)
    for (var x=0; x<width/cellSize; x++) {
      for (var y=0; y<height/cellSize; y++) {
        cellsBuffer[x][y] = cells[x][y];
      }
    }
  }
}



function iteration() { // When the clock ticks
  // Save cells to buffer (so we opeate with one array keeping the other varact)
  for (var x=0; x<width/cellSize; x++) {
  	cellsBuffer[x] = x;
    for (var y=0; y<height/cellSize; y++) {
      cellsBuffer[x][y] = cells[x][y];
    }
  }

  // Visit each cell:
  for (var x=0; x<width/cellSize; x++) {
    for (var y=0; y<height/cellSize; y++) {
      // And visit all the neighbours of each cell
      var neighbours = 0; // We'll count the neighbours
      for (var xx=x-1; xx<=x+1;xx++) {
        for (var yy=y-1; yy<=y+1;yy++) {  
          if (((xx>=0)&&(xx<width/cellSize))&&((yy>=0)&&(yy<height/cellSize))) { // Make sure you are not out of bounds
            if (!((xx==x)&&(yy==y))) { // Make sure to to check against self
              if (cellsBuffer[xx][yy]==1){
                neighbours ++; // Check alive neighbours and count them
              }
            } // End of if
          } // End of if
        } // End of yy loop
      } //End of xx loop
      // We've checked the neigbours: apply rules!
      if (cellsBuffer[x][y]==1) { // The cell is alive: kill it if necessary
        if (neighbours < 2 || neighbours > 3) {
          cells[x][y] = 0; // Die unless it has 2 or 3 neighbours
        }
      } 
      else { // The cell is dead: make it live if necessary      
        if (neighbours == 3 ) {
          cells[x][y] = 1; // Only if it has 3 neighbours
        }
      } // End of if
    } // End of y loop
  } // End of x loop
} // End of function

function keyPressed() {
  if (key=='r' || key == 'R') {
    // Restart: reinitialization of cells
    for (var x=0; x<width/cellSize; x++) {
      for (var y=0; y<height/cellSize; y++) {
        var state = random (100);
        if (state > probabilityOfAliveAtStart) {
          state = 0;
        }
        else {
          state = 1;
        }
        cells[x][y] = state; // Save state of each cell
      }
    }
  }
  if (key==' ') { // On/off of pause
    pause = !pause;
  }
  if (key=='c' || key == 'C') { // Clear all
    for (var x=0; x<width/cellSize; x++) {
      for (var y=0; y<height/cellSize; y++) {
        cells[x][y] = 0; // Save all to zero
      }
    }
  }
}