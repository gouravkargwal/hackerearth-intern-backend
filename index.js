const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`APP LISTENING ON ${process.env.PORT}`);
});
