function getEmbedLink(id: string) {
  const isVimeoId = /\d{9}/.test(id);

  if (isVimeoId) {
    return `https://player.vimeo.com/video/${id}?autoplay=1`;
  }

  return `https://www.youtube.com/embed/${id}?autoplay=1`;
}

export default getEmbedLink;
