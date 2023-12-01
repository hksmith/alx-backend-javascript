export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);
  let flattenedEmployees = [].concat(...departments);

  let currentIndex = 0;

  return {
    next() {
      if (currentIndex < flattenedEmployees.length) {
        return { value: flattenedEmployees[currentIndex++], done: false };
      } else {
        return { done: true };
      }
    },
  };
}

