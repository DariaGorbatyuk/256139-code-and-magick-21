'use strict';
const setup = document.querySelector(`.setup`);
setup.classList.remove(`hidden`);
const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COATS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARDS_AMOUNT = 4;

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
};

// заполнения блока DOM-элементами на основе массива JS-объектов.
// Создайте массив, состоящий из 4-х сгенерированных JS объектов, которые будут описывать похожих персонажей. Объекты должны содержать следующие поля:
//
// name, строка — случайно сгенерированное имя персонажа. Имя генерируется из массивов имён и фамилий: нужно случайным образом выбрать из массива имён имя,
// а из массива фамилий фамилию и сложить их. При желании имя и фамилию можно в случайном порядке менять местами:

const createwizardsArray = () => {
  const wizardsData = [];
  for (let i = 0; i <= WIZARDS_AMOUNT; i++) {
    wizardsData[i] = {
      name: `${NAMES[getRandomInt(0, NAMES.length)]} ${SURNAMES[getRandomInt(0, SURNAMES.length)]}`,
      coatColor: COATS[getRandomInt(0, COATS.length)],
      eyesColor: EYES[getRandomInt(0, EYES.length)]
    };
  }
  return wizardsData;
};
