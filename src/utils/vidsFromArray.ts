import Video from "../types/video";
import getVideo from "./getVideo";

interface VideoData {
  id: string;
  favorite: boolean;
  timestamp: number;
}

async function getVideos(arr: VideoData[]) {
  try {
    const result = await Promise.all(arr.map(({ id }) => getVideo(id)));

    return result.flatMap((vid, idx) =>
      vid
        ? {
            ...vid,
            favorite: arr[idx].favorite,
            timestamp: arr[idx].timestamp,
          }
        : []
    ) as Video[];
  } catch {
    return [];
  }
}

export default getVideos;
