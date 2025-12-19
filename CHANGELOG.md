# Changelog

## 2.0.0 (2025-12-19)

Full Changelog: [v1.4.0...v2.0.0](https://github.com/morta-technology/morta-typescript/compare/v1.4.0...v2.0.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **mcp:** add typescript check to code execution tool ([4b53a32](https://github.com/morta-technology/morta-typescript/commit/4b53a32dab4bb1941a66089ddc8915e2a082bf64))
* **mcp:** handle code mode calls in the Stainless API ([847c9ef](https://github.com/morta-technology/morta-typescript/commit/847c9efa9304ca888a6f8e5b81ed8359b725ae61))
* **mcp:** return logs on code tool errors ([0fb9ab0](https://github.com/morta-technology/morta-typescript/commit/0fb9ab0e68bbcf98e7046a9c4c34400743fee34f))


### Bug Fixes

* **mcp:** add client instantiation options to code tool ([13450ff](https://github.com/morta-technology/morta-typescript/commit/13450ffd12e50b410a5d27f8ad2f35b968d31f77))
* **mcp:** correct code tool API endpoint ([08b4c3e](https://github.com/morta-technology/morta-typescript/commit/08b4c3ed161d00513f98fac0c928b852629cda13))
* **mcp:** pass base url to code tool ([bb80f34](https://github.com/morta-technology/morta-typescript/commit/bb80f34e07d053cbbbccf635c5679ddf2c638a73))
* **mcp:** return correct lines on typescript errors ([e39cdbe](https://github.com/morta-technology/morta-typescript/commit/e39cdbeaed579aa96b3f4ed5cb459ce1598fa367))
* **mcp:** return tool execution error on api error ([b53b4a1](https://github.com/morta-technology/morta-typescript/commit/b53b4a1b20ca864875efff3626ef8931f66b1cb4))


### Chores

* **client:** fix logger property type ([211926c](https://github.com/morta-technology/morta-typescript/commit/211926c08d370d1df06ea837e9c81890a19fc588))
* **internal:** codegen related update ([eb44fcb](https://github.com/morta-technology/morta-typescript/commit/eb44fcba37b80e73454cce4be4a11f6e955e110b))
* **internal:** codegen related update ([6aeb419](https://github.com/morta-technology/morta-typescript/commit/6aeb419bb8b21ef54e15540deaaf526b00a287e4))
* **internal:** upgrade eslint ([8866d8f](https://github.com/morta-technology/morta-typescript/commit/8866d8f989d48d28eab84ca3d55e77d95d8e4852))
* **mcp:** remove deprecated tool schemes ([5016078](https://github.com/morta-technology/morta-typescript/commit/5016078854bf6287b622dfe39e0a048e213ee9e0))
* **mcp:** update lockfile ([fbefe37](https://github.com/morta-technology/morta-typescript/commit/fbefe377b62114c2c871e7ccd5b7fb44c18c7e01))
* use latest @modelcontextprotocol/sdk ([80d4752](https://github.com/morta-technology/morta-typescript/commit/80d47520acb9a341bdd92d2886c4507324972de2))

## 1.4.0 (2025-11-26)

Full Changelog: [v1.3.0...v1.4.0](https://github.com/morta-technology/morta-typescript/compare/v1.3.0...v1.4.0)

### Features

* **mcp:** add detail field to docs search tool ([d0c9feb](https://github.com/morta-technology/morta-typescript/commit/d0c9febc3677c0c3c888ec635d2528e160891706))
* **mcp:** enable optional code execution tool on http mcp servers ([9420f6d](https://github.com/morta-technology/morta-typescript/commit/9420f6db1b2856dc770a2d3a86fa6ef0ab2f2be8))


### Bug Fixes

* **mcpb:** pin @anthropic-ai/mcpb version ([d6178a7](https://github.com/morta-technology/morta-typescript/commit/d6178a7eeb2760add54f645e7ebaeda13fa6c4e5))
* **mcp:** return tool execution error on jq failure ([1d29f29](https://github.com/morta-technology/morta-typescript/commit/1d29f29f5e2828e5a250c9642c43e7a3e41ab97d))
* **mcp:** use raw responses for binary content ([ff472d3](https://github.com/morta-technology/morta-typescript/commit/ff472d3b32b17933a95176773f80cb49be491c74))


### Chores

* extract some types in mcp docs ([77b8287](https://github.com/morta-technology/morta-typescript/commit/77b8287f18c9212f49179c76d9a8dd4835a267a4))
* **internal:** codegen related update ([6807af2](https://github.com/morta-technology/morta-typescript/commit/6807af27a41621ddd9a2483c5aaa81b70a6e750c))
* **internal:** codegen related update ([29e2d4e](https://github.com/morta-technology/morta-typescript/commit/29e2d4e9d97912ba9e903cd223d3f7ca22e53d27))
* **internal:** codegen related update ([abb7ad4](https://github.com/morta-technology/morta-typescript/commit/abb7ad4cedcca1d053c7a8b72319b0b96587eb40))
* **internal:** grammar fix (it's -&gt; its) ([272381e](https://github.com/morta-technology/morta-typescript/commit/272381e55888265d2bd066dd9f49cf5b8e810d04))
* **internal:** use npm pack for build uploads ([a301f91](https://github.com/morta-technology/morta-typescript/commit/a301f919f4295f3652df9beab867b763054df8f0))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([48e6c94](https://github.com/morta-technology/morta-typescript/commit/48e6c945b2a7e6d855559a66ad3f953fdb26205b))
* mcp code tool explicit error message when missing a run function ([6aa196e](https://github.com/morta-technology/morta-typescript/commit/6aa196ec3c1ee69358cfdfa38f0df64d6ab74739))
* **mcp:** add friendlier MCP code tool errors on incorrect method invocations ([1a6e089](https://github.com/morta-technology/morta-typescript/commit/1a6e0896f492b38dc5e9cefd4e413f2d6affb5c1))
* **mcp:** add line numbers to code tool errors ([f2dd39f](https://github.com/morta-technology/morta-typescript/commit/f2dd39f99b4ab34988e65e18c39a4920d9a0eb9a))
* **mcp:** clarify http auth error ([946295b](https://github.com/morta-technology/morta-typescript/commit/946295b76cb663a4fa5a695bd761ee7c0a43b242))
* **mcp:** upgrade jq-web ([229b4b5](https://github.com/morta-technology/morta-typescript/commit/229b4b58f550e13271efd2857877d3746ed43c6d))
* use structured error when code execution tool errors ([471a6f4](https://github.com/morta-technology/morta-typescript/commit/471a6f4a84fbfe1850127dbf6c5b6cf9305d2546))


### Documentation

* **mcp:** add a README button for one-click add to Cursor ([8091d6a](https://github.com/morta-technology/morta-typescript/commit/8091d6aff41913d4e3ce439b171ef438a76518ff))
* **mcp:** add a README link to add server to VS Code or Claude Code ([851ab8c](https://github.com/morta-technology/morta-typescript/commit/851ab8c922458bc0d41f7a2dcbc43d19a6a30fe7))

## 1.3.0 (2025-09-03)

Full Changelog: [v1.2.0...v1.3.0](https://github.com/morta-technology/morta-typescript/compare/v1.2.0...v1.3.0)

### Features

* **mcp:** add code execution tool ([50dcf86](https://github.com/morta-technology/morta-typescript/commit/50dcf8646e79ee15c78737d358c972d1b05205dd))
* **mcp:** add logging when environment variable is set ([09318aa](https://github.com/morta-technology/morta-typescript/commit/09318aa4ee0f17ff08563146a074d80b3ce22a51))
* **mcp:** add option to infer mcp client ([479796c](https://github.com/morta-technology/morta-typescript/commit/479796cc09f71c4504594b86d9cc1855418630b6))
* **mcp:** add unix socket option for remote MCP ([de06ce4](https://github.com/morta-technology/morta-typescript/commit/de06ce44305b018977da41e4f8fad9e6ed04e4f0))
* **mcp:** allow setting logging level ([35b235c](https://github.com/morta-technology/morta-typescript/commit/35b235ca064118db554a8bcd22242b2630fa8cca))
* **mcp:** expose client options in `streamableHTTPApp` ([b9bd0a3](https://github.com/morta-technology/morta-typescript/commit/b9bd0a3749cdda6261b326976f6d89da228f7ed3))
* **mcp:** parse query string as mcp client options in mcp server ([85c5913](https://github.com/morta-technology/morta-typescript/commit/85c591392225584a886752b6aa02aa9f83fb4593))
* **mcp:** remote server with passthru auth ([ada7972](https://github.com/morta-technology/morta-typescript/commit/ada79721d90eb8091e76cf1680433de4020047d1))
* **mcp:** support filtering tool results by a jq expression ([1827ce9](https://github.com/morta-technology/morta-typescript/commit/1827ce9bc687038180e92d7eaf687a0be76e09b5))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([41c3438](https://github.com/morta-technology/morta-typescript/commit/41c34383e0982ce52f9ab4c7efde5b4f6fd66076))
* **mcp:** fix bug in header handling ([9ded62f](https://github.com/morta-technology/morta-typescript/commit/9ded62fc871a55b651e06ba64da7d529e2fabba0))
* **mcp:** fix tool description of jq_filter ([7dc0ff0](https://github.com/morta-technology/morta-typescript/commit/7dc0ff0f2a65c3e43b0d9df7f99ac52d7e8024fb))
* **mcp:** generate additionalProperties=true for map schemas to avoid validation issues ([9a82f2a](https://github.com/morta-technology/morta-typescript/commit/9a82f2a9379f73bf06710e94538edee4c9edd892))
* **mcp:** include required section for top-level properties and support naming transformations ([45f481d](https://github.com/morta-technology/morta-typescript/commit/45f481df2b4c8acdc3b92db7fdd70a76763b95eb))
* **mcp:** relax input type for asTextContextResult ([9281b2c](https://github.com/morta-technology/morta-typescript/commit/9281b2c06f4b09105bc244746e9805646f42bd66))
* **mcp:** reverse validJson capability option and limit scope ([ea6254d](https://github.com/morta-technology/morta-typescript/commit/ea6254dc308789b597cab7d0bb9ba6f0d767a341))
* **mcp:** support jq filtering on cloudflare workers ([6450a2e](https://github.com/morta-technology/morta-typescript/commit/6450a2ec11bcf9c3cfc674157b8286c7f39a7cee))


### Chores

* add package to package.json ([dcf9040](https://github.com/morta-technology/morta-typescript/commit/dcf90406c676c9ffb2229d799b81d87efce32324))
* **client:** qualify global Blob ([d486933](https://github.com/morta-technology/morta-typescript/commit/d486933135ef005a82c94215d7bddaee5583b9e4))
* **deps:** update dependency @types/node to v20.17.58 ([854e228](https://github.com/morta-technology/morta-typescript/commit/854e228981c2fa5c4bf519d960c386ee5c677fb8))
* **internal:** codegen related update ([1e3a555](https://github.com/morta-technology/morta-typescript/commit/1e3a55582c4fee44990c321b57c588d7eb55e928))
* **internal:** codegen related update ([5c94f58](https://github.com/morta-technology/morta-typescript/commit/5c94f5855baad50864cc930499dcb9f015c5dd9d))
* **internal:** codegen related update ([9c9607a](https://github.com/morta-technology/morta-typescript/commit/9c9607a5abfafd66592e9769b77c694e583798b4))
* **internal:** codegen related update ([6e692e4](https://github.com/morta-technology/morta-typescript/commit/6e692e42d9363581f1d13e94d2e6872bd48215dc))
* **internal:** codegen related update ([1a81ef7](https://github.com/morta-technology/morta-typescript/commit/1a81ef76492490a97037469a708897df7e538447))
* **internal:** formatting change ([cd1c205](https://github.com/morta-technology/morta-typescript/commit/cd1c205d37c3cc2af1c8e3129ec264c4b35667d3))
* **internal:** make mcp-server publishing public by defaut ([52bb086](https://github.com/morta-technology/morta-typescript/commit/52bb086113e400cbc5a0fa455c0464b6c9cd9d39))
* **internal:** move publish config ([13a79ac](https://github.com/morta-technology/morta-typescript/commit/13a79acd694cfdf0ac5a6ebe21439c3110bef738))
* **internal:** refactor array check ([25eed2d](https://github.com/morta-technology/morta-typescript/commit/25eed2de334655ec851a9ddb3648e59d32a93a94))
* **internal:** remove redundant imports config ([2a38eb1](https://github.com/morta-technology/morta-typescript/commit/2a38eb1edb01a6e97a80724cc81dbd8b2aa59732))
* **internal:** update comment in script ([4773fdf](https://github.com/morta-technology/morta-typescript/commit/4773fdfb9b6ea07b9cd5c534a9629dc7b1b88978))
* **internal:** update global Error reference ([b030360](https://github.com/morta-technology/morta-typescript/commit/b0303600733b9448c06b3b5d2f9006fc47dec7ef))
* make some internal functions async ([f5dec15](https://github.com/morta-technology/morta-typescript/commit/f5dec154153ad85f1144c9821880e1ab0b0f7706))
* **mcp:** add cors to oauth metadata route ([8d8adb1](https://github.com/morta-technology/morta-typescript/commit/8d8adb189356af8d50b653271cdd7ba6b9c1e6b5))
* **mcp:** document remote server in README.md ([e98e199](https://github.com/morta-technology/morta-typescript/commit/e98e1994ba51e0802ea4e7379bead5437a4e6bd5))
* **mcp:** formatting ([1b05fe0](https://github.com/morta-technology/morta-typescript/commit/1b05fe094270bc62cab98f6fc66335190525cabe))
* **mcp:** minor cleanup of types and package.json ([527ea03](https://github.com/morta-technology/morta-typescript/commit/527ea03514c2c44d9577d728ddce924a1d846e6a))
* **mcp:** refactor streamable http transport ([5a279c9](https://github.com/morta-technology/morta-typescript/commit/5a279c9b36095677457799506f5f66ec1ad2b01b))
* **mcp:** rework imports in tools ([cf99851](https://github.com/morta-technology/morta-typescript/commit/cf9985128ee7711fc93169c224f1e03bbebf5b62))
* **mcp:** update package.json ([a031286](https://github.com/morta-technology/morta-typescript/commit/a031286a70d9f6284c12d105434d22e92b6fd9aa))
* **mcp:** update README ([b0f8072](https://github.com/morta-technology/morta-typescript/commit/b0f80727d3e374c89d5bf2e6b04eed08b823e7c8))
* **mcp:** update types ([b7720bd](https://github.com/morta-technology/morta-typescript/commit/b7720bdc5067126eda9fb5f4f6a366b2042377ec))
* **ts:** reorder package.json imports ([45a4630](https://github.com/morta-technology/morta-typescript/commit/45a4630e48a6bb40454176bb41f6b82a5456f075))
* update @stainless-api/prism-cli to v5.15.0 ([2c5a159](https://github.com/morta-technology/morta-typescript/commit/2c5a159c17c1c8665a0c052dc1f8cd42e8ae7599))
* update CI script ([9d9dcfa](https://github.com/morta-technology/morta-typescript/commit/9d9dcfacb6ea89c059ba594693bbaee159cc9723))

## 1.2.0 (2025-07-05)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/morta-technology/morta-typescript/compare/v1.1.0...v1.2.0)

### Features

* **api:** update via SDK Studio ([df82ca2](https://github.com/morta-technology/morta-typescript/commit/df82ca2dca74897b9536c889c3832471efe95737))
* **api:** update via SDK Studio ([4508e5d](https://github.com/morta-technology/morta-typescript/commit/4508e5de2d0a7fe4812f4a6f31a78b0b7cb3cb65))
* **api:** update via SDK Studio ([aba12bd](https://github.com/morta-technology/morta-typescript/commit/aba12bd135cf531435bd0ecb16d7cedbe739e62a))
* **mcp:** fallback for void-typed methods ([515a52c](https://github.com/morta-technology/morta-typescript/commit/515a52cf8595a3c75e9b636ea4bd8275caef8bfa))


### Chores

* add docs to RequestOptions type ([29889e7](https://github.com/morta-technology/morta-typescript/commit/29889e7b8e4e6c3242db2808b05043f7cce73bf9))
* **ci:** only run for pushes and fork pull requests ([e4b6cab](https://github.com/morta-technology/morta-typescript/commit/e4b6cab6af7cd6e29788539e6385d52a7317384f))
* **client:** improve path param validation ([f0bd079](https://github.com/morta-technology/morta-typescript/commit/f0bd079bc462ef84497d1ddab47a234d789dfa80))

## 1.1.0 (2025-06-27)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/morta-technology/morta-typescript/compare/v1.0.0...v1.1.0)

### Features

* **api:** update via SDK Studio ([ab3be63](https://github.com/morta-technology/morta-typescript/commit/ab3be632da7e7d3672fb82a1c7ac74d40567ea33))
* **api:** update via SDK Studio ([07ec5b4](https://github.com/morta-technology/morta-typescript/commit/07ec5b4386f6bd464ee9815d0d2ea1d3d1307c50))


### Bug Fixes

* **client:** get fetchOptions type more reliably ([45001ae](https://github.com/morta-technology/morta-typescript/commit/45001aec8444f96d3a0e33ca0b80b28ade217c86))

## 1.0.0 (2025-06-26)

Full Changelog: [v0.0.1-alpha.0...v1.0.0](https://github.com/morta-technology/morta-typescript/compare/v0.0.1-alpha.0...v1.0.0)

### Chores

* configure new SDK language ([33523e4](https://github.com/morta-technology/morta-typescript/commit/33523e43804f761c9197aa3a9e521cfd2b22fc99))
* update SDK settings ([11cd2e7](https://github.com/morta-technology/morta-typescript/commit/11cd2e7450f08063fba749a2166b967faed65116))
* update SDK settings ([07a2779](https://github.com/morta-technology/morta-typescript/commit/07a2779150cff700bd7a1aeff5e648d59a7d231e))
