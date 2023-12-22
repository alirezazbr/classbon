import { ReactNode } from "react";

const StudentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <aside className="bg-gray-300 w-80 flex justify-center items-center">
        side menu
      </aside>
      <main>{children}</main>
    </>
  );
};

export default StudentLayout;
