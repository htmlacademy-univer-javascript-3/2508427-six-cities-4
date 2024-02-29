
import { Review as ReviewModel, ReviewTemplate } from '../types/review.ts';
import Review from './review.tsx';
import { ChangeEvent, SyntheticEvent, useState } from 'react';

type ReviewsProps = {
  reviews: ReviewModel[];
};

function Reviews({reviews}: ReviewsProps) {
  const [reviewsList, setReviewsList] = useState(reviews);
  const [reviewTemplate, setReviewTemplate] = useState<ReviewTemplate>({rating: 0, text: ''});

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    const newReview = {...reviewTemplate, id: 100, date: 'February 2024', author: {name: 'Я', image: 'img/avatar-max.jpg'}} as ReviewModel;
    setReviewsList([...reviewsList, newReview]);
    setReviewTemplate({text: '', rating: 0});
  }

  function handleStarsInput(rating: number) {
    setReviewTemplate({...reviewTemplate, rating: rating});
  }

  function handleTextInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setReviewTemplate({...reviewTemplate, text: event.target.value});
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
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={() => handleStarsInput(5)} />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={() => handleStarsInput(4)} />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={() => handleStarsInput(3)} />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={() => handleStarsInput(2)} />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={() => handleStarsInput(1)} />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={reviewTemplate.text}
          onChange={handleTextInput}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Reviews;
