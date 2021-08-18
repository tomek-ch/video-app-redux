interface Video {
  id: string;
  title: string;
  views: number | null;
  likes: number;
  thumbnail: string;
  timestamp: number;
  favorite: boolean;
}

export default Video;
