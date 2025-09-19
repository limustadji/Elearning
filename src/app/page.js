import Button from "@/components/button/Button";
import Checkbox from "@/components/button/Checkbox";
import Radio from "@/components/button/Radio";
import Switch from "@/components/button/Switch";
import UnstyledButton from "@/components/button/UnstyledButton";

export default function Home() {
  return (
    <div className="p-10 bg-background space-y-12">
      {/* ... (Semua komponen lainnya) ... */}

      {/* --- Bagian Unstyled Button --- */}
      <div>
        <h1 className="text-4xl font-bold mb-8 text-text-primary">
          Unstyled Button Components
        </h1>
        <div className="flex flex-col items-start space-y-4">
          <UnstyledButton>Button</UnstyledButton>
          <UnstyledButton iconLeft>Button</UnstyledButton>
          <UnstyledButton iconRight>Button</UnstyledButton>
          <UnstyledButton iconRight iconLeft>
            Button
          </UnstyledButton>
          <UnstyledButton disabled iconLeft>
            Disabled Button
          </UnstyledButton>
        </div>
      </div>
    </div>
  );
}
