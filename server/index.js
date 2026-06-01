const { log } = require("node:console");
const news = require("./dataset/news");
const express = require("express");
const app = express();
// app.get("/news", (req, res) => {
//   res.send(news);
// });

// app.get("/news/:id", (req, res) => {
//   const id = req.params.id;
//   res.send(id);
// });
// app.listen(3000);

// const name = "preety";
// app.get("/sneha", (req, res) => {
//   res.send(name);
// });

// const picnic = "dalma";
// app.get("/place", (req, res) => {
//   res.send("dalma");
// });

// app.get("/news/:id", (req, res) => {
//   const id = req.params.id;
//   for (let i = 0; i < news.length; i++) {
//     if (news[i].id == id) {
//       return res.send(news[i]);
//     }
//   }
// });
// app.listen(3000);

// app.get("/news", (req, res) => {
//   const category = req.query.category;
//   if (!category) {
//     return res.send(news);
//   }
//   const result = news.filter((item) => item.category === category);
//   res.send(result);
// });
// app.listen(3000);

// app.get("/news", (req, res) => {
//   const category = req.query.category;
//   const limit = req.query.limit;
//   console.log(category, limit);
//   let result = news;
//   if (category) {
//     result = result.filter((i) => i.category === category);
//   }
//   if (limit) {
//     result = result.slice(0, Number(limit));
//   }
//   res.send(result);
// });
// app.listen(3000);

// app.get("/news", (req, res) => {
//   const limit = Number(req.query.limit);
//   const from = req.query.from;
//   const category = req.query.category;
//   console.log(from, limit);
//   let result = news;
//   if (limit) {
//     if (from === "bottom") {
//       result = result.slice(-limit);
//     } else {
//       result = result.slice(0, limit);
//     }
//   }
//   res.send(result);
// });

// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("news API is running");
// });

// app.listen(3000);
