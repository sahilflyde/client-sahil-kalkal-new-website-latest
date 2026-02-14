import clsx from "clsx";

const Typography = ({
  variant = "body-2",
  overrideVariant,
  as,
  children,
  className,
  colorVariant,

  // ⭐ NEW
  words = [],

  ...rest
}) => {
  const finalVariant = overrideVariant || variant;
  const Tag = as || getDefaultTag(finalVariant);

  return (
    <Tag
      className={clsx(
        finalVariant,
        className,
        colorVariant && `text-${colorVariant}`,
      )}
      {...rest}
      style={{ whiteSpace: "pre-line" }}
    >
      {/* ⭐ WORD LEVEL RENDER */}
      {words?.length > 0
        ? words.map((word, i) => (
            <span
              key={i}
              className={clsx(
                word.variant,
                word.highlight && "font-bold text-primary",
              )}
            >
              {word.text}{" "}
            </span>
          ))
        : children}
    </Tag>
  );
};

function getDefaultTag(variant) {
  const map = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",

    "body-1": "p",
    "body-2": "p",
    "body-3": "p",
    "body-4": "p",
    "body-5": "p",

    "style-2": "p",
    "style-3": "p",
    "style-4": "p",
    "style-5": "p",

    "side-menu-1": "p",
    "nav-menu-1": "p",
    "big-rock": "p",

    "head-text": "p",
    "head-text-1": "p", 
    "head-text-2": "p",
    "head-text-3": "p",
    "head-text-4": "p",
    "head-text-5": "p",

    "color-name": "p",
    "gradient-text": "p",
    "big-text": "p",
  };

  return map[variant] || "p";
}

export default Typography;
