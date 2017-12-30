var numSquares  = 9;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message"); 
var colorDisplay = document.querySelector("#colorDisplay");
var modeButtons = document.querySelectorAll(".mode");
init();
function init(){
	//mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();
}
resetButton.addEventListener("click",function(){
reset();
});

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for(var i = 0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		}
		else
		{
			squares[i].style.display = "none";	
		}
		
	}
	h1.style.backgroundColor = "steelblue";
}


function setupSquares(){
	for(var i = 0;i<squares.length;i++)
		{
			
				squares[i].addEventListener("click",function(){
				var clickedColor = this.style.backgroundColor;
				if(clickedColor === pickedColor){
					messageDisplay.textContent = "Correct!!";
					changeColor(clickedColor);
					resetButton.textContent = "Play Again?";
					h1.style.backgroundColor = clickedColor;
				}
				else
				{
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again!";
				}
			});

		}
}

function setupModeButtons(){
	for(var i=0;i<modeButtons.length;i++)
		{
				modeButtons[i].addEventListener("click",function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				modeButtons[2].classList.remove("selected");
				this.classList.add("selected");
				if(this.textContent === "Easy"){
					numSquares = 3;
				}
				else if(this.textContent === "Hard"){
					numSquares = 6;
				}
				else if(this.textContent === "Expert")
				{
					numSquares = 9;
				}
				reset();
			});
		}
}

function changeColor(color){
	for(var i = 0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
var random = Math.floor(Math.random()*colors.length); 
return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;

}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}