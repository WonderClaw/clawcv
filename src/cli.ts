#!/usr/bin/env node

import { installSkill } from "./index";

function printUsage(): void {
  console.log(
    "Usage: npx clawcv [skill-name] [--dir <path>] [--force]\nCreates <dir>/<skill-name>/SKILL.md"
  );
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  let skillName = "empty-skill";
  let baseDir: string | undefined;
  let force = false;
  let usedPositionalName = false;

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--help" || arg === "-h") {
      printUsage();
      return;
    }

    if (arg === "--force") {
      force = true;
      continue;
    }

    if (arg === "--dir") {
      const nextArg = args[index + 1];

      if (!nextArg) {
        throw new Error("Missing value for --dir");
      }

      baseDir = nextArg;
      index += 1;
      continue;
    }

    if (arg.startsWith("-")) {
      throw new Error(`Unknown option: ${arg}`);
    }

    if (!usedPositionalName) {
      skillName = arg;
      usedPositionalName = true;
      continue;
    }

    throw new Error(`Unexpected argument: ${arg}`);
  }

  const installPath = await installSkill({
    skillName,
    baseDir,
    force
  });

  console.log(`Installed skill to ${installPath}`);
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(message);
  process.exitCode = 1;
});
