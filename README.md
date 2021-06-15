# Timestamp
FreeCodeCamp APIs and Microservices Projects - Timestamp Microservice

This is a Node.js (with Express.js) little application which is part of the FCC Back End Certification. It takes a date string and gives you back a JSON with Unix value and natural format for the given date.

# User stories:
1> A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds

2> A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT

3> A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

4> Your project can handle dates that can be successfully parsed by new Date(date_string)

5> If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" }

6> An empty date parameter should return the current time in a JSON object with a unix key

7> An empty date parameter should return the current time in a JSON object with a utc key


Example output:
```
{ "unix": 1623757264408 "utc": Tue, 15 Jun 2021 11:41:04 GMT }
```

# Live demo:
https://timestamp-julienmcoding.herokuapp.com/
