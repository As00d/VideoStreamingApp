export const viewOnYoutubeVideo = (view) =>
  Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(view);
