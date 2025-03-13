# network protocol stack

- there are 2 layers
- 1. OSI
- 2. TCP/IP

# OSI
- total 7 layers
 -- application layer
 -- presentation layer
 -- session layer
 -- transport layer
 -- network layer
 -- data link layer
 -- Physical layer

# TCP / IP
- total 5 layers
- the first 3 layers that is
 -- application layer
 -- presentation layer
 -- session layer
 is combined as a application layer all together.

 -- application layer
 -- transport layer
 -- network layer
 -- data link layer
 -- Physical layer

 # application layer
  - its actually the end user physical device where the application is running.
  - Roles:
  - writing / providing data off the network.
  - Reading  and writing the data from user.
  - Also contains applications that helps users to interact on network.
  - Also sometimes err handling and recovery also done.
  - Err handling & recovery can also be done.

  # presentation layer
  - how to present the data for rest of the layer.
  - its also useful for compression of data as well as encryption of data as well.

  # session layer
  - any user session mgt will be done here
  - ex: login logoff.

  # transport layer
  - Divides big chunk of data coming from above and manage this small chunks on how are they divided.

 # network layer
 - How actually the packets are routed over the internet.

 # Datalink lyaer
 - for error/ flow control. if any err occured during transport it handles it.
 - multiplexing and demultiplexing also handles
 - handles which address the packets to be delived.

 # Physical layer
 - data arrives at the cable connections or satelight or dialogue connections.

 # Where it exists?
 - end systems
 - Instant msging
 - WWW
 - VOIP
 - email