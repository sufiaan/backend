__Overview__
This is Project Group 15's API developed for CIS 4339. Its purpose is to serve information about applicants, clients, workers, events, etc. 
There is a backend folder which contains a models subdirectory and a routes subdirectory. The former serves as a basis by which data can be implemented in MongoDB and the latter establishes the routes of the API, that is the four CRUD operations as required by the scope of the project.

__Explaining the crud operations utilizing family model__


GET http://localhost:3000/family
200
45 ms
Network
Request Headers
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: 1d3eb49b-fdbb-4969-b899-f2d9eecad434
Host: localhost:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 383


POST http://localhost:3000/family
200
51 ms
Network
Request Headers
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: db50dd8a-2f09-449c-a631-4ae4b71ad5d4
Host: localhost:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 336


PUT http://localhost:3000/family/1231241
200
56 ms
Network
Request Headers
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: aafcf84e-9fc4-401b-9bda-4e4826e6ae1e
Host: localhost:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 340


DELETE http://localhost:3000/family/4444
200
49 ms
Network
Request Headers
Content-Type: application/json
User-Agent: PostmanRuntime/7.29.0
Accept: */*
Postman-Token: eeb4170c-5e56-4747-a396-1cca539c71f7
Host: localhost:3000
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 336 

__Applicants__



__Sources__

(for using axios with external api)
https://www.geeksforgeeks.org/how-to-make-get-call-to-an-api-using-axios-in-javascript/