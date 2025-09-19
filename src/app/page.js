import Image from "next/image";
import Checkbox from "@/components/button/Checkbox";
import Radio from "@/components/button/Radio";
import Switch from "@/components/button/Switch";
import Chip from "@/components/button/Chip";
import Button from "@/components/button/Button";

export default function Home() {
  const variants = [
    "success",
    "info",
    "warning",
    "error",
    "primary",
    "secondary",
  ];

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 space-y-8">
        {/* Subtle Chips */}
        <div className="flex items-center space-x-4">
          {variants.map((variant) => (
            <Chip
              key={variant}
              variant={variant}
              style="subtle"
              label={variant.charAt(0).toUpperCase() + variant.slice(1)}
            />
          ))}
          <Chip label="Disabled" disabled />
        </div>

        {/* Solid Chips */}
        <div className="flex items-center space-x-4">
          {variants.map((variant) => (
            <Chip
              key={variant}
              variant={variant}
              style="solid"
              label={variant.charAt(0).toUpperCase() + variant.slice(1)}
            />
          ))}
          <Chip label="Disabled" disabled />
        </div>

        {/* Outlined Chips */}
        <div className="flex items-center space-x-4">
          {variants.map((variant) => (
            <Chip
              key={variant}
              variant={variant}
              style="outlined"
              label={variant.charAt(0).toUpperCase() + variant.slice(1)}
            />
          ))}
          <Chip label="Disabled" disabled style="outlined" />
        </div>
      </main>
    </>
  );
}
