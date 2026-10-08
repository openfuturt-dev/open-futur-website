import { config } from 'dotenv'
import { defineConfig } from 'prisma/config'

config({ path: '.env.development.local' })

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    // Prisma Migrate can't speak libsql:// directly, so migrations are authored
    // against a local throwaway file and applied to Turso via scripts/push-migrations.ts
    url: 'file:./dev.db',
  },
})
