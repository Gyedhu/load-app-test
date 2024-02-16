import AddIcon from "~/_features/layout/navbar/_components/AddButton";
import DataTable from "~/_features/layout/navbar/_components/DataTable";
import EditIcon from "~/_features/layout/navbar/_components/EditButton";
import SignOut from "~/_features/layout/navbar/_components/SignOutButton";

const Dev = () => {
  return (
    <div className="h-screen">
      <div className=" flex h-full items-center  justify-center gap-5">
        <DataTable />
      </div>
    </div>
  );
};

export default Dev;
