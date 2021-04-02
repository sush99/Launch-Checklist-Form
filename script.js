// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", () => {
   let submitForm = this.document.getElementById("formSubmit");

   submitForm.addEventListener("click", (event) => {
      let pilotName = this.document.getElementById("pilotName")
      let copilotName = this.document.getElementById("copilotName");
      let fuel = this.document.getElementById("fuelLevel");
      let cargoMass = this.document.getElementById("cargoMass");

      if(pilotName.value === '' || copilotName.value === '' || fuel.value === '' || cargoMass === ''){
         window.alert("Please enter all information");
         event.preventDefault();
      }

      if(typeof(pilotName.value) !== "string" || typeof(copilotName.value) !== "string"){
         window.alert("Please enter only letters for the names");
         event.preventDefault();
      }
      else{
         this.document.getElementById("pilotStatus").innerHTML = `${pilotName.value} Ready`;
         this.document.getElementById("copilotStatus").innerHTML = `${copilotName.value} Ready`;
      }
      if(isNaN(Number(fuel.value)) || isNaN(Number(cargoMass.value))){
         window.alert("Pleae only enter numbers for the cargo");
         event.preventDefault();
      }
      else if (Number(fuel.value) < 10000 || Number(cargoMass.value > 10000)){
         this.document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch";
         this.document.getElementById("launchStatus").style.color = "red";
         this.document.getElementById("faultyItems").style.visibility = "visible";
         if(Number(fuel.value) < 10000){
            this.document.getElementById("fuelStatus").innerHTML = "Fuel level not high enough for launch"
         }
         if (Number(cargoMass.value > 10000)){
            this.document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch"
         }
         if(Number(fuel.value) > 10000){
            this.document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
         }
         if (Number(cargoMass.value < 10000)){
            this.document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
         }
         event.preventDefault();
      }
      else{
         this.document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
         this.document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
         this.document.getElementById("faultyItems").style.visibility = "hidden";
         this.document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
         this.document.getElementById("launchStatus").style.color = "green";

         event.preventDefault();
      } 
   
   })

   const planetList = fetch("https://handlers.education.launchcode.org/static/planets.json").then((response) => {
      response.json().then(json => {
         let missionChoice = Math.floor((Math.random() * 100)) % json.length;
         console.log(missionChoice)
         let missionTarget = this.document.getElementById("missionTarget");
         missionTarget.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[missionChoice].name}</li>
            <li>Diameter: ${json[missionChoice].diameter}</li>
            <li>Star: ${json[missionChoice].star}</li>
            <li>Distance from Earth: ${json[missionChoice].distance}</li>
            <li>Number of Moons: ${json[missionChoice].moons}</li>
         </ol>
         <img src="${json[missionChoice].image}">`;
      })

   });

   })