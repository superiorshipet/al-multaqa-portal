import express, { type Request, type Response } from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determine static path based on environment
function getStaticPath(): string {
  // Vercel provides the directory where files are located in .output
  if (process.env.VERCEL) {
    return path.join(process.cwd(), ".output/server");
  }
  // Local development/production
  const isProduction = process.env.NODE_ENV === "production";
  return isProduction
    ? path.resolve(__dirname, "public")
    : path.resolve(__dirname, "..", "dist", "public");
}

// Create the Express app at module level
const app = express();
const staticPath = getStaticPath();

// Serve static files
app.use(express.static(staticPath));

// Handle client-side routing - serve index.html for all routes
app.get("*", (_req: Request, res: Response) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// Export the app for Vercel serverless function
export default app;

// Local development server
if (!process.env.VERCEL) {
  const server = createServer(app);
  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
