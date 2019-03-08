# **Things to Humans**

Here are described the two most important components in the IoT Platform: the Edge Gateway and the Gateway.

<div>
   <img src="{{site.baseurl}}{{site.images}}/solutions/images/gv-iot-gateway0.png" />
</div>



## EdgeGateway: sends the data through the internet to the Gateway

The Edge Gateway is a very particular component of any IoT platform and is very specific and tight to the "Thing" that has to be connected. If the Thing can send messages directly to the Gateway, the Edge Gateway may not be necessary.

We developed an Edge Gateway that is responsible to interface all kind of sensors. It handles the entire lifecycle of the device: connect, disconnect, restart, configure, etc.

At this stage we have many decision to take. 



*   Do we have to send the raw data to the Gateway?
    *   For this particular scenario, after having considered the amount of data and its nature, we can decide to save the raw data and the derived data (from formulas) locally in csv format and send to the platform (the Gateway) an aggregation of the information.
*   Do we have to buffer the information in case of slow or discontinuous internet connections? Which communication protocol can we use to send the data over the internet to the Gateway?
    *   Since we are saving raw data locally, we can decide not to buffer information. Much depends also on what we need to do on the platform, at the end of our trip. Is it just for monitoring? Do we have to analyze the data further and at which level of detail? Can we afford to lose some data for the time the internet connection would be down (rare event)?
    *   About the protocol, since we decided to send only aggregated information to the Gateway (once a minute, for example), the amount of data to send over the internet is not so high and we can choose a comfortable communication protocol to do the job, like json/https. Eventually we can scale the Gateway if necessary using a load balancer and a cluster of Gateways
*   Do I have to send all data or just an aggregation of them? How much data are we talking about, in size and number of requests per second?
    *   For a long term monitoring of the tunnel, for example, an aggregation of data over a minute is just fine. In fact we need to monitor the tunnel over the years in search of small and slow changes and only occasionally or on demand we may need to analyze raw data deeper, and in this case we still have the raw data saved on the computer on the Edge (saved on a NAS)
*   Do we really need an Edge Gateway or can we do everything from the remote Gateway?
    *   If we have a very complex Thing to manage, we are forced to use a computer on the Edge to manage it.
    *   The other reason, as important as the first one, is that the processing of the informations needs to keep up with the speed the Thing sends information and it could be very difficult to manage this remotely over the internet
*   Are there computations to make before to send the data through the internet?
    *   Do we have to filter information before to send them?
        *   Sometimes we don't need filtering. All information are very important.
    *   Elaboration? Transformations?
        *   About elaboration, sometimes we need to apply many math formulas or logical transformations on the raw data. This is necessary to compute, for example, strain, inclination measurements, acceleration, temperature, etc.

After all formatting (binary to ascii) and computations (formulas in the time and frequency domain), we call the Gateway of the platform, making a **json/https call**.


## Gateway

The Gateway is the most important component of the platform, that is responsible to analyze the incoming messages and authorize them to enter the platform.

It performs these actions and checks:



*   Handle the physical protocol of the Thing to monitor
*   Check the syntax and the content of the received message
*   Determine the Network, Thing and Device the message represents
    *   The header will be used to determine Network, Thing and Device of the incoming measure
*   Authorize the message to enter, if enabled, into the platform
*   Elaborate the incoming message to adapt it to the internal data model of the platform
*   Write the message to the "buffering / decoupling" layer

<!-- Docs to Markdown version 1.0β16 -->
