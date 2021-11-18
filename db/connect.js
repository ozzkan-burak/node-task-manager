const mongoose = require('mongoose');


const conncetDB = async (url) => {
  console.log(url)
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB bağlantısı başarılı');
  } catch (error) {
    console.log(error);
  }
};

module.exports = conncetDB;