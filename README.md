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
