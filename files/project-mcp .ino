#include <SPI.h>
#include <Wire.h>
#include<WiFi.h>
#include <WebServer.h>
#include <Adafruit_MCP23X17.h>
Adafruit_MCP23X17 mcp; 

const char* ssid = "Projembeded";
const char* password = "12345678";

IPAddress local_ip(192, 168, 1, 1);
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(255, 255, 255, 0);
WebServer server(80);

bool led1status=LOW;
bool led2status=LOW;
bool led3status=LOW;
bool led4status=LOW;
bool led5status=LOW;

int ledPin = 8;               // choose the pin for the LED
int inputPin = 7;              // choose the input pin (for PIR sensor)
int ledPin2 = 9;                // choose the pin for the LED
int inputPin2 = 6;
int ledPin3 = 10;
int inputPin3 = 5;
int ledPin4 = 11;
int inputPin4 = 4;
int ledPin5 = 12;
int inputPin5 = 3;

int val = 0;                    // variable for reading the pin status
int val2 = 0;
int val3 = 0;
int val4 = 0;
int val5 = 0;

void setup() {
  Serial.begin(115200);
  WiFi.softAP(ssid, password);
  WiFi.softAPConfig(local_ip, gateway, subnet);
  delay(100);

  server.on("/", handle_OnConnect);
  server.onNotFound(handle_NotFound);
  server.begin();

  mcp.begin_I2C();
  mcp.pinMode(ledPin, OUTPUT);      // declare LED as output
  mcp.pinMode(inputPin, INPUT);     // declare sensor as input
  mcp.pinMode(ledPin2, OUTPUT);      // declare LED as output
  mcp.pinMode(inputPin2, INPUT);
  mcp.pinMode(ledPin3, OUTPUT);
  mcp.pinMode(inputPin3, INPUT);
  mcp.pinMode(ledPin4, OUTPUT);
  mcp.pinMode(inputPin4, INPUT);
  mcp.pinMode(ledPin5, OUTPUT);
  mcp.pinMode(inputPin5, INPUT);
}
////server
void handle_OnConnect() {
  Serial.println("On server");
  Serial.println("LED 1 : OFF | LED 2 : OFF");
  Serial.println("LED 3 : OFF | LED 4 : OFF");
  Serial.println("LED 5 : OFF ");
  
  server.send(200, "text/html", SendHTML());
}
void handle_NotFound() {
  server.send(404, "text/plain", "Not found");
}

void loop() {
  //LED!
  val = mcp.digitalRead(inputPin);  // read input value

  if (val == HIGH) {  
    mcp.digitalWrite(ledPin, LOW);// turn LED ON
    led1status=LOW;
    
  } if (val == LOW) {
      mcp.digitalWrite(ledPin, HIGH); // turn LED OFF
    
      led1status = HIGH;
    

  }
  ////LED2
  val2 = mcp.digitalRead(inputPin2);// read input value
  if (val2 == HIGH) {            // check if the input is HIGH
    mcp.digitalWrite(ledPin2, LOW);  // turn LED ON
    led2status=LOW;
  } if (val2 == LOW) {
    mcp.digitalWrite(ledPin2, HIGH); // turn LED OFF
    led2status=HIGH;
  }
  ////LED3
  val3 = mcp.digitalRead(inputPin3);// read input value
  if (val3 == HIGH) {            // check if the input is HIGH
    mcp.digitalWrite(ledPin3, LOW);  // turn LED ON
    led3status=LOW;
  } if (val3 == LOW) {
    mcp.digitalWrite(ledPin3, HIGH); // turn LED OFF
    led3status=HIGH;
  }
  ////LED4
  val4 = mcp.digitalRead(inputPin4);// read input value
  if (val4 == HIGH) {            // check if the input is HIGH
    mcp.digitalWrite(ledPin4, LOW);  // turn LED ON
    led4status=LOW;
  } if (val4 == LOW) {
    mcp.digitalWrite(ledPin4, HIGH); // turn LED OFF
    led4status=HIGH;
  }
  ////LED5
  val5 = mcp.digitalRead(inputPin5);// read input value
  if (val5 == HIGH) {            // check if the input is HIGH
    mcp.digitalWrite(ledPin5, LOW);  // turn LED ON
    led5status=LOW;
  } if (val5 == LOW) {
    mcp.digitalWrite(ledPin5, HIGH); // turn LED OFF
    led5status=HIGH;
  }
  
  server.handleClient();
  
}

String SendHTML() {
  String ptr = "<!DOCTYPE html> <html>\n";
  ptr += "<head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n";
  ptr += "<title>LIGHT</title>\n";
  ptr += "<script>\n";
  ptr += "function autoRefresh() {\n";
  ptr += "       window.location = window.location.href;\n";
  ptr += "}\n";
  ptr += "setInterval('autoRefresh()', 1000);\n";
  ptr += "</script>\n";
  ptr += "<style>html { font-family: Helvetica; display: inline-block; margin: 0px auto; text-align: center;}\n";
  ptr += "body{margin-top: 50px;} h1 {color: #444444;margin: 50px auto 30px;} h3 {color: #444444;margin-bottom: 50px;}\n";
  ptr += "p {font-size: 14px;color: #888;margin-bottom: 10px;}\n";
  ptr += "</style>\n";
  ptr += "</head>\n";
  ptr += "<body>\n";
  ptr += "<h1>ESP32 Web Server</h1>\n";
  ptr += "<h1>IP: 192.168.1.1 </h1>\n";
  
  if(led1status)
  {
    ptr += "<p><h3>LED1 : ON</h3></p>\n";
    
  }
  else
  {
    ptr += "<p><h3>LED1 : OFF</h3></p>\n";
    
  }
  if(led2status)
  {
    ptr += "<p><h3>LED2 : ON </h3></p>\n";
  }
  else
  {
    ptr += "<p><h3>LED2 : OFF </h3></p>\n";
  }
  if(led3status)
  {
    ptr += "<p><h3>LED3 : ON </h3></p>\n";
  }
  else
  {
    ptr += "<p><h3>LED3 : OFF </h3></p>\n";
  }
  if(led4status)
  {
    ptr += "<p><h3>LED4 : ON</h3></p>\n"; 
  }
  else
  {
    ptr += "<p><h3>LED4 : OFF</h3></p>\n"; 
  }
  if(led5status)
  {
    ptr += "<p><h3>LED5 : ON</h3></p>\n";
  }
  else
  {
    ptr += "<p><h3>LED5 : OFF</h3></p>\n";
  }
  
  
  ptr += "</body>\n";
  ptr += "</html>\n";
  return ptr;
}
