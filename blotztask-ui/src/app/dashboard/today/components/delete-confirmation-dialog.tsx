import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { boolean } from 'zod';

export function DeleteDialog({ 
  isDialogOpen, 
  setDialogOpen, 
  onClose,
}: {
  isDialogOpen: boolean;
  setDialogOpen: (isOpen: boolean) => void;
  onClose: () => void;
}) {
  
  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-[370px] bg-white">
        <DialogHeader>
          <DialogDescription>Are you sure you want to delete the Task?</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-between">
          <Button
            variant="outline"
            className="w-full focus:outline-none focus:ring-0 focus:border-black-500"
            onClick={() => {
              setDialogOpen(false);
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button
            className="ml-2 w-full py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
            onClick={() => {
              console.log("Task deleted");
              setDialogOpen(false);
              onClose();
            }}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
