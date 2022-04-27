# API Documentation

## Endpoints

### /api/get/us/ (GET)
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
