import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2 } from "lucide-react";

interface Recommendation {
  name: string;
  grade: "A" | "B";
  description: string;
  link: string;
}

const recommendations: Recommendation[] = [
  {
    name: "Colorectal Cancer Screening",
    grade: "A",
    description: "Adults aged 50-75 years",
    link: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening"
  },
  {
    name: "Lung Cancer Screening",
    grade: "B",
    description: "Adults aged 50-80 with 20+ pack-year history",
    link: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/lung-cancer-screening"
  },
  {
    name: "Breast Cancer Screening",
    grade: "B",
    description: "Women aged 50-74 years",
    link: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening"
  },
  {
    name: "Diabetes Screening",
    grade: "B",
    description: "Adults aged 35-70 with overweight/obesity",
    link: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/screening-for-prediabetes-and-type-2-diabetes"
  }
];

export const ScreeningRecommendations = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Preventive Screening Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recommendations.map((rec) => (
            <a
              key={rec.name}
              href={rec.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg border bg-card hover:bg-accent/10 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-medical-success shrink-0" />
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {rec.name}
                    </h4>
                    <Badge 
                      variant="outline" 
                      className="bg-medical-success/10 text-medical-success border-medical-success/30 text-xs"
                    >
                      Grade {rec.grade}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground pl-6">{rec.description}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
