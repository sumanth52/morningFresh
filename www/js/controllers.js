angular.module('starter.controllers', [])
.controller('AccountCtrl', function($scope,$state) {
	

  $scope.gamess=function(){$state.go('games'); }
  $scope.buyProductLink=function(){	  window.open("http://www.drinkmorningfresh.com/products" , "_system");
  }


})


.controller('homeCtrl', function($scope,$http,$state) {
			    console.log(screen.orientation.type);
			$scope.changeOriantationPortrait = function() {
           screen.lockOrientation('portrait-primary');
       }
$scope.changeOriantationPortrait();
  $scope.game1=function(){$state.go('game1'); }
  $scope.game2=function(){$state.go('game2'); }
  $scope.game3=function(){$state.go('game3'); }
  $scope.game4=function(){$state.go('game4'); }
})
.controller('headsUpCtrl', function($scope,$http,$state) {
		    console.log(screen.orientation.type);
	    $scope.changeOriantationPortrait = function() {
           screen.lockOrientation('landscape-primary');
       }
	 
	 
$scope.changeOriantationPortrait();
	$scope.Score=-1;
	$scope.headsUpData=["British", "Texan", "Chinese", "Indian", "Spanish", "German", "Russian", "Irish", "Dutch", "Egyptian", "Mission Impossible", "Transformers", "Avengers", "Dark Knight", "The Conjuring", "Texas Chainsaw Massacre", "Hannibal", "Devil Wears Prada", "Sex in the City", "Rush Hour", "Grey Goose Vodka", "Bacardi Rum", "Old Monk", "Bira", "Jagermeister", "Sake", "Dom Perignon", "Gin", "Sula", "Tequila", "Jakie Chan", "Chris Rock", "Arnold Schwarzenegger", "Emilia Clarke", "Ann Hathaway", "Gigi Hadid", "Samuel L Jackson", "Bruce Willis", "Jennifer Lawrence", "Mila Kunis", "Train", "Monkey", "Laugh out Loud", "Book Worm", "Ambulance", "Lord of the Rings", "EMINEM", "Bangkok", "Chicken pox", "Head over Heels"]
	$scope.headsUp=function(){ $scope.Score+=1; $scope.headsUpHint = $scope.headsUpData[Math.floor(Math.random() * 50)]; 		 }
	$scope.headsUp();
})
.controller('DashCtrl', function($scope,$http,$state) {
	    console.log(screen.orientation.type);
	    $scope.changeOriantationPortrait = function() {
           screen.lockOrientation('portrait-primary');
       }
     // $window.open('http://drunkendinesh.com/', '_self');
	 
	 
$scope.changeOriantationPortrait();
	$scope.Score=-1;
$scope.reset = function(form) {
      $scope.color.name = "";
      $scope.form.$setPristine();
    }
	  $scope.questions=function(){

	  var tList=this;
         tList.products=[];

         $http.get('data/transactiondata.json').success(function(data){
         tList.products=data;
		 //console.log(tList.products[Math.floor(Math.random() * 10) + 1 ]);
		 console.log(Math.floor(Math.random() * 23));
		 $scope.lists=tList.products[Math.floor(Math.random() * 23) ];
		 console.log($scope.lists);
		 $scope.Score+=1;
		 if($scope.Score>=10){$state.go('home');}
         })
	  console.log($scope.choice);
	  }
	  $scope.questions();
	  	$scope.uncheck = function (event,color) {
	console.log(color.$pristine);
	color.$pristine = true;
    if ($scope.checked == event.target.value)
        $scope.checked = false
}
})

  .controller('loaderCtrl',function($scope,$window){
    //window.screen.lockOrientation('portrait');
    //screenOrientation.Orientations('landscape');
	//screen.lockOrientation('portrait');
    //screen.orientation.type=portrait;
    console.log(screen.orientation.type);
	    $scope.changeOriantationPortrait = function() {
           screen.lockOrientation('landscape-primary');
       }
     // $window.open('http://drunkendinesh.com/', '_self');
	 
	 
$scope.changeOriantationPortrait();
  })


