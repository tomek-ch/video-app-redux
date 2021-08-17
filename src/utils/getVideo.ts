async function getVideo(query: string) {
  const api = process.env.REACT_APP_API_URL;
  try {
    const result = await fetch(`${api}/video?q=${query}`);
    return result.json();
  } catch {
    return null;
  }
}

export default getVideo;
