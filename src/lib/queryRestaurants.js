export function queryRestaurants(restaurants, date, time, guests) {
  console.log("restaurantsinciming", restaurants, date, time, guests);
  return restaurants?.filter((restaurant) => {
    if (!restaurant.date.includes(date)) return false;

    const availableTime = restaurant.times.find((t) => t.time === time);
    if (!availableTime) return false;

    if (!availableTime.guestCombination.includes(guests)) return false;

    return true;
  });
}
