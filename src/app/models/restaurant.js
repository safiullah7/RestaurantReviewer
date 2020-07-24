
export default class Restaurant {
    constructor(restaurantName, address, lat, long, ratings, avgRating = 0) {
        this.restaurantName = restaurantName;
        this.address = address;
        this.lat = lat;
        this.long = long;
        this.ratings = ratings;
        this.avgRating = avgRating;
        // noOfRatings
        // id
        //place_id
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
}