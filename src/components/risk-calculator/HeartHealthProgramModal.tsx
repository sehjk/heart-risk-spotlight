import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Clock, HeartPulse } from "lucide-react";

interface HeartHealthProgramModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SectionTitle = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    {icon}
    <h3 className="text-base font-semibold">{title}</h3>
  </div>
);

const FollowUpItem = ({ when, role, items }: { when: string; role: string; items: string[] }) => (
  <div className="relative pl-6 pb-4 border-l-2 border-warm-secondary/30 last:border-transparent last:pb-0">
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-warm-secondary border-2 border-background" />
    <div className="text-sm font-medium text-warm-secondary">{when}</div>
    <div className="text-xs text-muted-foreground mb-1">{role}</div>
    <ul className="text-xs space-y-0.5">
      {items.map((item, i) => (
        <li key={i} className="text-muted-foreground">• {item}</li>
      ))}
    </ul>
  </div>
);

export const HeartHealthProgramModal = ({ open, onOpenChange }: HeartHealthProgramModalProps) => {
  const oneMonthPlan = {
    behaviors: [
      { label: "Home blood pressure monitoring", target: "2×", unit: "daily", days: "DAILY" },
      { label: "Sodium intake", target: "<2000", unit: "mg", days: "DAILY" },
      { label: "Medication adherence", target: "100%", unit: "doses", days: "DAILY" },
    ],
    activities: [
      { label: "Aerobic exercise (Zone 2)", target: "30", unit: "min", days: "5×/WEEK" },
      { label: "Strength training", target: "20", unit: "min", days: "2×/WEEK" },
      { label: "Mindfulness/stress reduction", target: "10", unit: "min", days: "DAILY" },
    ],
  };

  const sixMonthTargets = {
    metrics: [
      { label: "BP", target: "<130/80", unit: "mmHg", targetType: "GOAL" },
      { label: "LDL", target: "<100", unit: "mg/dL", targetType: "GOAL" },
      { label: "Weight", target: "-5 to -10", unit: "%", targetType: "GOAL" },
      { label: "ASCVD risk", target: "<10", unit: "%", targetType: "TARGET" },
    ],
    behaviors: [
      { label: "BP monitoring", target: "1×", unit: "daily" },
      { label: "Sodium", target: "<2000", unit: "mg/day" },
      { label: "Exercise", target: "150", unit: "min/week" },
      { label: "Med adherence", target: "≥95%", unit: "" },
    ],
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-warm-primary/20 to-warm-accent/20">
              <Heart className="h-6 w-6 text-warm-primary" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-semibold">Heart Health Program</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">Personalized cardiovascular wellness plan</p>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* Left: 1-month plan */}
          <div className="space-y-6">
            <Card className="rounded-2xl shadow-sm border-warm-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Your 1-Month Plan</h3>
                  <div className="px-3 py-1 rounded-full bg-warm-primary/10 text-warm-primary text-xs font-medium">
                    Month 1
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="mb-3 text-sm font-medium flex items-center gap-2">
                    <div className="w-1 h-4 bg-warm-primary rounded-full" />
                    Behaviors
                  </div>
                  <div className="space-y-3">
                    {oneMonthPlan.behaviors.map((b, i) => (
                      <div key={i} className="rounded-xl border border-warm-primary/20 bg-warm-primary/5 p-3 flex items-center justify-between gap-3">
                        <div className="flex-1">
                          <div className="text-sm font-medium">{b.label}</div>
                          <div className="text-xs text-muted-foreground">
                            Target: <span className="font-semibold">{b.target}</span> {b.unit} · {b.days}
                          </div>
                        </div>
                        <Progress value={0} className="w-32" />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 text-sm font-medium flex items-center gap-2">
                    <div className="w-1 h-4 bg-warm-secondary rounded-full" />
                    Activities
                  </div>
                  <div className="space-y-3">
                    {oneMonthPlan.activities.map((a, i) => (
                      <div key={i} className="rounded-xl border border-warm-secondary/20 bg-warm-secondary/5 p-3 flex items-center justify-between gap-3">
                        <div className="flex-1">
                          <div className="text-sm font-medium">{a.label}</div>
                          <div className="text-xs text-muted-foreground">
                            Target: <span className="font-semibold">{a.target}</span> {a.unit} · {a.days}
                          </div>
                        </div>
                        <Progress value={0} className="w-32" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="secondary" className="rounded-2xl flex-1">Edit plan</Button>
                  <Button className="rounded-2xl flex-1 bg-warm-primary hover:bg-warm-primary/90">Enroll now</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Follow-up & Long-horizon targets */}
          <div className="space-y-6">
            <Card className="rounded-2xl shadow-sm border-warm-secondary/20">
              <CardHeader className="pb-2">
                <SectionTitle title="Follow-up schedule (through 6 months)" icon={<Clock className="h-5 w-5 text-warm-secondary" />} />
              </CardHeader>
              <CardContent className="pt-4 space-y-0">
                <FollowUpItem when="Day 2" role="RN call" items={["BP technique check", "Side-effects screen", "Salt diary start"]} />
                <FollowUpItem when="Week 2" role="Coach" items={["Activity ramp: 3×30 min Zone 2", "Meal sodium audit"]} />
                <FollowUpItem when="Week 4" role="MD review" items={["Titrate meds if BP ≥130/80", "Order K+/Cr if on ACEI/diuretic"]} />
                <FollowUpItem when="Month 3" role="MD review" items={["Assess graduation criteria", "ASCVD risk update"]} />
                <FollowUpItem when="Month 6" role="MD review" items={["Maintenance plan or program close", "Refill sync"]} />
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm border-warm-accent/20">
              <CardHeader className="pb-2">
                <SectionTitle title="6-month targets" icon={<HeartPulse className="h-5 w-5 text-warm-accent" />} />
              </CardHeader>
              <CardContent className="pt-4 space-y-3 text-sm">
                <div className="font-medium">Metrics</div>
                <ul className="space-y-1.5">
                  {sixMonthTargets.metrics.map((m, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-warm-accent mt-1.5 flex-shrink-0" />
                      <span><span className="font-semibold">{m.label}</span>: {m.target} {m.unit} <span className="uppercase text-xs text-muted-foreground ml-1">{m.targetType}</span></span>
                    </li>
                  ))}
                </ul>
                <div className="font-medium mt-4">Behaviors</div>
                <ul className="space-y-1.5">
                  {sixMonthTargets.behaviors.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-warm-success mt-1.5 flex-shrink-0" />
                      <span><span className="font-semibold">{b.label}</span>: {b.target} {b.unit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 border-t pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-xs text-muted-foreground">This care plan will print at the end of the prescription. It summarizes enrollment, targets, and follow-ups.</div>
          <div className="flex gap-2">
            <Button variant="secondary" className="rounded-2xl">Discard</Button>
            <Button className="rounded-2xl bg-warm-primary hover:bg-warm-primary/90">Save to EHR & Print</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
