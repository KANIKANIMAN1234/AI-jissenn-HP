import { neon } from '@neondatabase/serverless'

// ビルド時はダミー値を使用、実行時には実際の値が必要
const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://dummy:dummy@localhost:5432/dummy'

export const sql = neon(DATABASE_URL)
