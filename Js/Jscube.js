var colors = fillArray(21);
var compare = [];
var score = [];
var level2 = [];
function duplicateArray(arr){
for(var i in arr) {
arr.push(arr[i]);
} 
 return arr
};


function gameLogic(obj){
	obj.style.backgroundColor = obj.dataset.color;
	if(compare.length <= 2){
	compare.push(obj);
	compare[0].style.pointerEvents = 'none';
	}
	if(compare.length == 2){
		$("#preventClick").show();
	setTimeout(function(){
         var value;
	      if(compare[0].dataset.color == compare[1].dataset.color){
			compare[0].style.visibility = "hidden";
			compare[1].style.visibility = "hidden";
			score.push(value += 1);
			real_points.innerHTML = (score.length);
		}
			compare[0].style.backgroundColor = "black";
			compare[1].style.backgroundColor = "black";
			compare[0].style.pointerEvents = "auto";
			compare.length = 0;
			$("#preventClick").hide();
		},1000)


}

	


};
function shuffleArray(arr){
var currentIndex = arr.length,temporaryValue,randomIndex;

while(0 !== currentIndex){
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex-=1;
temporaryValue = arr[currentIndex];
arr[currentIndex] = arr[randomIndex];
arr[randomIndex] = temporaryValue;

}
return arr
};

function generateView(arr){
var content = "";
for(var i  in arr){
content += "<div onclick ='gameLogic(this)' style ='background-color:black;'data-color='"+arr[i]+"'></div>" ;
}
$("#holeGame").html(content);
};



function fillArray(length){
var count = 0;
var array = [];
while (count < length){
	count++;
	array.push(getRandomColor());
}
return array;
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function timer(){

			

 var object = document.getElementById('timer_inp');

 object.innerHTML--;

 var result = document.getElementById("time_over_result");

 var GameOverSound = document.getElementById("audio");

 var preventClick2 = document.getElementById("preventClick2")

  

 if(object.innerHTML == 0){


 	result.innerHTML = 'GAME OVER';

 	 GameOverSound.play();

 	 preventClick2.style.display = "block"

 	 object.style.color = "rgba(158, 158, 158, 0.01)";





   setTimeout(function(){},1000);


}

 else{setTimeout(timer,1000);}

}

setTimeout(timer,1000);


function reloadPage()
{
location.reload()
}


duplicateArray(colors);
shuffleArray(colors);
generateView(colors);