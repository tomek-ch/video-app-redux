import Video from "../types/video";
import getVideo from "./getVideo";

async function getVideos(arr: string[]) {
  try {
    const result = await Promise.all(arr.map((id) => getVideo(id)));
    return result.filter((vid) => vid) as Video[];
  } catch {
    return [];
  }
}

export default getVideos;
