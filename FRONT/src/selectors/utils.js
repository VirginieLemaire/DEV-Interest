export const randomArrayShuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue = 0;
  let randomIndex = 0;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const getDomainName = (url) => {
  const domain = (new URL(url));
  return domain.hostname.replace('www.', '');
};

// const parseStringJavascript = (string) => {
//   const lowerString = string.toLowerCase();
//   const word = "javascript"
//   return lowerString.includes(word);
// }


// const addTech = () => dispatch(changeNewCardTechs(1, 'techs'))

// const isJavascript = parseStringJavascript(title);

// console.log(isJavascript)

// if (isJavascript) {
//   console.log('IsJavascript');
//   return addTech
// }

export const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

