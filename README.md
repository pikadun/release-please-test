# Release Please Test - NPM Monorepo

这是一个使用 npm workspaces 的 monorepo 项目。

## 项目结构

```
release-please-test/
├── package.json          # 根 package.json，配置 workspaces
├── tsconfig.json         # 共享的 TypeScript 配置
├── .gitignore
├── packages/
│   ├── package-a/        # 子包 A
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       └── index.ts
│   └── package-b/        # 子包 B（依赖 package-a）
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           └── index.ts
└── README.md
```

## 安装依赖

```bash
npm install
```

## 构建所有包

```bash
npm run build
```

## 清理构建产物

```bash
npm run clean
```

## 工作空间命令

在特定包中运行命令：
```bash
npm run build -w @release-please-test/package-a
npm run build -w @release-please-test/package-b
```

## 子包说明

- **@release-please-test/package-a**: 基础工具包
- **@release-please-test/package-b**: 依赖 package-a 的扩展包

## Release Please 配置

项目已配置 Release Please 自动化版本管理和发布。

### 使用方式

1. **提交代码时使用 Conventional Commits 规范：**
   ```bash
   # 新功能
   git commit -m "feat: add new feature"
   
   # Bug 修复
   git commit -m "fix: resolve bug"
   
   # 破坏性变更
   git commit -m "feat!: breaking change"
   ```

2. **推送到 main 分支后：**
   - Release Please 会自动创建或更新 Release PR
   - PR 中包含自动生成的 CHANGELOG 和版本号更新

3. **合并 Release PR 后：**
   - 自动创建 GitHub Release
   - 自动打 Git Tag
   - 可选：自动发布到 npm（需配置 NPM_TOKEN）

### 配置文件

- `.release-please-manifest.json` - 版本清单
- `release-please-config.json` - Release Please 配置
- `.github/workflows/release-please.yml` - GitHub Actions 工作流

### Conventional Commits 类型

- `feat:` - 新功能（触发 minor 版本）
- `fix:` - Bug 修复（触发 patch 版本）
- `feat!:` 或 `BREAKING CHANGE:` - 破坏性变更（触发 major 版本）
- `docs:` - 文档更新
- `chore:` - 构建/工具变更
- `refactor:` - 代码重构
- `test:` - 测试相关
