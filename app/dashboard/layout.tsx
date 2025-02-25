import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1 className="text-3xl">Dashboard</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque omnis
        corrupti earum numquam quis dicta nulla, nemo at in, quos adipisci
        corporis, beatae possimus magni.
      </p>
      {children}
    </div>
  );
};

export default layout;
