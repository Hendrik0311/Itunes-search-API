export const searchITunes = async (term, mediaType) => {
  const url = `https://itunes.apple.com/search?term=${term}&media=${mediaType}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
