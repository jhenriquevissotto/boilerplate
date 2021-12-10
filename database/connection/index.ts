import Database from 'knex'


const run = Database({
	client: 'mysql',
	connection: {
		'localhost': {
			host: process.env.DB_HOST || 'localhost',
			user: process.env.DB_USER || 'root',
			password: process.env.DB_PASS || '',
			database: process.env.DB_NAME || 'db_test',
			// ssl: true,
		},
		'webhost': process.env.JAWSDB_URL,
	}['localhost']
	
	// ================================= //
	// ======== OPTIONAL PARAMS ======== //
	// ================================= //
	// debug: true,
	// log: {
	// 	error(error) { console.error(error) },
	// 	warn(warn)	 { console.warn(warn)   },
	// }
	// useNullAsDefault: true,
})

// knex.on('query', console.log)

export { run }