import { CheckCircledIcon } from "@radix-ui/react-icons";

type FormSucessProps = {
  message?: string;
};

export const FormSucess = ({ message }: FormSucessProps) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15 rounded-md p-3 flex items-center gap-2 text-sm text-emerald-500">
      <CheckCircledIcon className="w-5 h-5" />
      <p>{message}</p>
    </div>
  );
};
