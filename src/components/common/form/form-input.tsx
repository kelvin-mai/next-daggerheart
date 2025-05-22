import * as React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const FormInput: React.FC<
  React.ComponentProps<"input"> & { id: string; label?: string }
> = ({ id, label, ...props }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label || <span className="capitalize">{id}</span>}
      </Label>
      <Input id={id} {...props} />
    </div>
  );
};
