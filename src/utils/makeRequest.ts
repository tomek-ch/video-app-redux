async function makeReq(url: string) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
  } catch {
    return null;
  }
}

export default makeReq;
