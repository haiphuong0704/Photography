'use strict';
const app  = require('./app');
const PORT = process.env.PORT || 3000;

// Local dev
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\n  Lệch Studio đang chạy tại http://localhost:${PORT}\n`);
  });
}

// Vercel serverless export
module.exports = app;
