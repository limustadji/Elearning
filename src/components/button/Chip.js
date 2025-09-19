import React from "react";
import PropTypes from "prop-types";

const Chip = ({
  variant = "primary",
  style = "subtle",
  disabled = false,
  label,
}) => {
  // Base classes for all chips, applying the specific sizing and font styles
  const baseClasses =
    "w-[4.25rem] h-[1.625rem] rounded-[0.625rem] flex items-center justify-center px-1 py-[0.625rem] font-medium text-body-sm transition-colors select-none";

  // Object to map variant and style props to corresponding Tailwind CSS classes
  const styleVariants = {
    // Subtle style (light background with colored text)
    subtle: {
      success: "bg-success-background text-success-default",
      info: "bg-info-background text-info-default",
      warning: "bg-warning-background text-warning-default",
      error: "bg-tertiary-100 text-tertiary-default", // Using tertiary for a better "error" look from the image
      primary: "bg-primary-100 text-primary-default",
      secondary: "bg-secondary-100 text-secondary-default",
    },
    // Solid style (colored background with dark text)
    solid: {
      success: "bg-success-default text-gray-900",
      info: "bg-info-default text-white",
      warning: "bg-warning-default text-gray-900",
      error: "bg-tertiary-default text-white",
      primary: "bg-primary-default text-gray-900",
      secondary: "bg-secondary-default text-gray-900",
    },
    // Outlined style (transparent background with colored border and text)
    outlined: {
      success:
        "bg-transparent border border-success-default text-success-default",
      info: "bg-transparent border border-info-default text-info-default",
      warning:
        "bg-transparent border border-warning-default text-warning-default",
      error:
        "bg-transparent border border-tertiary-default text-tertiary-default",
      primary:
        "bg-transparent border border-primary-default text-primary-default",
      secondary:
        "bg-transparent border border-secondary-default text-secondary-default",
    },
  };

  // Classes for the disabled state
  const disabledClasses = "bg-gray-200 text-text-disabled cursor-not-allowed";

  // Combine classes: start with base, then add either disabled or the selected variant style
  const chipClasses = [
    baseClasses,
    disabled ? disabledClasses : styleVariants[style][variant],
  ]
    .join(" ")
    .trim();

  return <div className={chipClasses}>{label}</div>;
};

// PropTypes for type-checking and better component documentation
Chip.propTypes = {
  variant: PropTypes.oneOf([
    "success",
    "info",
    "warning",
    "error",
    "primary",
    "secondary",
  ]),
  style: PropTypes.oneOf(["subtle", "solid", "outlined"]),
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default Chip;
