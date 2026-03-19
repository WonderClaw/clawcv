# clawcv

一个最小可发布的 TypeScript npm 包示例，包名为 `clawcv`。

## 用法

先把 `package.json` 里的 `name` 改成你要发布的 npm 包名。

```bash
npm install
npm run build
npm publish
```

发布后可以这样生成一个空 skill：

```bash
npx clawcv example-skill
```

其中 `example-skill` 是你要创建的 skill 名字。默认会生成到：

```bash
~/.codex/skills/example-skill/SKILL.md
```

也可以指定目录：

```bash
npx clawcv example-skill --dir ~/.codex/skills --force
```

上面的命令会创建目录 `~/.codex/skills/example-skill`，并在里面写入一个空的 `SKILL.md`。
