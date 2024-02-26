module.exports = {
  apps: [
    {
      name: 'player-service',
      script: './dist/main.js',
      // exec_mode: 'cluster',
      // instances: 'max'
    },
  ],
};
