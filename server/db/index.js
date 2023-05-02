const { db } = require('./db');

const init = async () => {
    try {
        await db.sync({ force: true }); //typically we don't want to do force true in production mode.
        console.log('connected');
    } catch (error) {
        console.log(error);
    }
};

init();
