'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const COLUMN_WIDTH = 40;
const BAR_HEIGHT = 150;
const SPACE_BETWEEN_COLUMN = 50;
const GAP = 10;
const FONT_GAP = 20;
const MY_COLOR = `rgba(255, 0, 0, 1)`;

const makeCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
const makeStatisticCloud = (ctx) => {
  makeCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  makeCloud(ctx, CLOUD_X, CLOUD_Y, `white`);
};
const getMaxElement = (arr) => {
  let sortArr = arr.slice();
  sortArr.sort();
  return sortArr[sortArr.length - 1];
};

window.renderStatistics = (ctx, names, times) => {
  makeStatisticCloud(ctx);
  const maxElement = getMaxElement(times);
  ctx.fillStyle = `#000`;
  ctx.textBaseline = `hanging`;
  ctx.font = `16px PT Mono`;
  ctx.fillText(`Ура вы победили!`, 110, 30);
  ctx.fillText(`Список результатов: `, 110, 50);
  ctx.translate(CLOUD_X + 4 * GAP, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);// переносим систему координат вниз
  for (let i = 0; i < names.length; i++) {
    ctx.fillText(names[i], COLUMN_WIDTH * i + SPACE_BETWEEN_COLUMN * i, 0);
    ctx.transform(1, 0, 0, -1, 0, 0);
    ctx.fillStyle = `hsl(240, ${Math.round(Math.random() * 100)}%, 50%)`;
    if (names[i] === `Вы`) {
      ctx.fillStyle = MY_COLOR;
    }
    ctx.fillRect(COLUMN_WIDTH * i + SPACE_BETWEEN_COLUMN * i, GAP, COLUMN_WIDTH, (times[i] * BAR_HEIGHT) / maxElement);
    ctx.transform(1, 0, 0, -1, 0, 0);
    ctx.fillStyle = `#000`;
    ctx.fillText(String(Math.round(times[i])), COLUMN_WIDTH * i + SPACE_BETWEEN_COLUMN * i, -BAR_HEIGHT - FONT_GAP - GAP);
  }
};
