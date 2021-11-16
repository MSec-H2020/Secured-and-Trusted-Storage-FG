const path = require('path');
const gateway = require('express-gateway');

async function bootstrap() {

  if( process.env.NODE_ENV == 'local' ) {
    require('dotenv').config({ path: `../appconf/fg-gateway/.env.${process.env.NODE_ENV}` })
  } else {
    require('dotenv').config({ path: `appconf/fg-gateway/.env.${process.env.NODE_ENV}` })
  }
  
  gateway()
    .load(path.join(__dirname, 'config'))
    .run();
  
}

bootstrap();
