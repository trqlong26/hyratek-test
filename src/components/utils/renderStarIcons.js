export const renderStarIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push("★");
    } else if (i < rating) {
      stars.push("⯪");
    } else {
      stars.push("☆");
    }
  }

  return stars.join("");
};
