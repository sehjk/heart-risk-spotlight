import { Button } from "@/components/ui/button";
import { RiskCalculatorModal } from "@/components/RiskCalculatorModal";
import { useState } from "react";
import { Calculator } from "lucide-react";

const Index = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-foreground">EHR Risk Calculator</h1>
          <p className="text-lg text-muted-foreground">Patient risk assessment and screening recommendations</p>
        </div>
        
        <Button 
          onClick={() => setShowCalculator(true)}
          size="lg"
          className="gap-2"
        >
          <Calculator className="h-5 w-5" />
          Open Risk Calculator
        </Button>
        
        <RiskCalculatorModal 
          open={showCalculator} 
          onOpenChange={setShowCalculator}
        />
      </div>
    </div>
  );
};

export default Index;
