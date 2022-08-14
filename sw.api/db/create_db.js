const { ClickHouse } = require('clickhouse');

const db = new ClickHouse({
        host: "127.0.0.1",
        port: 8123,
        basicAuth: {
            username: 'default',
            password: 'smart',
        },
        isUseGzip: true,
        config: {
          session_timeout                         : 60,
          //output_format_json_quote_64bit_integers : 0,
          enable_http_compression                 : 1
        }
})

//console.log(db);

async function main(){
    const queries = [
        'DROP TABLE IF EXISTS default.products'
        ,`CREATE TABLE default.products (
            date Date,
            pid UInt64,
            name String,
            price Float64,
            meta Nested (
                name String,
                value String
            )
        )
        ENGINE=MergeTree(date,(pid),8192)`,
        'DROP TABLE IF EXISTS users',
        `CREATE TABLE users (
            date Date,
            uid UInt64,
            name String,
            mail String,
            meta Nested (
                name String,
                value String
            )
        )
        ENGINE=MergeTree(date,(uid),8192)`,
        'DROP TABLE IF EXISTS trx',
        `CREATE TABLE trx (
            date Date,
            trxID UInt64,
            pid UInt64,
            uid UInt64,
            type Enum('buy' = 1, 'favorites' = 2, 'view' = 3, 'like' = 4, 'cart' = 5, 'custom' =6)
        )
        ENGINE=MergeTree(date,(trxID),8192)`,
    ];

    for(const query of queries) {
        db.query(query).exec(function (err, rows) {
            console.log(rows);
            if (err!=null)
                console.log(err.message);
        });
    }
}

main();

// INSERT INTO default.products VALUES ('2016-01-01', 123,'product1',123,['param1','param2','param3'],['1','2','3'])
// SELECT * FROM default.products ARRAY JOIN meta
// SELECT * FROM default.products WHERE meta.value[indexOf(meta.name, 'param2')] = '1'
// https://www.altinity.com/blog/2017/8/30/nested-data-structures-in-clickhouse