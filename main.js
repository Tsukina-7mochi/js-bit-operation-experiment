// 値の数
const valNum = 1000_0000;
// 実験する回数
const experimentNum = 10;

console.log('== AND operation ==');


let timeSumBoolArr = 0;
for(let i = 0; i < experimentNum; i++) {
  const valBoolArr1 = new Array(valNum).fill(0).map(_ => Math.random() < 0.5);
  const valBoolArr2 = new Array(valNum).fill(0).map(_ => Math.random() < 0.5);
  const resultBoolArr = new Array(valNum);

  const timeStart = Date.now();

  for(let i = 0; i < valBoolArr1.length; i++) {
    resultBoolArr[i] = valBoolArr1[i] && valBoolArr2[i];
  }

  const timeEnd = Date.now();

  console.log(`boolean[]#${i}: ${timeEnd - timeStart}ms`);
  timeSumBoolArr += timeEnd - timeStart;
}


let timeSumBitTyped = 0;
for(let i = 0; i < experimentNum; i++) {
  const valBitTyped1 = new Uint32Array(Math.ceil(valNum / 32)).fill(0).map(_ => Math.floor(Math.random() * (2 ** 32)));
  const valBitTyped2 = new Uint32Array(Math.ceil(valNum / 32)).fill(0).map(_ => Math.floor(Math.random() * (2 ** 32)));
  const resultBitTyped = new Uint32Array(Math.ceil(valNum / 32));

  const timeStart = Date.now();

  for(let i = 0; i < valBitTyped1.length; i++) {
    resultBitTyped[i] = valBitTyped1[i] & valBitTyped2[i];
  }

  const timeEnd = Date.now();

  console.log(`Uint32Array#${i}: ${timeEnd - timeStart}ms`);
  timeSumBitTyped += timeEnd - timeStart;
}

let timeSumNumArr = 0;
for(let i = 0; i < experimentNum; i++) {
  const valNumArr1 = new Array(Math.ceil(valNum / 32)).fill(0).map(_ => Math.floor(Math.random() * (2 ** 32)));
  const valNumArr2 = new Array(Math.ceil(valNum / 32)).fill(0).map(_ => Math.floor(Math.random() * (2 ** 32)));
  const resultNumArr = new Array(Math.ceil(valNum / 32));

  const timeStart = Date.now();

  for(let i = 0; i < valNumArr1.length; i++) {
    resultNumArr[i] = valNumArr1[i] & valNumArr2[i];
  }

  const timeEnd = Date.now();

  console.log(`number[]#${i}: ${timeEnd - timeStart}ms`);
  timeSumNumArr += timeEnd - timeStart;
}


console.log(`Average(boolean[]): ${timeSumBoolArr / experimentNum}ms`);
console.log(`Average(Uint32Array): ${timeSumBitTyped / experimentNum}ms`);
console.log(`Average(number[]): ${timeSumNumArr / experimentNum}ms`);


console.log('== Random Access ==');


timeSumBoolArr = 0;

for(let i = 0; i < experimentNum; i++) {
  const valBoolArr1 = new Array(valNum).fill(0).map(_ => Math.random() < 0.5);
  let boolVal = false;

  const timeStart = Date.now();

  for(let i = 0; i < valBoolArr1.length; i++) {
    boolVal = valBoolArr1[i];
  }

  const timeEnd = Date.now();

  console.log(`boolean[]#${i}: ${timeEnd - timeStart}ms`);
  timeSumBoolArr += timeEnd - timeStart;
}

timeSumBitTyped = 0;

for(let i = 0; i < experimentNum; i++) {
  const valBitTyped1 = new Uint32Array(Math.ceil(valNum / 32)).fill(0).map(_ => Math.floor(Math.random() * (2 ** 32)));
  let boolVal = false;

  const timeStart = Date.now();

  for(let i = 0; i < valBitTyped1.length; i++) {
    boolVal = (valBitTyped1[Math.floor(i / 32)] >> (31 - (i % 32))) & 1;
  }

  const timeEnd = Date.now();

  console.log(`Uint32Array#${i}: ${timeEnd - timeStart}ms`);
  timeSumBitTyped += timeEnd - timeStart;
}

timeSumNumArr = 0;

for(let i = 0; i < experimentNum; i++) {
  const valNumArr1 = new Array(Math.ceil(valNum / 32)).fill(0).map(_ => Math.floor(Math.random() * (2 ** 32)));
  let boolVal = false;

  const timeStart = Date.now();

  for(let i = 0; i < valNumArr1.length; i++) {
    boolVal = (valNumArr1[Math.floor(i / 32)] >> (31 - (i % 32))) & 1;
  }

  const timeEnd = Date.now();

  console.log(`number[]#${i}: ${timeEnd - timeStart}ms`);
  timeSumNumArr += timeEnd - timeStart;
}


console.log(`Average(boolean[]): ${timeSumBoolArr / experimentNum}ms`);
console.log(`Average(Uint32Array): ${timeSumBitTyped / experimentNum}ms`);
console.log(`Average(number[]): ${timeSumNumArr / experimentNum}ms`);