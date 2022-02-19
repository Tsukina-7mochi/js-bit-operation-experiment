// 変数の数
const variableNum = 1000_0000;
// 実験する回数
const experimentNum = 10;

console.log('== AND operation ==');


// オペランドの配列2つと結果を格納する配列
const variableArr1 = new Array(variableNum).fill(0).map(_ => Math.random() < 0.5);
const variableArr2 = new Array(variableNum).fill(0).map(_ => Math.random() < 0.5);
const resultArr = new Array(variableNum);
let timeSumArr = 0;

for(let i = 0; i < experimentNum; i++) {
  const timeStart = Date.now();

  for(let i = 0; i < variableNum; i++) {
    resultArr[i] = variableArr1[i] && variableArr2[i];
  }

  const timeEnd = Date.now();

  console.log(`arr#${i}: ${timeEnd - timeStart}ms`);
  timeSumArr += timeEnd - timeStart;
}


const variableBit1 = new Uint32Array(variableNum).fill(0).map(_ => Math.floor(Math.random() * (2 ** 32)));
const variableBit2 = new Uint32Array(variableNum).fill(0).map(_ => Math.floor(Math.random() * (2 ** 32)));
const resultBit = new Uint32Array(variableNum);
let timeSumBit = 0;

for(let i = 0; i < experimentNum; i++) {
  const timeStart = Date.now();

  for(let i = 0; i < variableNum; i++) {
    resultBit[i] = variableBit1[i] & variableBit2[i];
  }

  const timeEnd = Date.now();

  console.log(`bit#${i}: ${timeEnd - timeStart}ms`);
  timeSumBit += timeEnd - timeStart;
}


console.log(`Average(arr): ${timeSumArr / experimentNum}ms`);
console.log(`Average(bit): ${timeSumBit / experimentNum}ms`);


console.log('== Random Access ==');


timeSumArr = 0;

for(let i = 0; i < experimentNum; i++) {
  const timeStart = Date.now();

  for(let i = 0; i < variableNum; i++) {
    resultArr[i];
  }

  const timeEnd = Date.now();

  console.log(`arr#${i}: ${timeEnd - timeStart}ms`);
  timeSumArr += timeEnd - timeStart;
}

timeSumBit = 0;

for(let i = 0; i < experimentNum; i++) {
  const timeStart = Date.now();

  for(let i = 0; i < variableNum; i++) {
    (resultBit[Math.floor(i / 32)] >> (31 - (i % 32))) & 1;
  }

  const timeEnd = Date.now();

  console.log(`bit#${i}: ${timeEnd - timeStart}ms`);
  timeSumBit += timeEnd - timeStart;
}


console.log(`Average(arr): ${timeSumArr / experimentNum}ms`);
console.log(`Average(bit): ${timeSumBit / experimentNum}ms`);