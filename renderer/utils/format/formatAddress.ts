export default function formatAddress({ city, tole }: IMinimalAddressFragment) {
  return `${tole}, ${city}`;
}

export function formatLongAddress({
  city,
  country,
  district,
  ward,
  tole,
}: IRegularAddressFragment) {
  return `${city} ${ward}, ${tole}, ${district}, ${country}`;
}
