import axios from "axios";

export const getLocation = async (
  city: string,
  country: string
): Promise<{
  city: string;
  country: string;
  coords: { lat: number; lng: number };
}> => {
  const res = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      `${city} ${country}`
    )}&key=${process.env.GOOGLE_API}`
  );
  const { data } = res;
  if (!data || data.status === "ZERO_RESULTS") {
    throw new Error("Can't find location with this address");
  }

  const coords = data.results[0].geometry.location;

  return {
    city,
    country,
    coords,
  };
};
