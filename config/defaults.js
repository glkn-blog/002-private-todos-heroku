module.exports = {
    "NODE_ENV": "development",
    "PORT": 3000,
    "MONGO_URL": process.env.MONGOHQ_URL || "mongodb://localhost:27017/002-private-todos",
    "SESSION_SECRET": "83f2fa02beafe37f2d7d8af9a66f0e75d2abee3e",
    "SESSION_COOKIE": "25dc713818b002d24cb99c44ff43e4dcaed9a585"
};
