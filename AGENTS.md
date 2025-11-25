# AGENTS.md

## Commands
- **Install**: `pnpm install`
- **Dev (MCP)**: `pnpm dev:mcp` (runs `apps/mcp-server`)
- **Dev (Web)**: `pnpm dev:web` (runs `apps/web` at `http://localhost:3000`)
- **Build**: `pnpm build:mcp` / `pnpm build:web`
- **Test**: No specific test commands found. Use `pnpm test` if available in subpackages.

## Architecture & Structure
- **Monorepo**: Managed with `pnpm workspaces`.
- **apps/mcp-server**: Node.js/Express server implementing Model Context Protocol (MCP).
  - **Stack**: TypeScript, Express, @modelcontextprotocol/sdk, Solana web3.js.
  - **Src**: `clients/` (Solana, etc), `tools/` (MCP tools), `on-chain/` (Solana interactions).
- **apps/web**: Next.js frontend.
  - **Stack**: Next.js (App Router), Tailwind CSS, AI SDK (Vercel).
  - **Src**: `app/`, `components/`, `lib/`.

## Code Style & Conventions
- **TypeScript**: Strict mode enabled.
- **Imports (MCP)**: Use `.js` extension for local imports (e.g., `import { x } from "./utils/file.js"`).
- **Imports (Web)**: Use `@/` alias for root imports.
- **Formatting**: Follow existing patterns. `apps/web` uses ESLint.
- **Async/Await**: Prefer async/await over promises.
- **Error Handling**: Log fatal errors and exit gracefully in server entry points.
