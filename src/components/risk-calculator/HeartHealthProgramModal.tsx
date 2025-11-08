import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface HeartHealthProgramModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const HeartHealthProgramModal = ({ open, onOpenChange }: HeartHealthProgramModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Heart Health Program</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 text-center text-muted-foreground">
          <p>Enrollment UI will be shown here (to be designed next)</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
