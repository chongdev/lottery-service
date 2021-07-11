const app = require("express")();
const lotto = require("./connect");

const port = process.env.PORT || 9200;

app.get("/", (req, res) => {
  res.send("Hello World");

//   lotto.check(data, (jsonData) => {
//     res.json(jsonData);
//   });
});

app.get("/check/:lottoBarcode", function (req, res) {
  const data = {
    lotto: {
      lottoType: req.params.lottoBarcode.substring(0, 5),
      lottoBarcode: req.params.lottoBarcode.substring(9, 15),
    },
  };

  lotto.check(data, (jsonData) => {
    res.json(jsonData);
  });
});


app.listen(port, () => {
  console.log("Start server at port: http://localhost:" + port);
});
