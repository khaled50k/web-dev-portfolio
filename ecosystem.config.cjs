module.exports = {
    apps: [
      {
        name: 'ibdaatec',
        port: '3200',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }
  