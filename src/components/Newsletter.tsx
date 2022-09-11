import { ButtonNews } from "./Button";
import Link from "next/link";
import { FormEventHandler, useState, react } from "react";
import { z } from "zod";
// export const Newsletter = ({ buttonClassName = "" }) => (
//   <section className="bg-white dark:bg-gray-900">
//     <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
//       <h2 className="text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
//         Join us and get the update from anywhere
//       </h2>
//       <div className="mt-8 lg:mt-0">
//         <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
//           <input
//             id="email"
//             type="text"
//             className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
//             placeholder="Email Address"
//           />
//           {ButtonNews(buttonClassName)}
//         </div>
//         <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
//           Attention! Offer expires in 30 days. Make sure not to miss this
//           opportunity
//         </p>
//       </div>
//     </div>
//   </section>
// );

export const Newsletter: React.FC = () => {
  // const handleSubmit: FormEventHandler<HTMLInputElement> = (
  //   e: React.FormEvent<HTMLFormElement>
  // ) => {
  //   e.preventDefault();
  //   console.log("You clicked submit.");
  // };
  const [values, setValues] = useState("");

  return (
    <section className="container flex flex-col max-w-2xl  mx-auto justify-center items-center  rounded-lg shadow-lg dark:bg-gray-800  md:h-48 w-9/12 bg-white  p-6 ">
      <h2 className="text-4xl font-bold text-gray-700 dark:text-white p-6 ">
        Sign Up For
      </h2>
      <form
        className="flex items-center justify-center  "
        onSubmit={useSubmit(values)}
      >
        <div className="flex border rounded-lg dark:border-gray-600  ">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500  outline-none dark:bg-gray-800 dark:placeholder-gray-400 "
            type="text"
            name="email"
            onChange={(e) => setValues(e.target.value)}
            placeholder="Enter your email"
            aria-label="Enter your email"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 text-sm rounded-r-lg font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700  hover:bg-gray-600 "
          >
            subscribe
          </button>
        </div>
      </form>
    </section>
  );
};
function useSubmit(
  values: string
): FormEventHandler<HTMLFormElement> | undefined {
  return (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(values);
    if (z.string().email(values)) {
    }
  };
}
