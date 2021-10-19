import { createConnection } from 'typeorm';
import app from './app';

const PORT = process.env.PORT;

app.listen(PORT, async () => {
	console.log(`Server running at http://localhost:${PORT}`);
	try {
		await createConnection();
		console.log('Database connected!');
	} catch (err) {
		console.log(err);
	}
});
