# Terminologies of Computer networks

# protocols

- set of rules setup to communicate and share information over a network.
- ex: HTTP, UDP,TCP, SMTP,etc...

# packets

- inorder to share data, we cant send big chunk of data over the network.
- every nw has capacity, inorder to leverage the capacity we divide the data to be sent into smaller chunks. these small chunks are called as packets.
- if the packet is small,  we can manage them. if the package is lost then we can regenerate them.
- if we send whole big chunnk of file, then if we lost it in between. its difficult to regenerate this.

# address

- when we are sending msg over a network, requires destination details. these destination details uniquely identifies end system.

# ports

- you are trying to send gift to ur friend where they are living.on that addess, their family members are also there in the same address. now whom to refer to is specified by the name that we put on parcel.
- in our computr system or mobile phone, lot of apps are going on, the packet that u r gettting over network is for which application. because the address is of ur end system. in ourt mobile phone, at which process the corresponding message belonging to how is goint identify that.
- any machine could be running many network applications. inorder to distinguish these apps for reciving msgs use ports. (formally port number.).
- address here refered to as ip address.
- when u send a msg, u need to put the address, 
 -- ip address + port = socket address.
- every process has 16 bit port number. 
- it is from the range 0 - 2^16. = 65535.
- port numbers from 0 - 1023 -> for well known ports. its reserved. by the protocol only usecase is defined already.
 -- port 80 - http
 -- port 143 - https
