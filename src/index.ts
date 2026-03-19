import os from "node:os";
import path from "node:path";
import {
  access,
  mkdir,
  readdir,
  readFile,
  writeFile
} from "node:fs/promises";

export interface InstallOptions {
  skillName: string;
  baseDir?: string;
  force?: boolean;
}

const TEMPLATE_DIR = path.resolve(__dirname, "..", "template", "empty-skill");

function resolveBaseDir(baseDir?: string): string {
  return baseDir ?? path.join(os.homedir(), ".codex", "skills");
}

export function resolveInstallDir(skillName: string, baseDir?: string): string {
  return path.join(resolveBaseDir(baseDir), skillName);
}

async function pathExists(targetPath: string): Promise<boolean> {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function copyTemplateDirectory(
  sourceDir: string,
  targetDir: string,
  replacements: Record<string, string>
): Promise<void> {
  await mkdir(targetDir, { recursive: true });

  const entries = await readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      await copyTemplateDirectory(sourcePath, targetPath, replacements);
      continue;
    }

    const raw = await readFile(sourcePath, "utf8");
    const rendered = Object.entries(replacements).reduce(
      (content, [key, value]) => content.replaceAll(`{{${key}}}`, value),
      raw
    );

    await writeFile(targetPath, rendered, "utf8");
  }
}

export async function installSkill(options: InstallOptions): Promise<string> {
  const targetDir = resolveInstallDir(options.skillName, options.baseDir);
  const baseDir = path.dirname(targetDir);

  await mkdir(baseDir, { recursive: true });

  if (!options.force && (await pathExists(targetDir))) {
    throw new Error(`Target already exists: ${targetDir}`);
  }

  await copyTemplateDirectory(TEMPLATE_DIR, targetDir, {
    SKILL_NAME: options.skillName
  });

  return targetDir;
}
