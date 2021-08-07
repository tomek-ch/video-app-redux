function getId(str: string) {
  return (
    str.match(
      /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/
    )?.[1] || str
  );
}

async function fetchFromYt(id: string) {
  const key = process.env.REACT_APP_YT_API_KEY;
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${key}&part=snippet,statistics`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data.items[0];
    }
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function getYtVideo(text: string) {
  const id = getId(text);
  const video = await fetchFromYt(id);

  if (!video) {
    return null;
  }

  const data = {
    id: video.id,
    title: video.snippet.title,
    views: video.statistics.viewCount,
    likes: video.statistics.likeCount,
    thumbnail: video.snippet.thumbnails.standard.url,
    timestamp: Date.now(),
    favorite: false,
  };
  return data;
}

export default getYtVideo;
