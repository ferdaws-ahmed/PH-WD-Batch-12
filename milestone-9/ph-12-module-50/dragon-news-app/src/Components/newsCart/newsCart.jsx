import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { author, title, image_url, details, rating, total_view } = news;

  const formattedDate = new Date(author.published_date).toISOString().split("T")[0];

  return (
    <div className="card bg-base-100 shadow-sm border rounded-xl mb-6 max-w-2xl mx-auto">
      {/* Author Section */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">
              {author.name}
            </h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-orange-500 transition" />
          <FaShareAlt className="cursor-pointer hover:text-orange-500 transition" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 mt-3">
        <h2 className="text-lg font-bold text-gray-900 leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 py-3">
        <img
          src={image_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 text-sm text-gray-600">
        {details.length > 250 ? (
          <>
            {details.slice(0, 250)}...
            <span className="text-orange-500 font-semibold cursor-pointer">
              {" "}
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t mt-4 px-4 py-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500 text-sm">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-orange-500" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-700 ml-1">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

