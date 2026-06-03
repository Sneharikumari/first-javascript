function findTM(no1, no2, no3) {
  return no1 + no2 + no3;
}

const a = {
  marks: { eng: 83, math: 86, sci: 30 },
  name: "ram",
  roll: 23,
  class: "iv",
  findTotalM: findTM,
};
sum = a.findTotalM(a.marks.eng, a.marks.math, a.marks.sci);
console.log(sum);
