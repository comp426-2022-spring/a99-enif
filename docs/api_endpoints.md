# API Documentation

## Endpoints

### /api/get/us/ (GET)

Get nationwide COVID-19 statistics.

#### Request cURL
```
curl http://localhost:8080/api/get/us/
```
#### Response body
```
{"date":20210307,"states":56,"positive":28756489,"negative":74582825,"pending":11808,"hospitalizedCurrently":40199,"hospitalizedCumulative":776361,"inIcuCurrently":8134,"inIcuCumulative":45475,"onVentilatorCurrently":2802,"onVentilatorCumulative":4281,"dateChecked":"2021-03-07T24:00:00Z","death":515151,"hospitalized":776361,"totalTestResults":363825123,"lastModified":"2021-03-07T24:00:00Z","recovered":null,"total":0,"posNeg":0,"deathIncrease":842,"hospitalizedIncrease":726,"negativeIncrease":131835,"positiveIncrease":41835,"totalTestResultsIncrease":1170059,"hash":"a80d0063822e251249fd9a44730c49cb23defd83"}
```
#### Response headers
```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 616
ETag: W/"268-eL4btCVUtzWUawBB8qg/Oz2kabE"
Date: Wed, 27 Apr 2022 17:07:04 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /api/get/state/:state/ (GET)

Get COVID-19 statistics for a specific state.

#### Request cURL
```
curl http://localhost:8080/api/get/state/nc/
```
#### Response body
```
{"date":20210307,"state":"NC","positive":872176,"probableCases":112559,"negative":null,"pending":null,"totalTestResultsSource":"totalTestsViral","totalTestResults":9688838,"hospitalizedCurrently":1179,"hospitalizedCumulative":null,"inIcuCurrently":309,"inIcuCumulative":null,"onVentilatorCurrently":null,"onVentilatorCumulative":null,"recovered":null,"lastUpdateEt":"3/6/2021 11:35","dateModified":"2021-03-06T11:35:00Z","checkTimeEt":"03/06 06:35","death":11502,"hospitalized":null,"hospitalizedDischarged":819839,"dateChecked":"2021-03-06T11:35:00Z","totalTestsViral":9688838,"positiveTestsViral":null,"negativeTestsViral":null,"positiveCasesViral":759617,"deathConfirmed":10169,"deathProbable":1333,"totalTestEncountersViral":null,"totalTestsPeopleViral":null,"totalTestsAntibody":null,"positiveTestsAntibody":null,"negativeTestsAntibody":null,"totalTestsPeopleAntibody":null,"positiveTestsPeopleAntibody":null,"negativeTestsPeopleAntibody":null,"totalTestsPeopleAntigen":null,"positiveTestsPeopleAntigen":null,"totalTestsAntigen":805924,"positiveTestsAntigen":null,"fips":"37","positiveIncrease":0,"negativeIncrease":0,"total":872176,"totalTestResultsIncrease":0,"posNeg":872176,"dataQualityGrade":null,"deathIncrease":0,"hospitalizedIncrease":0,"hash":"d9ca67dd72ba6f8a8506ebb734fd25b0b8067608","commercialScore":0,"negativeRegularScore":0,"negativeScore":0,"positiveScore":0,"score":0,"grade":""}
```
#### Response headers
```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 1402
ETag: W/"57a-IGi93m+ex7uDg3RMJ7Zxa+co3mk"
Date: Wed, 27 Apr 2022 17:14:16 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/log/access/ (GET)

View the access logs.

#### Request cURL

```
curl http://localhost:8080/api/log/access/
```

#### Response body

```
[{"id":1,"remoteaddr":"::1","remoteuser":null,"time":"1651427499484.0","method":"GET","url":"/api/get/us","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":2,"remoteaddr":"::1","remoteuser":null,"time":"1651427514258.0","method":"GET","url":"/api/get/state/nc","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"}]
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 411
ETag: W/"19b-CMe7tjvboKZY6aPIXmwpllO3QLA"
Date: Sun, 01 May 2022 17:52:31 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/user/login/ (POST)

Log in a user (_Not yet implemented_).

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/user/new/ (POST)

Create a new user (_Not yet implemented_).

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/user/update/ (PATCH)

Update a user (_Not yet implemented_).

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/user/delete/ (DELETE)

Delete a user (_Not yet implemented_).

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```
