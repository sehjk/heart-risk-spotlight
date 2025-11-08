import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ASCVDRiskCard } from "./risk-calculator/ASCVDRiskCard";
import { OtherRiskScoresGrid } from "./risk-calculator/OtherRiskScoresGrid";
import { ScreeningRecommendations } from "./risk-calculator/ScreeningRecommendations";

interface RiskCalculatorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const RiskCalculatorModal = ({ open, onOpenChange }: RiskCalculatorModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Patient Risk Assessment</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          <ASCVDRiskCard />
          <OtherRiskScoresGrid />
          <ScreeningRecommendations />
        </div>
      </DialogContent>
    </Dialog>
  );
};
