import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Clock, HeartPulse, Award, Target } from "lucide-react";

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
    metrics: [
      { label: "BP control days (SBP <130 / DBP <80)", target: "20 days / 30", unit: "days" },
      { label: "Zone 2 cardio time", target: "600 min / month", unit: "value" },
    ],
    behaviors: [
      { label: "Antihypertensive adherence", target: "26 days / 30", unit: "DAYS" },
      { label: "Added salt avoidance (≤2 g/day)", target: "22 days / 30", unit: "DAYS" },
      { label: "Home BP logging (AM/PM)", target: "24 days / 30", unit: "DAYS" },
    ],
    activities: [
      { label: "Long walk ≥30 min", target: "8 days / 30", unit: "DAYS" },
    ],
  };

  const sixMonthTargets = {
    metrics: [
      { label: "BP", target: "<130/80", unit: "mmHg", targetType: "GOAL" },
      { label: "LDL", target: "<100", unit: "mg/dL", targetType: "GOAL" },
      { label: "Weight", target: "-5 to -10", unit: "%", targetType: "GOAL" },
      { label: "ASCVD risk", target: "<7.5", unit: "%", targetType: "TARGET" },
    ],
    behaviors: [
      { label: "BP monitoring", target: "24/30", unit: "days" },
      { label: "Sodium", target: "22/30", unit: "days" },
      { label: "Exercise", target: "600", unit: "min/month" },
      { label: "Med adherence", target: "28/30", unit: "days" },
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
          
          <div className="mt-4 p-4 rounded-xl bg-warm-success/10 border border-warm-success/30">
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-5 w-5 text-warm-success" />
              <h3 className="text-base font-semibold text-warm-success">Graduation Criteria</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              ≥ 80% of readings &lt;130/80 maintained for 3 consecutive months
            </p>
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
                    Metrics
                  </div>
                  <div className="space-y-3">
                    {oneMonthPlan.metrics.map((m, i) => (
                      <div key={i} className="rounded-xl border border-warm-primary/20 bg-warm-primary/5 p-3">
                        <div className="text-sm font-medium">{m.label}</div>
                        <div className="text-xs text-muted-foreground">
                          Target: <span className="font-semibold">{m.target}</span> · {m.unit}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 text-sm font-medium flex items-center gap-2">
                    <div className="w-1 h-4 bg-warm-secondary rounded-full" />
                    Behaviors
                  </div>
                  <div className="space-y-3">
                    {oneMonthPlan.behaviors.map((b, i) => (
                      <div key={i} className="rounded-xl border border-warm-secondary/20 bg-warm-secondary/5 p-3">
                        <div className="text-sm font-medium">{b.label}</div>
                        <div className="text-xs text-muted-foreground">
                          Target: <span className="font-semibold">{b.target}</span> · {b.unit}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-3 text-sm font-medium flex items-center gap-2">
                    <div className="w-1 h-4 bg-warm-accent rounded-full" />
                    Activities
                  </div>
                  <div className="space-y-3">
                    {oneMonthPlan.activities.map((a, i) => (
                      <div key={i} className="rounded-xl border border-warm-accent/20 bg-warm-accent/5 p-3">
                        <div className="text-sm font-medium">{a.label}</div>
                        <div className="text-xs text-muted-foreground">
                          Target: <span className="font-semibold">{a.target}</span> · {a.unit}
                        </div>
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
                <FollowUpItem when="Day 0" role="MD review" items={["Program enrollment", "Baseline assessment", "Medication initiation"]} />
                <FollowUpItem when="Month 1" role="MD review" items={["Progress check", "Medication titration", "Target adjustment"]} />
                <FollowUpItem when="Month 6" role="MD review" items={["Graduation assessment", "Maintenance plan", "Program close"]} />
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

            <Card className="rounded-2xl shadow-sm border-warm-primary/20 bg-warm-primary/5">
              <CardHeader className="pb-2">
                <SectionTitle title="Clinikk Promise" icon={<Target className="h-5 w-5 text-warm-primary" />} />
              </CardHeader>
              <CardContent className="pt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-warm-primary mt-1.5 flex-shrink-0" />
                  <span><span className="font-semibold">Follow-ups</span>: 2</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-warm-primary mt-1.5 flex-shrink-0" />
                  <span><span className="font-semibold">Lifestyle Coaching</span>: 1</span>
                </div>
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
