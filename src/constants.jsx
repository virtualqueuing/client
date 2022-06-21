const isLocal = process.env.NODE_ENV = "local"

const isProduction = process.env.NODE_ENV = "production"

const API_ENDPOINT = !isProduction ? "http://localhost:3000" : ""