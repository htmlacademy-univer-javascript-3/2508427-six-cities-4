import '../style.css';


type StarsSelectorProps = {
  onChange: (value: number) => void;
  rating: number;
};

function StarsSelector({onChange, rating}: StarsSelectorProps) {
  const values = ['perfect', 'good', 'not bad', 'bad', 'terrible'];

  return (
    <div className="reviews__rating-form form__rating elements__reversed">
      {values.map((title, index) =>
        (
          <div key={title}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              id={`${index}-stars`}
              type="radio"
              onChange={() => onChange(index)}
              checked={rating === index}
            />
            <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
        ))}
    </div>
  );
}

export default StarsSelector;
