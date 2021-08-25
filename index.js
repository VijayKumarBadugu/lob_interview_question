const express = require("express");
const app = express();
const port = 3000;
const address = [
  {
    "line1": "Massachusetts Hall",
    "city": "Cambridge",
    "state": "MA",
    "zip": "02138"
  },
  {
    "line1": "3400 N. Charles St.",
    "city": "Baltimore",
    "state": "MD",
    "zip": "21218"
  },
  {
    "line1": "Roosevelt Way NE",
    "city": "Seattle",
    "state": "WA",
    "zip": "98115"
  },
  {
    "line1": "1600 Holloway Ave",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94132"
  },
  {
    "line1": "1600 Holloway Ave",
    "line2": "Suite 10",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94132"
  },
  {
    "line1": "1600 Holloway Ave",
    "line2": "Suite 20",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94132"
  },
  {
    "line1": "500 S State St",
    "city": "Ann Arbor",
    "state": "MI",
    "zip": "48109"
  },
  {
    "line1": "185 Berry St",
    "line2": "Suite 6100",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94107"
  }
]

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/match", (req, res) => {
  var partial_address = req.query.id;
  var result = getMatchingAddressAlgo1(partial_address);
  res.send(result);
})

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

function getMatchingAddressAlgo1(partial_address) {
  var result = []
  for(let i = 0; i < address.length; i++) {
    if (address[i]["line1"].includes(partial_address) || address[i]["city"].includes(partial_address) || address[i]["state"].includes(partial_address) || address[i]["zip"].includes(partial_address)) {
      result.push(address[i]);
    } 
  }
  return result;
}
