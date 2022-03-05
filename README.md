# Blocknauts

## Installing

```bash
git clone <git url>
```

## Running tests

```bash
npm run test
```

## Building

```bash
npm run build
```

## Building for production

```bash
npx webpack --mode=production
```

## Usage

1. Make a production build
1. Copy `w3preferences.js` into your project
1. `require` the library

```javascript
const w3prefs = require('./web3preferences.js');
const prefs = await w3prefs.getPreferences();
```

