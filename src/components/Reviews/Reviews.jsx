import styles from "./reviews.module.css";
import Title from "./../Title/Title";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch.hook";
const Reviews = () => {
    const { data } = useFetch({ path: "reviews" });

    const ReviewsContent = () => {
        return (
            <article className={styles.reviewsContent}>
                {data.length > 0 &&
                    data.map((review) => (
                        <Review key={review._id} review={review} />
                    ))}
            </article>
        );
    };

    const Review = ({ review }) => (
        <div className={styles.review} key={review.id}>
            <p className={styles.reviewName}>
                {review.name}, {review.age} år
            </p>
            <p className={styles.reviewStay}>Har været på {review.stay} </p>
            <p>{review.review}</p>
        </div>
    );

    Review.propTypes = {
        review: PropTypes.object.isRequired,
    };

    return (
        <section className={styles.reviews}>
            <div className="container">
                <Title type={"h2"} className={styles.title}>
                    Vores gæster udtaler
                </Title>
                <ReviewsContent />
            </div>
        </section>
    );
};

export default Reviews;
