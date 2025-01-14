import { cssMerge } from "@/app/lib/utils";

const Card = ({ className, ref, ...props }) => {
  return (
    <div
      className={cssMerge("border rounded-xl", className)}
      ref={ref}
      {...props}
    />
  );
};

const CardHeader = ({ className, ref, ...props }) => {
  return (
    <div
      className={cssMerge("flex flex-col p-6 pt-0", className)}
      ref={ref}
      {...props}
    />
  );
};

const CardTitle = ({ className, ref, ...props }) => {
  return (
    <div
      className={cssMerge("text-2xl font-semibold", className)}
      ref={ref}
      {...props}
    />
  );
};

const CardDescription = ({ className, ref, ...props }) => {
  return (
    <div className={cssMerge("text-sm", className)} ref={ref} {...props} />
  );
};

const CardContent = ({ className, ref, ...props }) => {
  return (
    <div className={cssMerge("p-6 pt-0", className)} ref={ref} {...props} />
  );
};

const CardFooter = ({ className, ref, ...props }) => {
  return (
    <div
      className={cssMerge("flex items-center", className)}
      ref={ref}
      {...props}
    />
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
