<h1><strong>Architecture</strong></h1>


<p>
To simplify the exposition of the GV IoT platform, in terms of what it is and how it addresses some of the top IoT issues (amount of data to elaborate, security, scalability, storage and analytics), we will describe the trip of a single measurement from <strong>Things to Humans </strong>and the back trip of a command from <strong>Humans to Things</strong>.
</p>
<p>
To make the narration of the trip more intuitive and concrete we will use a single use case described by the reference scenario below.
</p>
<p>
Since the narration will be done on a specific scenario, we don't pretend to cover every single aspect of the IoT, or to cover all possibilities we have to solve all obstacles, but we strongly believe that the general understanding of the platform will be a lot better. Anyway on some situation we will refer to the other two scenarios.
</p>
<p>
During the trip we will often zoom in and out from details to high level architecture, to better under the the capabilities of the GV IoT platform.
</p>
<p>
Moreover, along the narration we will focus on these aspects of the GV IoT platform:
</p>
<ul>

<li>Security aspects

<li>Traffic and scalability of the platform

<li>The 3M = Modularity, maintainability, monitorability 
</li>
</ul>
<p>
We will also describe what choices we do have at each step. For example:
</p>
<ul>

<li>Are the sensors directly connected to the internet or do we need a dedicated 4G communication?

<li>On the EdgeGateway if we have to transfer to the Gateway 100 GB per day, what protocol it is better to use 
<ul>
 
<li>MQTT
 
<li>json/http
 
<li>Kafka 2 Kafka communication
 
<li>Raw socket communication
</li> 
</ul>

<li>Do we have to send all the data or only an aggregate value?

<li>What about filtering and buffering?
</li>
</ul>
<h3>High level architecture</h3>


<p>
The architecture of the platform will be described in a specific chapter, but for now it is useful to keep it at hand while we explain some aspects of the platform.
</p>
<p>


<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/architecture0.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/architecture0.png" width="" alt="alt_text" title="image_tooltip">

</p>
<h3>Overview of the trip from Things to Humans: sensed data and analytics</h3>


<p>


<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/architecture1.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/architecture1.png" width="" alt="alt_text" title="image_tooltip">

</p>
<p>
We will describe all the steps that a single measure will do from <strong>Things to Humans</strong>:
</p>
<ol>

<li><strong>Starting point - the Things</strong>
<p>

        We will describe how a sensor detects a measure (ex. the temperature of a room at a "T" time), how the measurement is read (raw value) on the sensor and pre-formatted into a digital value (ex. by the firmware and HW on the sensor)
</p>
<ol>

<li>EdgeGateway: sends the data through the internet to the Gateway
<p>

        We don't want to spoil :-) Read the chapter that tells the whole story
</p>
<ol>

<li>Internet: The data crosses the internet

<li>Enter the Gateway

<li>Buffering / decoupling (store the raw data into an intermediate storage)

<li>DataPump from the buffer to the data lake

<li>DataLake & Streaming

<li>Analytics

<li><strong>End point: the Humans</strong>
</li>
</ol>
</li>
</ol>
</li>
</ol>
<h3>Overview of the trip from Humans to Things: configure, administer, act on actuators</h3>


<p>


<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/architecture2.png). Store image on your image server and adjust path/filename if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


<img src="images/architecture2.png" width="" alt="alt_text" title="image_tooltip">

</p>
<p>
We will describe all the steps a single measure will do from <strong>Humans to Things</strong>:
</p>
<ol>

<li><strong>Starting point - the Humans</strong>
<p>

        We will describe what a person can do to act on a Thing: open a door, turn on the heat, turn off lights, etc.
</p>
<ol>

<li>The console
<p>

        We don't want to spoil :-) Read the chapter that tells the whole story
</p>
<ol>

<li>The core

<li>Dispatch commands

<li>The Gateway receive the command

<li>Internet: The command crosses the internet

<li>The EdgeGateway receive the command

<li><strong>End point: the Things</strong>
</li>
</ol>
</li>
</ol>
</li>
</ol>
