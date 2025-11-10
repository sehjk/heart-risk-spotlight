import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ExternalLink, Heart, Info } from "lucide-react";
import { useState } from "react";
import { HeartHealthProgramModal } from "./HeartHealthProgramModal";

export const ASCVDRiskCard = () => {
  const [showEnrollment, setShowEnrollment] = useState(false);
  const riskScore = 18.5; // Example elevated score
  const isElevated = riskScore > 10;

  // Example input parameters
  const inputParams = {
    demographics: [
      { label: "Age", value: "62", unit: "years" },
      { label: "Sex", value: "Male", unit: "" },
      { label: "Race", value: "White", unit: "" },
    ],
    lipids: [
      { label: "Total Cholesterol", value: "245", unit: "mg/dL" },
      { label: "HDL Cholesterol", value: "38", unit: "mg/dL" },
      { label: "LDL Cholesterol", value: "165", unit: "mg/dL" },
    ],
    vitals: [
      { label: "Systolic BP", value: "148", unit: "mmHg" },
      { label: "Diastolic BP", value: "92", unit: "mmHg" },
    ],
    conditions: [
      { label: "On BP Treatment", value: "Yes", unit: "" },
      { label: "Diabetes", value: "Yes", unit: "" },
      { label: "Current Smoker", value: "No", unit: "" },
    ],
  };

  return (
    <>
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-1 flex-1">
              <CardTitle className="text-xl flex items-center gap-2">
                ASCVD Risk Score
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>10-year risk of atherosclerotic cardiovascular disease</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardTitle>
              <CardDescription>
                Estimates 10-year risk of heart attack or stroke
              </CardDescription>
            </div>
            {isElevated && (
              <Badge 
                variant="outline" 
                className="bg-medical-elevated/10 text-medical-elevated border-medical-elevated/30 hover:bg-medical-elevated/20 cursor-pointer"
                onClick={() => setShowEnrollment(true)}
              >
                <Heart className="h-3 w-3 mr-1" />
                Eligible for Heart Health Program
              </Badge>
            )}
          </div>
          
          <a 
            href="https://tools.acc.org/ascvd-risk-estimator-plus" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            View Online Calculator <ExternalLink className="h-3 w-3" />
          </a>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Input Parameters */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Input Parameters</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Demographics */}
              <div className="space-y-2">
                <h5 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Demographics</h5>
                <div className="rounded-lg border bg-secondary/30 p-3 space-y-2">
                  {inputParams.demographics.map((param, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{param.label}</span>
                      <span className="font-medium">{param.value} {param.unit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lipid Panel */}
              <div className="space-y-2">
                <h5 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Lipid Panel</h5>
                <div className="rounded-lg border bg-secondary/30 p-3 space-y-2">
                  {inputParams.lipids.map((param, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{param.label}</span>
                      <span className="font-medium">{param.value} {param.unit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vitals */}
              <div className="space-y-2">
                <h5 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Blood Pressure</h5>
                <div className="rounded-lg border bg-secondary/30 p-3 space-y-2">
                  {inputParams.vitals.map((param, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{param.label}</span>
                      <span className="font-medium">{param.value} {param.unit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditions */}
              <div className="space-y-2">
                <h5 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Risk Factors</h5>
                <div className="rounded-lg border bg-secondary/30 p-3 space-y-2">
                  {inputParams.conditions.map((param, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{param.label}</span>
                      <span className="font-medium">{param.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Prominent Score Display */}
          <div className="bg-gradient-to-br from-medical-elevated/10 to-medical-elevated/5 rounded-lg p-6 border border-medical-elevated/20">
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground font-medium">Calculated Risk Score</p>
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-medical-elevated">
                    {riskScore}%
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Current</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-medical-info">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-medical-success">
                    4.2%
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Optimal</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-medical-elevated/10 text-medical-elevated border-medical-elevated/30">
                Elevated Risk
              </Badge>
            </div>
          </div>

          {/* Interactive Results */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Risk Interpretation</h4>
            <div className="grid gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-3 rounded-md bg-secondary hover:bg-secondary/80 transition-colors cursor-help">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Risk Category</span>
                        <span className="text-sm text-medical-elevated">Intermediate-High</span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Patients with 10-20% risk should be evaluated for statin therapy and lifestyle modifications</p>
                  </TooltipContent>
                </Tooltip>

                <div className="p-4 rounded-md bg-secondary/50 border border-border">
                  <h5 className="text-sm font-medium mb-2">Recommended Action</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Consider moderate-to-high intensity statin therapy along with lifestyle modifications including diet, exercise, and smoking cessation. Risk factor optimization can significantly reduce cardiovascular events.
                  </p>
                </div>
              </TooltipProvider>
            </div>
          </div>

          {isElevated && (
            <Button 
              onClick={() => setShowEnrollment(true)}
              className="w-full"
              size="lg"
            >
              <Heart className="h-4 w-4 mr-2" />
              Enroll in Heart Health Program
            </Button>
          )}
        </CardContent>
      </Card>

      <HeartHealthProgramModal 
        open={showEnrollment} 
        onOpenChange={setShowEnrollment}
      />
    </>
  );
};
