module.exports = {
  apps: [{
    name: 'api-service',
    script: './dist/app.js',
  }],

  // Настройка деплоя
  deploy: {
    production: {
      'post-deploy': 'npm i && npm run build && scp -Cr ./build/* alexafonia@130.193.48.191:/home/alexafonia/mesto-frontend',
    },
  },
};
