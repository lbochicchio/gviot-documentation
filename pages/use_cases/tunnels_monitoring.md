### GV IoT Platform to monitor the health of a tunnel.

<div>
   <img src="{{site.baseurl}}{{site.images}}/use-cases/images/tunnels_monitoring.png" />
</div>

The scenario for the use of the GV IoT Platform permits the monitoring of the health of a tunnel, in term of structural deformations that may damage the tunnel itself and put Humans in danger.

Natural causes that affect the structure of a tunnel:
* Landslides
* Earthquakes
* Wind
* Infiltrations
* Temperature
* Etc.

Human causes that affect the structure of a tunnel:
* Traffic
* Heavy vehicles
* Accidents
* Etc.

But how do you actually prepare a tunnel to be monitored for deformations.

We can use a FS22 Industrial BraggMETER (picture 1) and wire the entire tunnel with the fibre cable (picture 2) and strain sensors (picture 3).

Source: [NTSG Val di Sambro](http://www.ntsgen.com/en/performed-works/tunnel-val-di-sambro):

> "NTSG: 3 lines of sensors have been installed along the whole tunnel, while the thermal sensors have been installed at distances previously set. This to compensate the effects, on the readings, of thermal variations and to obtain a pure mechanical deformation. It is possible to control the longitudinal movements of the tunnel, and verify if the tunnel keeps the initial shape as designed."

* <code>Number of sensors:&nbsp;&nbsp;&nbsp;780</code>
* <code>Sampling rate:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10 Hz</code>
* <code>Wiring:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;30 km of optical fiber</code>
* <code>Packet dimension:&nbsp;&nbsp;&nbsp;&nbsp;6 bytes (single sensor) - 30 bytes header for all</code>
* <code>PLE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4 (working platform, lifting)</code>
* <code>Working time:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24/24h, 365d/year</code>

We have:

* 780 sensors * 10 Hz * 10 bytes * 60 seconds * 60 minutes * 24 hours
    * <code>~46 Kb per second</code>
    * <code>161,7 MB per hour</code>
    * <code>3,78 GB per day</code>
    * <code>10 messages (~4,6 kb each message) per second to send over the internet</code>

Many information about the IoT technology can be found here: [https://www.hbm.com/en](https://www.hbm.com/en).

<table>
  <tr>
    <td>
      <div>
        <img src="{{site.baseurl}}{{site.images}}/use_cases/images/tunnels/braggmeter.png" />
      </div>
      (1) FS22: Industrial BraggMETER
    </td>
    <td>
      <div>
        <img src="{{site.baseurl}}{{site.images}}/use_cases/images/tunnels/fibre.png" />
      </div>
      (2) Fibre cable: can be very long
    </td>
    <td>
      <div>
        <img src="{{site.baseurl}}{{site.images}}/use_cases/images/tunnels/strain_sensor.png" />
      </div>
      (3) Strain sensor
    </td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>
      <div>
        <img src="{{site.baseurl}}{{site.images}}/use_cases/images/tunnels/braggmonitor.png" />
      </div>
      (4) BraggMONITOR application
    </td>
    <td>
      <div>
        <img src="{{site.baseurl}}{{site.images}}/use_cases/images/tunnels/braggmonitor_details.png" />
      </div>
      (5) BraggMONITOR application
    </td>
    <td>
      <div>
        <img src="{{site.baseurl}}{{site.images}}/use_cases/images/tunnels/sensors.png" />
      </div>
      (6) Other sensors
    </td>
    <td>&nbsp;</td>
  </tr>
</table>

The picture 4 of the BraggMONITOR application (window application that connects via LAN to the Industrial BraggMETER) shows all strain sensors that start from the Industrial BraggMETER, that in this case has four fibre cables doors.

<table>
  <tr>
    <td>
      <div>
        <img src="{{site.baseurl}}{{site.images}}/use_cases/images/tunnels/tunnel_details_7.png" />
      </div>
      (7) The tunnel from one of the working platform (PLE)</td>
    <td>
      <div>
        <img src="{{site.baseurl}}{{site.images}}/use_cases/images/tunnels/tunnel_details_8.png" />
      </div>
      (8) The FS22 + switches</td>
    <td>
      <div>
        <img src="{{site.baseurl}}{{site.images}}/use_cases/images/tunnels/tunnel_details_9.png" />
      </div>
      (9) The fibre cable</td>
  </tr>
  <tr>
    <td>
      <div>
        <img src="{{site.baseurl}}{{site.images}}/use_cases/images/tunnels/tunnel_details_10.png" />
      </div>
      (10) Wiring elements</td>
    <td>
      <div>
        <img src="{{site.baseurl}}{{site.images}}/use_cases/images/tunnels/tunnel_details_11.png" />
      </div>
      (11) Wiring elements</td>
    <td>
      <div>
        <img src="{{site.baseurl}}{{site.images}}/use_cases/images/tunnels/tunnel_details_12.png" />
      </div>
      (12) Wiring elements</td>
  </tr>
</table>
