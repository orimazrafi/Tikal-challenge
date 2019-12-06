export default function reduceByName(array, name) {
  return array.reduce((acc, cur) => {
    const key = cur[name];
    !acc[key] ? (acc[key] = [cur]) : acc[key].push(cur);
    return acc;
  }, {});
}
