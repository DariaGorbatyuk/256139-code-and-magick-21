'use strict';
const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COATS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARDS_AMOUNT = 4;
const setup = document.querySelector(`.setup`);
const setupSimilar = document.querySelector(`.setup-similar`);
const wizardTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
};

const createWizardsArray = () => {
  const wizards = [];
  for (let i = 0; i <= WIZARDS_AMOUNT; i++) {
    wizards[i] = {
      name: `${NAMES[getRandomInt(0, NAMES.length)]} ${SURNAMES[getRandomInt(0, SURNAMES.length)]}`,
      coatColor: COATS[getRandomInt(0, COATS.length)],
      eyesColor: EYES[getRandomInt(0, EYES.length)]
    };
  }
  return wizards;
};

const renderWizard = (wizard) => {
  const wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return wizardElement;
};

const renderWizardList = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < wizards.length; i++) {
    let wizard = renderWizard(wizards[i]);
    fragment.appendChild(wizard);
  }
  setupSimilar.querySelector(`.setup-similar-list`).appendChild(fragment);
  setupSimilar.classList.remove(`hidden`);
};

setup.classList.remove(`hidden`);
const wizards = createWizardsArray();
renderWizardList();
