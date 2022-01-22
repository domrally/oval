export const cover = (aspectRatio = 1, x = 0, y = 0) => {
  const {sign} = Math;

  if (aspectRatio > 1) {
    x += sign(x) * (aspectRatio - 1);
    x /= aspectRatio;
  } else {
    y += sign(y) * (1 / aspectRatio - 1);
    y *= aspectRatio;
  }

  x++, y++;
  (x *= 50), (y *= 50);

  return {x, y};
};
