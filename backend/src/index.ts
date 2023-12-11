require('dotenv').config();
import cors from 'cors';
import express from "express";
import morgan from 'morgan';
import routes from "./routes";

const app = express();

app.use(cors());

const loggingMode = process.env.NODE_ENV == "dev" ? "dev" : "combined";
app.use(morgan(loggingMode));

// Intializing app routes
routes.forEach(route => {
    if (route.method == 'get') {
        app.get(route.path, route.controller);
    }
})

// Dev-time routes
if (process.env.NODE_ENV == "dev") {
    import('./routes/dev-routes').then(mdle => {
        mdle.default(app);
    });
}

// Start server
app.listen(process.env.PORT, () => {
    console.log("Starting app in environment:", process.env.NODE_ENV);
    console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app; // Export for testing