.controller('game2Ctrl', function($scope,$state) {
	    console.log(screen.orientation.type);
	    $scope.changeOriantationPortrait = function() {
           screen.lockOrientation('portrait-primary');
       }
     // $window.open('http://drunkendinesh.com/', '_self');
	 
	 
$scope.changeOriantationPortrait();
		$scope.Score=-1;

 $scope.game2Data= ["Never Have I Ever licked a window",

 "fallen asleep I class and woken up in a pool of drool",

 "Never Have I ever been on MG road past am",

 "run to save my life",

 "Taken food out of a trash can and ate it",

 "Flirted my way out of a speeding ticket",

 "Used the Laptop on the restroom",

 "Made money by performing on the street",

 "had a near death experience",

 "a crush on a friend’s parent",

 "walked for more than  hours",

 "pretended that shampoo bottle was an Oscar",

 "broken something at friend’s house and not told them",

 "cheated on an exam",

 "Eaten a dog",

 "Stole a pencil",

 "gone scuba diving",

 "Jumped off a roof",

 "been arrested",

 "got a spontaneous tattoo",

 "thought my dog was my royal chariot",

 "taken part in a fancy dress competition and won",

 "broken a bone",

 "shot a gun",

 "Had surgery",

 "Had a surprise party thrown for me",

 "pranked a teacher",

 "walked out of a movie because it was horrible",

 "tried to cut my own hair",

 "thought I was a dolphin",

 "accidently said ‘I love you to someone’",

 "had a paranormal experience",

 "been trapped in an elevator",

 "got stiches",

 "been on a yacht",

 "crashed my car",

 "woken up and couldn’t move",

 "cross texted",

 "sung karaoke and hated it",

 "gotten slapped",

 "been stalked",

 "been awake for  days straight",

 "dyed my hair a crazy colour",

 "gotten mugged",

 "danced in an Elevator",

 "been to Retro night at Shiro",

 "Texted for  hours straight",

 "Cried in public because of a song",

 "travelled by plane",

 "bungee jumped",

 "Laughed so hard I peed",

 "Never have I ever woken up and had to introduced myself to the person next to me",

 "Played Strip Poker",

 "read  shades of grey",

 "kissed a girl",

 "gone home with a complete stranger",

 "given a fake number",

 "performed or received a Lap dance",

 "have I fantasised about by best friend’s boyfriend/gurlifriend",

 "googled sex positions",

 "said ‘I love you’ just to have sex with them",

 "given or received a blowjob",

 "made out in public",

 "passed out on the toilet seat of a club",

 "make up sex",

 "been to a strip club",

 "worn a thong",

 "played strip poker and got completely naked",

 "tried an act from  shades of grey",

 "had phone sex",

 "taken a pregnancy test",

 "made love in the backseat of a car",

 "not used protection",

 "been walked in on by my parents",

 "skinny dipped",

 "worn clothes to hide a hickey",

 "used a tampon",

 "woken up drunk",

 "not remembered how I got home",

 "shoplifted",

 "fooled around in every room in your house",

 "bought condoms",

 "had jello shots",

 "had the munchies",

 "spent the night in jail",

 "watched porn and liked it",

 "tried weed",

 "run from the police",

 "had Morning Fresh",

 "got drunk at a shady bar",

 "drank sex on the beach",

 "Made out with someone and lost your gum in their mouth",

 "had  shots on your  st birthday",

 "done body shots",

 "dated someone and their sibling",

 "been so scared at a movie that you grabbed the leg of the stranger next to you",

 "had an explicit dream about your teacher",

 "got a period",

 "been so drunk you don’t remember your pin number",

 "fooled around in the bathroom of a KFC",

 "made out in an elevator"];
$scope.game2Question2=function(){ $scope.Score+=1; $scope.game2Question = $scope.game2Data[Math.floor(Math.random() * 101)]; 		 }
$scope.game2Question2();
})

