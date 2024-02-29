type StarsSelectorProps = {
  onChange: (value: number) => void;
  value: number;
};

function StarsSelector({onChange, value}: StarsSelectorProps) {
  const values = [ 'perfect', 'good', 'not bad', 'bad', 'terrible'];

  return (
    <div className="reviews__rating-form form__rating">
      {values.map((x, i) =>
        (
          <>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              id={`${i}-stars`}
              type="radio"
              onChange={() => onChange(i)}
              checked={i === value}
            />
            <label htmlFor={`${i}-stars`} className="reviews__rating-label form__rating-label" title={x}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
    </div>
  );
}

export default StarsSelector;
