interface Photo {
  price: number;
  image: string;
}

export default function Product() {
  const photos: Photo[] = [
    {
      price: 18,
      image: "https://github.com/shadcn.png",
    },
    {
      price: 12,
      image: "https://github.com/shadcn.png",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold">Products</h2>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            {/* Add refresh icon path */}
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative">
            <img
              src={photo.image}
              alt={`Product ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg"
            />
            <span className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium">
              ${photo.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
