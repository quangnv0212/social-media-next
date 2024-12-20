interface Story {
  id: number;
  avatar: string;
  isAdd?: boolean;
}
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function Stories() {
  const stories: Story[] = [
    { id: 1, isAdd: true, avatar: "" }, // Story để thêm mới
    { id: 2, avatar: "https://github.com/shadcn.png" },
    { id: 3, avatar: "https://github.com/shadcn.png" },
    { id: 4, avatar: "https://github.com/shadcn.png" },
    { id: 5, avatar: "https://github.com/shadcn.png" },
    { id: 6, avatar: "https://github.com/shadcn.png" },
    { id: 7, avatar: "https://github.com/shadcn.png" },
    { id: 8, avatar: "https://github.com/shadcn.png" },
    { id: 9, avatar: "https://github.com/shadcn.png" },
    { id: 10, avatar: "https://github.com/shadcn.png" },
  ];

  return (
    <div className="bg-white rounded-lg p-4 mb-4">
      <p className="font-semibold mb-4">Stories</p>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {stories.map((story) => (
          <div key={story.id} className="flex-shrink-0">
            {story.isAdd ? (
              <button className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            ) : (
              <button className="w-16 h-16 rounded-full ring-2 ring-blue-500 p-0.5">
                <img
                  src={story.avatar}
                  alt="Story avatar"
                  className="w-full h-full rounded-full object-cover"
                />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
