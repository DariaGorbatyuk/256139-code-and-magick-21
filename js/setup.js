'use strict';
const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COATS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARDS_AMOUNT = 4;

const setup = document.querySelector(`.setup`);
setup.classList.remove(`hidden`);
const wizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
};

// Стоит отдельно объявить
// 1)функцию генерации случайных данных,
// 2)функцию создания DOM-элемента на основе JS-объекта,
// 3)функцию заполнения блока DOM-элементами на основе массива JS-объектов.


const createWizardsArray = () => {
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
const wizardsData = createWizardsArray();

const createWizard = (wizard) => {
  const wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return wizardElement;
};

