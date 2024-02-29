
import { ReviewTemplate } from '../types/review.ts';
import Review from './review.tsx';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import StarsSelector from './stars-selector.tsx';
import { reviews } from '../mocks/reviews.ts';
import { users } from '../mocks/users.ts';

type ReviewsProps = {
  offerId: string;
};

function Reviews({offerId}: ReviewsProps) {
  // API get reviews by offerId
  const [reviewsList, setReviewsList] = useState(reviews);
  const [reviewTemplate, setReviewTemplate] = useState<ReviewTemplate>({rating: 0, comment: ''});

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    const newReview = {...reviewTemplate, id: '100', date: 'February 2024', user: users[0]};
    setReviewsList([...reviewsList, newReview]);
    setReviewTemplate({comment: '', rating: 0});
  }

  function handleStarsInput(rating: number) {
    setReviewTemplate({...reviewTemplate, rating: rating});
  }

  function handleTextInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setReviewTemplate({...reviewTemplate, comment: event.target.value});
  }

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsList.length}</span></h2>
      <ul className="reviews__list">
        {reviewsList.map((x) => <Review key={x.id} review={x} />)}
      </ul>
      <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <StarsSelector onChange={handleStarsInput} value={reviewTemplate.rating} />
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={reviewTemplate.comment}
          onChange={handleTextInput}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={reviewTemplate.comment.length === 0 || reviewTemplate.rating === 0}>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Reviews;
