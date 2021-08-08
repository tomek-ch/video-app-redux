function getEmbedLink(id: string) {
  const isVimeoId = /\d{9}/.test(id);

  if (isVimeoId) {
    return `https://player.vimeo.com/video/${id}`;
  }

  return `https://www.youtube.com/embed/${id}`;
}

export default getEmbedLink;
