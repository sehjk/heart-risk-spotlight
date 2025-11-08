import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface RiskScore {
  name: string;
  description: string;
  status: "calculated" | "not-calculated";
  value?: string;
}

const riskScores: RiskScore[] = [
  {
    name: "FRAX Score",
    description: "10-year probability of major osteoporotic fracture",
    status: "not-calculated"
  },
  {
    name: "NSQIP Score",
    description: "Surgical risk calculator for postoperative outcomes",
    status: "not-calculated"
  },
  {
    name: "FIB-4 Index",
    description: "Liver fibrosis assessment score",
    status: "not-calculated"
  },
  {
    name: "CHA₂DS₂-VASc",
    description: "Stroke risk in atrial fibrillation",
    status: "not-calculated"
  },
  {
    name: "HAS-BLED",
    description: "Bleeding risk in anticoagulated patients",
    status: "not-calculated"
  }
];

export const OtherRiskScoresGrid = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Additional Risk Assessments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {riskScores.map((score) => (
            <div 
              key={score.name}
              className="grid grid-cols-[1fr_auto] gap-4 p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm">{score.name}</h4>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-3.5 w-3.5 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p>{score.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-xs text-muted-foreground">{score.description}</p>
              </div>
              <div className="flex items-center">
                <Badge variant="outline" className="bg-muted/50">
                  Not Calculated
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
