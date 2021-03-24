const mongoose = rerquire('mongoose')


mongoose.exports = connectDatabase = async() => {
	try {
	  const databaseConnection = await mongoose.connect(process.env.DB, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	  });
		console.log(`Database connected ::: ${databaseConnection.connection.host}`);
	}
	catch(error) {
		console.log(`Error::: ${error.message}`);
		process.exit(1);
	}
}
