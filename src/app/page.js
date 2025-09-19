import Step from "@/components/step/Step";
import Stepper from "@/components/step/Stepper";

export default function MyPage() {
  // You can control the current step with state, e.g., const [currentStep, setCurrentStep] = useState(1);
  const currentStep = 0;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Course Progress</h1>
      <Stepper currentStep={currentStep}>
        <Step title="Chapter 1" />
        <Step title="Chapter 2" />
        <Step title="Chapter 3" />
      </Stepper>
    </div>
  );
}
