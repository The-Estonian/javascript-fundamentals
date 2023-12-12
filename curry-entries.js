const defaultCurry = (obj) => {
  let curryObj = { ...obj };
  return (e) => {
    return { ...curryObj, ...e };
  };
};

const mapCurry = (func) => {
  let returnFunc = func;
  return (e) => {
    let returnObj = {};
    for (const [key, value] of Object.entries(e)) {
      let [funcKey, funcValue] = returnFunc([key, value]);
      returnObj[funcKey] = funcValue;
    }
    return returnObj;
  };
};

const reduceCurry = (func) => {
  return (e) => {
    let arr = [];
    for (const [key, value] of Object.entries(e)) {
      arr.push([key, value]);
    }
    return arr.reduce(func, (i = 0));
  };
};
// console.log(reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0));

const filterCurry = (func) => {
  return (e) => {
    let returnObj = {};
    for (const [key, value] of Object.entries(e)) {
      if (func([key, value])) {
        returnObj[key] = value;
      }
    }
    return returnObj;
  };
};

const reduceScore = (person, index = 0) => {
  let newPerson = filterCurry(([k, v]) => v.isForceUser === true)(person);
  return (
    index +
    reduceCurry((acc, [k, v]) => (acc += v.pilotingScore + v.shootingScore))(
      newPerson
    )
  );
};

const filterForce = (person) => {
  return filterCurry(
    ([k, v]) => v.shootingScore >= 80 && v.isForceUser === true
  )(person);
};

const mapAverage = (obj) => {
  let objCopy = { ...obj };
  let scores = mapCurry(([k, v]) => [
    k,
    (v.pilotingScore + v.shootingScore) / 2,
  ])(obj);
  for (const [key, value] of Object.entries(objCopy)) {
    objCopy[key] = defaultCurry(value)({ averageScore: scores[key] });
  }
  return objCopy;
};

// ([k, v]) => [`${k}_force`, v];

//Object.entries(obj);
//Object.keys(obj);
//Object.values(obj);

// const personnel = {
//   lukeSkywalker: {
//     id: 5,
//     pilotingScore: 98,
//     shootingScore: 56,
//     isForceUser: true,
//   },
//   sabineWren: {
//     id: 82,
//     pilotingScore: 73,
//     shootingScore: 99,
//     isForceUser: false,
//   },
//   zebOrellios: {
//     id: 22,
//     pilotingScore: 20,
//     shootingScore: 59,
//     isForceUser: false,
//   },
//   ezraBridger: {
//     id: 15,
//     pilotingScore: 43,
//     shootingScore: 67,
//     isForceUser: true,
//   },
//   calebDume: {
//     id: 11,
//     pilotingScore: 71,
//     shootingScore: 85,
//     isForceUser: true,
//   },
// };

// let first = {
//   http: 403,
//   connection: 'close',
//   contentType: 'multipart/form-data',
// };

// let second = { http: 200, connection: 'open', requestMethod: 'GET' };

// console.log(defaultCurry(first)(second));

// const funcer = ([k, v]) => [`${k}_force`, v];

// console.log(mapCurry(funcer)(personnel));
// console.log(reduceCurry((acc, [k, v]) => (acc += v))({ a: 1, b: 2, c: 3 }, 0));
// console.log(
//   filterCurry(([k, v]) => typeof v === 'string' || k === 'arr')({
//     str: 'string',
//     nbr: 1,
//     arr: [1, 2],
//   })
// );
// { str: 'string', arr: [1, 2] }

// {
//     http: 200,
//     connection: 'open',
//     contentType: 'multipart/form-data',
//     requestMethod: 'GET'
// }

// console.log(reduceScore(personnel, 0)); // 420
// console.log(reduceScore(personnel, 420)); // 840

// console.log(filterForce(personnel)); // calebDume:{ id: 11, isForceUser: true,  pilotingScore: 71, shootingScore: 85 }

// console.log(mapAverage(personnel));

// {
//  sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false, averageScore: 86 },
//  zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false, averageScore: 39.5 },
//  lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true,  averageScore: 77 },
//  ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true,  averageScore: 55 },
//  calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true,  averageScore: 78 },
// }
