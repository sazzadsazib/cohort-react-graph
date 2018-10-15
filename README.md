# Cohort React Graph
A library of to show React cohort graph
## Installation
Run the following command:
`npm start`

##How to use:
###Props:
`width: any integer`
<br/>
<br/>
####Day Wise Cohort:
```
data: [
{date: "2018-09-25T00:00:00", retention: "100", user: 201, data: [100,20,30,20,0,40,60]},
{date: "2018-09-26T00:00:00",retention: "38.0", user: 210, data: [100,20,30,20,0,40]},
{date: "2018-09-27T00:00:00",retention: "20.6", user: 121, data: [100,20,30,20,0]},
{date: "2018-09-28T00:00:00",retention: "14.2", user: 104, data: [100,20,30,20]},
{date: "2018-09-29T00:00:00",retention: "6.7", user: 69, data: [100,20,30]},
{date: "2018-09-30T00:00:00",retention: "6.8", user: 57, data: [100,20]},
{date: "2018-10-01T00:00:00",retention: "100", user: 23, data: [100]},
  ]
  ```
####Month Wise Cohort: (3 month data)
```
data: [
{date: "2018-09-25T00:00:00", retention: "100", user: 201, data: [100,20,15]},
{date: "2018-09-26T00:00:00",retention: "38.0", user: 210, data: [100,20]},
{date: "2018-09-27T00:00:00",retention: "20.6", user: 121, data: [100]},
  ]
  ```
####Week Wise Cohort:(4 week data)
```
data: [
{date: "2018-09-25T00:00:00", retention: "100", user: 201, data: [100,40,20,15]},
{date: "2018-09-26T00:00:00",retention: "38.0", user: 210, data: [100,40,20]},
{date: "2018-09-27T00:00:00",retention: "20.6", user: 121, data: [100,40]},
{date: "2018-09-25T00:00:00", retention: "100", user: 201, data: [100]},
  ]
  ```

  

##Simple Usage:

```$xslt
import { CohortBasic } from 'react-cohort-graph';


<CohortBasic width={1000} 
             data={[
                    {date: "2018-09-25T00:00:00", retention: "100", user: 201, data: [100,20,30,20,0,40,60]},
                    {date: "2018-09-26T00:00:00",retention: "38.0", user: 210, data: [100,20,30,20,0,40]},
                    {date: "2018-09-27T00:00:00",retention: "20.6", user: 121, data: [100,20,30,20,0]},
                    {date: "2018-09-28T00:00:00",retention: "14.2", user: 104, data: [100,20,30,20]},
                    {date: "2018-09-29T00:00:00",retention: "6.7", user: 69, data: [100,20,30]},
                    {date: "2018-09-30T00:00:00",retention: "6.8", user: 57, data: [100,20]},
                    {date: "2018-10-01T00:00:00",retention: "100", user: 23, data: [100]},
                 ]} />
```
