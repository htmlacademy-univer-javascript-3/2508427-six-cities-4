type PremiumLabelProps = {
  visible: boolean;
  big?: boolean;
};

function PremiumLabel({ visible = false, big = false }: PremiumLabelProps) {
  return visible
    ? (
      <div className={big ? 'offer__mark' : 'place-card__mark'}>
        <span>Premium</span>
      </div>
    )
    : null;
}

export default PremiumLabel;
