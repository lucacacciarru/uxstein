export function timeBetweenTwoDays(
  createdAt: number,
  updatedAt: number,
): number {
  const differenceInSeconds = updatedAt - createdAt;
  const differenceInDays = Math.round(
    differenceInSeconds / (24 * 60 * 60 * 1000),
  );
  return differenceInDays;
}
