module.exports = {
  apps: [
    {
      name: 'airport-service',
      script: './dist/main.js',
      // exec_mode: 'cluster',
      // instances: 'max'
    },
  ],
};
