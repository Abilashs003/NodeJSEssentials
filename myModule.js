var cou = 0;
const inc = () => cou++;
const dec = () => cou--;

const getCount = () => console.log(cou);

var name = "Alex";

module.exports = {
  inc,
  dec,
  getCount,
  name,
};
