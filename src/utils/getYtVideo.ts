import makeReq from "./makeRequest";

function getId(str: string) {
  return (
    str.match(
      /^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/
    )?.[1] || str
  );
}

function fetchFromYt(id: string) {
  const key = process.env.REACT_APP_YT_API_KEY;
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${key}&part=snippet,statistics`;
  return makeReq(url);
}

async function getYtVideo(text: string) {
  const id = getId(text);
  const results = await fetchFromYt(id);
  const video = results?.items?.[0];

  if (!video) {
    return null;
  }

  const { thumbnails } = video.snippet;
  const data = {
    id: video.id,
    title: video.snippet.title,
    views: video.statistics.viewCount,
    likes: video.statistics.likeCount,
    thumbnail:
      thumbnails?.standard?.url ||
      thumbnails?.high?.url ||
      thumbnails?.default?.url,
    timestamp: Date.now(),
    favorite: false,
  };
  return data;
}

export default getYtVideo;
