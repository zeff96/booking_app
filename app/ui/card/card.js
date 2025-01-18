import { cssMerge } from "@/app/lib/utils";

const Card = ({ className, children, ...props }) => {
  return (
    <div className={cssMerge("border rounded-xl", className)} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ className, children, ...props }) => {
  return (
    <div className={cssMerge("flex flex-col p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({ className, children, ...props }) => {
  return (
    <div className={cssMerge("text-2xl font-semibold", className)} {...props}>
      {children}
    </div>
  );
};

const CardDescription = ({ className, children, ...props }) => {
  return (
    <div className={cssMerge("text-sm", className)} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={cssMerge("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
};

const CardFooter = ({ className, children, ...props }) => {
  return (
    <div className={cssMerge("flex items-center", className)} {...props}>
      {children}
    </div>
  );
};

export {
  CardDescription,
  CardHeader,
  CardFooter,
  Card,
  CardTitle,
  CardContent,
};
