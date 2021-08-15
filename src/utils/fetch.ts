const headers = {
  "Content-Type": "application/json",
};

export const fetchAsJSON = async (url: string): Promise<any | undefined> => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers,
    });
    if (res.status !== 200) {
      console.error(`server responded with ${res.status} for ${url}`);
      return undefined;
    }
    const json = await res.json();

    return json || undefined;
  } catch (error) {
    console.error(error);

    return undefined;
  }
};
