const app = require('./app')

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>
  console.log(`Server is running. Use our API on port: ${PORT}`),
)
