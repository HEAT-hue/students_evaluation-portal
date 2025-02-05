// jshint esversion:6
import avatar from "../../../assets/admin/avatar.jpg";
import { useContext } from "react";
import { UserPreviewModalContext } from "../../../contexts/admin";

interface ListItemProps {
  id: number;
  name: string;
  position?: string;
  classDesignation?: string;
  img: string;
}

function ListItem({
  id,
  name,
  position,
  classDesignation,
  img,
}: ListItemProps) {
  const { showUserPreview, toggleShowUserPreview } = useContext(
    UserPreviewModalContext
  );

  return (
    <div
      onClick={() => {
        toggleShowUserPreview({ status: true, id });
      }}
    >
      <div className="px-3 cursor-pointer hover:border hover:border-violet-500">
        <div className="py-3 flex items-center gap-3 border-b border-b-[#bbbbe7] hover:border-none">
          <div className="w-[45px] h-[45px] rounded-md overflow-hidden">
            <img className="w-full h-full" src={img} alt="avatar" />
          </div>
          <div className="basis-full flex justify-between items-center">
            <span className="font-normal text-[#474761b6] text-sm font-mono">
              {name}
            </span>
            {position && (
              <span className="font-bold text-sm text-gray-500">
                {position}
              </span>
            )}
            {classDesignation && (
              <span className="font-bold text-sm text-gray-500">
                {classDesignation}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { ListItem };
