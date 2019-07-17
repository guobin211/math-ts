const fs = require('fs');
const path = require('path');

const packages = [
  'package.array',
  'package.collection',
  'package.date',
  'package.function',
  'package.math',
  'package.object',
  'package.string',
  'package.web'
];

function readFileList(p) {
  const ls = fs.readdirSync(path.resolve('../src/' + p));
  const fl = buildTsFile(ls);
  writeTsFile(fl, p);
}

function buildTsFile(list) {
  let text = '';
  for (let i = 0; i < list.length; i++) {
    text += 'export * from ' + '\"./' + list[i].split('.')[0] + '\";\n';
  }
  return text;
}

function writeTsFile(text, p) {
  const fl = path.resolve('../src/' + p + '/index.ts');
  fs.writeFileSync(fl, text);
}

function buildPackages() {
  for (let i = 0; i < packages.length; i++) {
    readFileList(packages[i]);
  }
}

function buildIndex() {
  buildPackages();
  let ts = '';
  for (let i = 0; i < packages.length; i++) {
    const list = fs.readdirSync(path.resolve('../src/' + packages[i]));
    ts += buildIndexImport(list, packages[i]) + '\n';
  }

  ts += '\n\nexport const mt = { };';

  fs.writeFileSync(path.resolve('../src/index.ts'), ts);
  console.log('success build');


  function buildIndexImport(arr, pack) {
    let text = 'import { ';
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i].includes('index')) {
        text += arr[i].split('.')[0] + ',\n';
      }
    }
    text += ' } from \"./' + pack + '\"';
    return text;
  }
}

buildIndex();
