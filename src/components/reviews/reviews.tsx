import {ReviewTemplate} from '../../types/review.ts';
import Review from '../review/review.tsx';
import {ChangeEvent, SyntheticEvent, useState} from 'react';
import StarsSelector from '../stars-selector/stars-selector.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthorizationStatus, REVIEW_MAX_LENGTH, REVIEW_MIN_LENGTH} from '../../settings.ts';
import {sendReview} from '../../store/api-actions.ts';


function Reviews() {
  const dispatch = useAppDispatch();
  const {reviews, authorizationStatus, offer} = useAppSelector((state) => state);
  const [reviewTemplate, setReviewTemplate] = useState<ReviewTemplate>({rating: 0, comment: ''});

  const isValidReview = reviewTemplate.comment.length < REVIEW_MIN_LENGTH || reviewTemplate.comment.length > REVIEW_MAX_LENGTH || reviewTemplate.rating === 0;

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    dispatch(sendReview({offerId: offer!.id, template: reviewTemplate}));
  }

  function handleStarsInput(rating: number) {
    setReviewTemplate({...reviewTemplate, rating: rating});
  }

  function handleTextInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setReviewTemplate({...reviewTemplate, comment: event.target.value});
  }

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <Review key={review.id} review={review}/>)}
      </ul>
      {authorizationStatus === AuthorizationStatus.Authorized && (
        <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
          <label className="reviews__label form__label" htmlFor="review">Your review</label>
          <div className="reviews__rating-form form__rating">
            <StarsSelector rating={reviewTemplate.rating} onChange={handleStarsInput}/>
          </div>
          <textarea
            className="reviews__textarea form__textarea"
            id="review"
            name="review"
            placeholder="Tell how was your stay, what you like and what can be improved"
            value={reviewTemplate.comment}
            onChange={handleTextInput}
            maxLength={300}
            minLength={50}
          />
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and
              describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button
              className="reviews__submit form__submit button"
              type="submit"
              disabled={isValidReview}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

export default Reviews;
