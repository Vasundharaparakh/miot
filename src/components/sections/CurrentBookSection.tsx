import React from "react";
import SplitColorButton from "../common/SplitColorButton";
import { PlayIcon } from "../common/icons/PlayIcon";
import { Book } from "../sections/LibrarySection";
import { getBookSectionType } from "../../utils/bookUtils";
// No longer importing BookCard as we're using a custom layout for each book

type CurrentBookSectionProps = {
  books: Book[]; // Remains an array of books
  chapter?: number;
  onContinue?: (book: Book) => void; // Passes the specific book being interacted with
};

const CurrentBookSection: React.FC<CurrentBookSectionProps> = ({
  books,
  chapter,
  onContinue,
}) => (
  <section className="py-6 mb-6 px-4">
    <h2 className="text-3xl font-semibold mb-4">
      Chat more with Miotomo {/* Kept the updated title */}
    </h2>
    {/* This is the carousel container */}
    <div className="flex overflow-x-auto gap-4 pb-4">
      {books.map((book) => (
        // Each book item in the carousel
        // className="flex-shrink-0 w-100"
        <div key={book.id}>
          {" "}
          {/* Fixed width and no shrinking for carousel item */}
          <div className="px-4 py-4 border-none rounded-xl bg-[#eeeeee] h-full flex flex-col">
            {" "}
            {/* Added h-full and flex-col for internal layout */}
            <div className="flex items-stretch gap-4">
              <div className="flex-shrink-0 w-1/4" data-id="current-book-cover">
                <div className="h-full w-full bg-gray-200 rounded overflow-hidden">
                  <img
                    src={book.thumbnailUrl}
                    alt={`${book.title} cover`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
              <div
                className="flex flex-col justify-between w-3/4"
                data-id="current-book-info"
              >
                <div>
                  <div className="text-2xl font-bold">{book.title}</div>
                  <div className="text-gray-500">by {book.author}</div>
                </div>
                <div className="text-xl font-bold capitalize">
                  {getBookSectionType(book.section_type)} {chapter}
                </div>

                {/* The SplitColorButton is now inside each book's rendering */}
                {/* The button text should probably reflect the action for each book, not the section title */}
                <SplitColorButton
                  text={
                    book.status === "started"
                      ? "Continue talking"
                      : "Start chatting"
                  } // Example: Adjust text based on book status
                  rightColor="#000"
                  leftColor="#E85C33"
                  split={Math.max(
                    0,
                    ((book.progress - 1) / book.chapters) * 100,
                  )}
                  onClick={() => onContinue && onContinue(book, chapter ?? 1)} // Pass the specific book
                  icon={<PlayIcon />}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CurrentBookSection;
