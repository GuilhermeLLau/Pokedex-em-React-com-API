export const GetPokeApi = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('error: ', error);
  }
};

export const getPkmns = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('error: ', error);
  }
};
