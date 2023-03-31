import FeaturedReviewItem from "./featured-review-item.js";
import reviews from "./reviews.js"
import { Link } from "react-router-dom";

const FeaturedReviews = () => {
    return (
        <ul className="list-group">
            {
                reviews.map(review => {
                    return (
                        <FeaturedReviewItem review={review} />
                    )
                })
            }
        </ul>
    );
};

export default FeaturedReviews;