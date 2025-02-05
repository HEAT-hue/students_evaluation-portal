// jshint esversion:6
import { useContext } from "react";
import {
  // SearchBar as SearchBarAdmin,
  StaffListView,
  StudentListView,
} from "../../../../components/admin";
import { UserPreviewModalContext } from "../../../../contexts/admin";
import { UserPreviewModal } from "../../../../components/admin/modals";

function Home() {
  const { showUserPreview, toggleShowUserPreview } = useContext(UserPreviewModalContext);

  return (
    <div className="w-full h-full">

      {/* Display preview if toggled */}
      {showUserPreview.status && (
        <div className="fixed top-[60px] bottom-0 left-0 md:left-[250px] right-0 overflow-y-auto flex justify-center items-center bg-[#00000044]" onClick={() => {
          toggleShowUserPreview({ status: false, id: undefined });
        }}>
          <UserPreviewModal id={showUserPreview.id} />
        </div>
      )}

      <div className="my-16 md:my-20 px-12">
        {/* <div className="w-full flex justify-center my-5">
                <SearchBarAdmin />
            </div> */}

        <div className="w-full mx-auto grid grid-cols-[repeat(auto-fit,_minmax(260px,_350px))] justify-center gap-10">
          <StaffListView />
          <StudentListView />
          <StaffListView />
          <StudentListView />
        </div>
      </div>
    </div>
  );
}

export { Home };
