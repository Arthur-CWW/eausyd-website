import { useState } from "react";
import {
  HeaderContainer,
  // Heading
} from "../components/Header";
import { UpChevron } from "../components/SVG";

function SingleFaq({ Id = "error", content = "undefined", title = "string" }) {
  const [isOpen, setOpen] = useState(false);
  const bodyId = "accordion-body" + Id;
  const headId = "accordion-head" + Id;

  return (
    <>
      <h2>
        <button
          id={headId}
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left
          border-gray-200  dark:border-gray-700
          hover:bg-blue-100 dark:hover:bg-gray-800
          bg-blue-100 dark:bg-gray-800
          text-blue-600 dark:text-white
          "
          data-accordion-target={"#" + bodyId}
          aria-controls={bodyId}
          aria-expanded={isOpen}
          onClick={() => setOpen(!isOpen)}
        >
          <span>{title}</span>

          <UpChevron
            className={`flex-shrink-0  w-6 h-6 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </h2>
      {isOpen && (
        <div className="" aria-labelledby={headId}>
          <div className="p-5 flex flex-col gap-2 font-light border  border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <div className="flex border-l-2 border-green-400 md:mx-10">
              <p id={bodyId} className=" px-4 text-gray-500 dark:text-gray-300">
                {content}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const FAQ = () => {
  const accordionData = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptate. \n fdsfdkajsfjk`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus lfdsjkfdasklfajklabore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptate. \n fdsfdkajsfjk`,
    },
    {
      title: "Section 3",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptate. \n fdsfdkajsfjk`,
    },
    {
      title: "Section 4",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptate. \n fdsfdkajsfjk`,
    },
    {
      title: "Section 5",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptate. \n fdsfdkajsfjk`,
    },
  ];

  return (
    <HeaderContainer
      heading="FAQ's"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus iste beatae, illum ullam ex."
    >
      <div
        className="dark:bg-gray-800 text-blue-600 dark:text-white
       max-w-prose w-full  px-6 py-10 "
      >
        {accordionData.map((content) => (
          <SingleFaq key={content.title} {...content} />
        ))}
      </div>
    </HeaderContainer>
  );
};

export default FAQ;
