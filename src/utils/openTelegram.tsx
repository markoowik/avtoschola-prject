export const openTelegramBot = (slug: string) => {
  const tgLink = `tg://resolve?domain=driving_scholl_bot&start=course_${slug}`;
  const webLink = `https://t.me/driving_scholl_bot?start=course_${slug}`;

  window.open(tgLink, "_blank");

  setTimeout(() => {
    window.open(webLink, "_blank");
  }, 1000);
};
