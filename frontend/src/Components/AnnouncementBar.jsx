import { Clock4, Van, Aperture } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="text-sm py-2 border-b text-gray-500">
      <div className="max-w-7xl mx-auto flex justify-between px-6">
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1">
            <Van className="w-4 h-4" /> Free Delivery
          </p>
          <p className="flex items-center gap-1">
            <Clock4 className="w-4 h-4" />
            Pickup in one hour
          </p>
          <p className="flex items-center gap-1">
            <Aperture className="w-4 h-4" />
            Technical Support
          </p>
        </div>
        <p>📞 +91 98765 43210</p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
