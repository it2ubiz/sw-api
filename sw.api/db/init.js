const
      clickhouse = require('clickhouse');

/*
process.once('SIGUSR2', async () => {
  await clickhouse.connection.close();
  process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', async () => {
  await clickhouse.connection.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await clickhouse.connection.close();
  process.exit(0);
});
*/


module.exports = {
  clickhouse,
  connect: (url) => {
    new ClickHouse({
      host: url,
      basicAuth: null,
	    isUseGzip: true,
      readonly: true,
      config: {
        session_timeout                         : 60,
        output_format_json_quote_64bit_integers : 0,
        enable_http_compression                 : 1
      }
    })
  }
};
