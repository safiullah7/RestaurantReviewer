export default class Restaurant {
  constructor(
    restaurantName,
    address,
    lat,
    long,
    ratings,
    avgRating = 0,
    placeId = "",
    totalRatings = 0
  ) {
    this.restaurantName = restaurantName;
    this.address = address;
    this.lat = lat;
    this.long = long;
    this.ratings = ratings;
    this.avgRating = avgRating;
    this.placeId = placeId;
    this.totalRatings = isNaN(totalRatings) ? 0 : totalRatings;
  }

  getAverageRating() {
      let sum = 0;
      let avg = 0;
      for(let i = 0; i < this.ratings.length; i++) {
          sum += this.ratings[i].stars;
      }
      avg = sum / this.ratings.length;
      this.avgRating = avg;
      return avg;
  }
//   getAverageRating() {
//     // avgRating * totalRatings + new rating / totalRatings
//     let sum = 0;
//     let avg = 0;
//     let temp = this.avgRating * this.totalRatings;
//     for (let i = 0; i < this.ratings.length; i++) {
//       sum += this.ratings[i].stars;
//     }
//     sum += temp;
//     avg = sum / this.totalRatings;
//     this.avgRating = avg;
//     return avg;
//   }

  setAvgRating(review, file) {
    if (file)
        this.getAverageRating();
    else {
        if (isNaN(this.totalRatings)) 
            this.totalRatings = 0;
        let temp = this.avgRating * this.totalRatings;
        this.totalRatings += 1;
        let sum = review.stars;
        sum += temp;
        this.avgRating = sum / this.totalRatings;
    }
  }
}
