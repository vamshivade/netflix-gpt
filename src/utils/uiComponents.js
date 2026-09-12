export const BrandMark = () => {
  return (
    <div className="brand-mark" aria-hidden="true">
      <span>N</span>
    </div>
  );
};

export const Brand = ({ wrapperClassName, nameClassName }) => {
  return (
    <div className={wrapperClassName}>
      <BrandMark />
      <span className={nameClassName}>
        netflix<span>gpt</span>
      </span>
    </div>
  );
};

export const ArrowIcon = () => {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
};
