export const imagesListOriginal = [
  'assets/database/airplane1.png',
  'assets/database/airplane5.png',
  'assets/database/airplane6.png',
  'assets/database/airplane9.png',
  'assets/database/airplane10.png',
  'assets/database/airplane8.png',
  'assets/database/ship4.png',
  'assets/database/ship7.png',
  'assets/database/ship8.png',
  'assets/database/ship9.png',
  'assets/database/ship10.png',
  'assets/database/ship1.png',
  'assets/database/truck3.png',
  'assets/database/truck4.png',
  'assets/database/truck2.png',
  'assets/database/truck6.png',
  'assets/database/truck5.png',
  'assets/database/truck7.png',
];

const imagesArray = [
  'assets/database/airplane1.png',
  'assets/database/airplane2.png',
  'assets/database/airplane3.png',
  'assets/database/airplane4.png',
  'assets/database/airplane5.png',
  'assets/database/airplane6.png',
  'assets/database/airplane7.png',
  'assets/database/airplane8.png',
  'assets/database/airplane9.png',
  'assets/database/airplane10.png',
  'assets/database/ship1.png',
  'assets/database/ship2.png',
  'assets/database/ship3.png',
  'assets/database/ship4.png',
  'assets/database/ship5.png',
  'assets/database/ship6.png',
  'assets/database/ship7.png',
  'assets/database/ship8.png',
  'assets/database/ship9.png',
  'assets/database/ship10.png',
  'assets/database/truck1.png',
  'assets/database/truck2.png',
  'assets/database/truck3.png',
  'assets/database/truck4.png',
  'assets/database/truck5.png',
  'assets/database/truck6.png',
  'assets/database/truck7.png',
  'assets/database/truck8.png',
  'assets/database/truck9.png',
  'assets/database/truck10.png',
];

const SIZE = 18;
const RESPONSIVE_SIZE = 10;

export const randomNoRepeats = responsiveSize => {
  const result = [];
  const size = responsiveSize === 'small' ? RESPONSIVE_SIZE : SIZE;
  const copy = imagesArray.slice(0);
  while (result.length < size) {
    const index = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(index, 1)[0]);
  }
  return result;
};
