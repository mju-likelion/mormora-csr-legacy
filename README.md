# Mormora

Likelion MJU Nature Web

## Requirements

### Node.js

package.json에 engines 값 참고

### Yarn

패키지 관리에 사용

#### macOS, Homebrew

```bash
brew install yarn
```

## Development

### 의존 패키지 설치

```bash
yarn # or yarn install
```

### React 17버전 Typescript 문제 해결

node_modules/react-scripts/scripts/utils/verifyTypeScriptSetup.js의 151번째줄을 아래와 같이 바꿔야 한다.

```javascript
  hasJsxRuntime && semver.gte(ts.version, '4.1.0-beta')
    ? ts.JsxEmit.ReactJSX  // 원래 코드는 ts.JsxEmit.ReactJsx
    : ts.JsxEmit.React,
```
