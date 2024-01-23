//test if two strings are isomorphic

const str1 = "xxy";
const str2 = "xyy";

function isomorphic(str1, str2) {
  let obj1 = buildObject(str1);
  let obj2 = buildObject(str2);

  if (Object.entries(obj1).length !== Object.entries(obj2).length) return false;

  const resultArr1 = Object.values(obj1).sort();
  const resultArr2 = Object.values(obj2).sort();
  let result = resultArr1.map((num, i) => {
    let resulted = [];
    if (resultArr2[i] === num) {
      resulted.push(true);
    } else {
      resulted.push(false);
    }
    return resulted;
  });
  return !result.join(",").split(",").includes("false") ? true : false;
}

function buildObject(str) {
  let result = {};
  str.split("").forEach((letter) => {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  });
  return result;
}

console.log(isomorphic(str1, str2));
