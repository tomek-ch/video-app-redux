interface Video {
  id: string;
  title: string;
  views: string | null;
  likes: string | number;
  thumbnail: string;
  timestamp: number;
  favorite: boolean;
}

export default Video;
