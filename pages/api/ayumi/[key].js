import { Pool } from "pg";

// Reaproveita a conexão entre chamadas, pra não esgotar o banco
if (!global._ayumiPool) {
  global._ayumiPool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
}
const pool = global._ayumiPool;

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS ayumi_data (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at TIMESTAMPTZ DEFAULT now()
    );
  `);
}

export default async function handler(req, res) {
  const { key } = req.query;
  if (!key || typeof key !== "string") {
    return res.status(400).json({ error: "chave inválida" });
  }

  try {
    await ensureTable();

    if (req.method === "GET") {
      const result = await pool.query(
        "SELECT value FROM ayumi_data WHERE key = $1",
        [key],
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "não encontrado" });
      }
      return res.status(200).json({ key, value: result.rows[0].value });
    }

    if (req.method === "POST") {
      const { value } = req.body;
      if (typeof value !== "string") {
        return res.status(400).json({ error: "valor inválido" });
      }
      await pool.query(
        `INSERT INTO ayumi_data (key, value, updated_at) VALUES ($1, $2, now())
         ON CONFLICT (key) DO UPDATE SET value = $2, updated_at = now()`,
        [key, value],
      );
      return res.status(200).json({ key, value });
    }

    if (req.method === "DELETE") {
      await pool.query("DELETE FROM ayumi_data WHERE key = $1", [key]);
      return res.status(200).json({ key, deleted: true });
    }

    res.setHeader("Allow", ["GET", "POST", "DELETE"]);
    return res.status(405).end(`Método ${req.method} não permitido`);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "erro no servidor" });
  }
}
