import AddIcon from "~/_features/layout/navbar/_components/AddButton";
import EditIcon from "~/_features/layout/navbar/_components/EditButton";
import SignOut from "~/_features/layout/navbar/_components/SignOutButton";

const Dev = () => {
  return (
    <div className="h-screen">
      <div className=" flex h-full items-center  justify-center gap-5">
        <AddIcon toolTip="Add" /> <SignOut toolTip="Sign Out" />{" "}
        <EditIcon toolTip="Edit" />
      </div>
    </div>
  );
};

export default Dev;
