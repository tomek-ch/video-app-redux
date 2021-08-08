import getVimeoVideo from "./getVimeoVideo";
import getYtVideo from "./getYtVideo";

async function getVideo(text: string) {
  const vimeoId = text.match(/\d{9}/)?.[0];

  if (!vimeoId) {
    return await getYtVideo(text);
  }

  return await getVimeoVideo(vimeoId);
}

export default getVideo;
