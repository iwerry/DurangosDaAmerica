import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, date } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const dbPath = path.join(process.cwd(), "db", "newsletters.json");

  try {
    const raw = fs.existsSync(dbPath) ? fs.readFileSync(dbPath, "utf-8") : "[]";
    const list = JSON.parse(raw);
    list.push({ name, email, date: date || new Date().toISOString() });
    fs.writeFileSync(dbPath, JSON.stringify(list, null, 2), "utf-8");
    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to save" });
  }
}
