//https://www.eclipse.org/paho/clients/js/

function SENSOR1_ON() {
	//alert("led on");
	console.log("sensor1 on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("sensor1 activo");
    	message.destinationName = "ronnie.llagua@unach.edu.ec/t1";
    	client.send(message);
      

}


function SENSOR2_ON(){	
	//alert("led off");
	console.log("sensor2 on");
	message = new Paho.MQTT.Message("sensor2 activo");
    	message.destinationName = "ronnie.llagua@unach.edu.ec/t11";
    	client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
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

  
