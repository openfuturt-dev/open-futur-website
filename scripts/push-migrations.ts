import { config } from 'dotenv'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { createClient } from '@libsql/client'

config({ path: '.env.development.local' })

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
})

async function main() {
  const migrationsDir = join(process.cwd(), 'prisma', 'migrations')
  const folders = readdirSync(migrationsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()

  for (const folder of folders) {
    const sqlPath = join(migrationsDir, folder, 'migration.sql')
    const sql = readFileSync(sqlPath, 'utf8')
    const statements = sql
      .split(';')
      .map((s) => s.trim())
      .filter(Boolean)

    console.log(`Applying ${folder} (${statements.length} statements)...`)
    for (const statement of statements) {
      await client.execute(statement)
    }
  }

  console.log('All migrations applied to Turso.')
}

main()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(() => client.close())
