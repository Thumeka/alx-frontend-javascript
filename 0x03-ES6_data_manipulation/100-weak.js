export function queryAPI(endPoint) {
  weakMap.set(endPoint, count);
  count += 1;
  const queryCount = weakMap.get(endPoint);
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
