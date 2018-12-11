import express from 'express';
import path from 'path';
import mongoose  from 'mongoose';
import config from './config/config';
import postRouter from './routes/post';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json())
const clientPath = path.join(__dirname, 'static');

app.use(express.static(clientPath));
app.use('/api/post', postRouter);

mongoose.connect(config.mongoUri, { useNewUrlParser: true })
	.then((res)=>{
		console.log('Удачное подключение к БД');
	})
	.catch((err)=>{
		console.error('Ошибка подключения к БД ', err);
	});


const port = process.env.PORT || config.Port;
app.listen(port,()=>{
	console.log(`Server run on ${port} port`);
})
