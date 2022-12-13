import config from 'src/config';
import express from 'express';
import cors from 'cors';
import ipTracking from './routes/ipTracking';
import session from 'express-session';
import sessSeq from 'connect-session-sequelize';
import dbManager from './models/dbContext';

const app = express()
const port = 3000

const SequelizeStore = sessSeq(session.Store);

app.use(express.static('public'))
  

app.enable('trust proxy');

// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors());

// Transforms the raw string of req.body into json
app.use(express.json());

//manage sessions
app.use(
  session({
    secret: config.secret,
    store: new SequelizeStore({
      db: dbManager.sequelize,
      table: 'Session'
    }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.
  })
);

app.use(config.api + '/ip', ipTracking());


app.get(config.api, (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})