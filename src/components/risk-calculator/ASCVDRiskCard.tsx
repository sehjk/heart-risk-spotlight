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

        <CardContent className="space-y-4">
          {/* Prominent Score Display */}
          <div className="bg-gradient-to-br from-medical-elevated/10 to-medical-elevated/5 rounded-lg p-6 border border-medical-elevated/20">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground font-medium">Calculated Risk Score</p>
              <div className="text-5xl font-bold text-medical-elevated">
                {riskScore}%
              </div>
              <Badge variant="outline" className="bg-medical-elevated/10 text-medical-elevated border-medical-elevated/30">
                Elevated Risk
              </Badge>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Instructions</h4>
            <p className="text-sm text-muted-foreground">
              This score was calculated using patient age, sex, race, total cholesterol, 
              HDL cholesterol, systolic blood pressure, and current medications.
            </p>
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

                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-3 rounded-md bg-secondary hover:bg-secondary/80 transition-colors cursor-help">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Recommended Action</span>
                        <span className="text-sm text-primary">Statin + Lifestyle</span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p>Consider moderate-to-high intensity statin therapy along with lifestyle modifications including diet, exercise, and smoking cessation</p>
                  </TooltipContent>
                </Tooltip>
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
