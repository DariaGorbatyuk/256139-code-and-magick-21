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
  makeCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);
};
const getMaxElement = (arr) => {
  const sortArr = arr.slice();
  sortArr.sort();
  return sortArr[sortArr.length - 1];
};
const getBarHeight = (item, maxElement) => {
  return (item * BAR_HEIGHT) / maxElement;
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
  names.forEach((name, index) => {
    ctx.fillText(name, COLUMN_WIDTH * index + SPACE_BETWEEN_COLUMN * index, 0);
    ctx.transform(1, 0, 0, -1, 0, 0); // переворачиваем y
    ctx.fillStyle = `hsl(240, ${Math.round(Math.random() * 100)}%, 50%)`;
    if (name === `Вы`) {
      ctx.fillStyle = MY_COLOR;
    }
    ctx.fillRect(COLUMN_WIDTH * index + SPACE_BETWEEN_COLUMN * index, GAP, COLUMN_WIDTH, getBarHeight(times[index], maxElement));
    ctx.transform(1, 0, 0, -1, 0, 0);// переворачиваем y
    ctx.fillStyle = `#000`;
    ctx.fillText(String(Math.round(times[index])), COLUMN_WIDTH * index + SPACE_BETWEEN_COLUMN * index, -getBarHeight(times[index], maxElement) - FONT_GAP - GAP);
  });
};

