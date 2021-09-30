//https://www.eclipse.org/paho/clients/js/

function LED1_On() {
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "ronnie.llagua@unach.edu.ec/t1";
    	client.send(message);
      

}


function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "ronnie.llagua@unach.edu.ec/t11";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
}

function Semestre() {
	//alert("led on");
	console.log("inicio");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("INICIO");
    	message.destinationName = "ronnie.llagua@unach.edu.ec/t1";
    	client.send(message);
      

}
    
  




// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "ronnie.llagua@unach.edu.ec",
    password: "140112wolf4",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("ronnie.llagua@unach.edu.ec/t2");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "ronnie.llagua@unach.edu.ec/t1";
    client.send(message);

  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
    var la=message.payloadString.split("-");
	  document.getElementById("sensor").innerHTML=la[0];
    document.getElementById("sensor1").innerHTML=la[1];

  }

  
