const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/home', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We are connected");
});

const kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function () {
    const greeting = "My name is " + this.name
    console.log(greeting);
  }
  
  const Kitten = mongoose.model('Kitten', kittySchema);

  const mykitty = new Kitten({ name: 'mykitty' });
  mykitty.speak(); // 

  mykitty.save(function (err, mykitty) {
    if (err) return console.error(err);
    mykitty.speak();
  });

  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })
  