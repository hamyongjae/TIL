const home = require('./routers/home');
const movies = require('./routers/movies');
const debug = require('debug')('app:startup');
// const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const auth = require('./middlewares/auth');
const logger = require('./middlewares/logger');
// const Joi = require('joi');
const express = require('express');
const app = express();

console.log(app.get('env'));
console.log(app.get('debug'));

app.use(helmet());

if (app.get('env') === 'development') {
  debug('MORGAN 을 실행합니다.')
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //post로 요청된 body를 쉽게 추출할 수 있는 모듈, 추출된 결과는 req객체에 body속성으로 저장
// http모듈로만 post body를 파싱하려면, req.on('data', function(chunk) {body +=chunk; }) 와 같이 이벤트를 등록해야하고 인코딩처리를 해줘야한다.
//그치만 body-parser를 쓰면 bodyParser.urlencoded()를 등록하여, 자동으로 req에 바디 속성이 추가되고 저장된다 (UTF-8 방식으로)
app.use(express.static('public'));
app.use(logger);
app.use(auth);
app.use(home);
app.use('/api/movies', movies);

app.set('view engine', 'pug');
app.set('views', './views'); // Default

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
