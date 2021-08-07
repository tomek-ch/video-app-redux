import Video from "../types/video";
import getYtVideo from "./getYtVideo";

async function getVideos(arr: string[]) {
  try {
    const result = await Promise.all(arr.map((id) => getYtVideo(id)));
    return result.filter((vid) => vid) as Video[];
  } catch {
    return [];
  }
}

export default getVideos;
