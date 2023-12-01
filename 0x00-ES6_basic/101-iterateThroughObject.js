export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let iterator = reportWithIterator;

  let employee = iterator.next();
  while (!employee.done) {
    result += employee.value;
    employee = iterator.next();
    if (!employee.done) {
      result += ' | ';
    }
  }

  return result;
}

