import Button from "@/components/button/Button";
import Checkbox from "@/components/button/Checkbox";
import Radio from "@/components/button/Radio";
import Switch from "@/components/button/Switch";

export default function Home() {
  const selectedRadioOption = "option1";

  return (
    <div className="p-10 bg-[var(--color-background)] space-y-12">
      {/* ... (Bagian Button, Checkbox, dan Radio) ... */}

      {/* --- Bagian Switch --- */}
      <div>
        <h1 className="text-4xl font-bold mb-8 text-[var(--color-text-primary)]">
          Switch Components
        </h1>
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-4">
            <Switch checked={true} />
            <span className="text-[var(--color-text-secondary)]">
              Aktif (On)
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Switch checked={false} />
            <span className="text-[var(--color-text-secondary)]">
              Tidak Aktif (Off)
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Switch checked={true} disabled={true} />
            <span className="text-[var(--color-text-secondary)]">
              Nonaktif (On)
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Switch checked={false} disabled={true} />
            <span className="text-[var(--color-text-secondary)]">
              Nonaktif (Off)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
