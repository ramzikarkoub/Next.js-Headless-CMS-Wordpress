// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { IoCodeSlash } from "react-icons/io5";
// import Link from "next/link";
// import Button from "./Button";
// import { useRouter } from "next/router";

// const navigation = [
//   { name: "Projects", href: "/projects", current: true, target: false },
//   {
//     name: "Personal Website",
//     href: "https://www.ramzikarkoub.com/",
//     current: false,
//     target: true,
//   },
//   { name: "LinkedIn", href: "#", current: false, target: true },
//   { name: "Github", href: "#", current: false, target: true },
// ];

// const darSelectedButton =
//   "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";
// const GreenButton =
//   "bg-green-900 text-white rounded-md px-3 py-2 text-sm font-medium";
// const hoverLightGray =
//   "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Header() {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   <Link href="/">
//                     <IoCodeSlash size={40} color="aliceblue" />
//                   </Link>
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => (
//                       <Button
//                         key={item.name}
//                         href={item.href}
//                         name={item.name}
//                         target={item.current == true ? null : "_blank"}
//                         active={router.pathname === `/${item.href}`}
//                         className={classNames(
//                           Active ? darSelectedButton : hoverLightGray
//                         )}
//                         // aria-current={item.current ? "page" : undefined}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 <Button
//                   href="/contact"
//                   name="contact"
//                   target=""
//                   padding="px-10"
//                   className="text-white bg-green-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
//                   aria-current="page"
//                 />
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current
//                       ? "bg-gray-900 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                     "block rounded-md px-3 py-2 text-base font-medium"
//                   )}
//                   aria-current={item.current ? "page" : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoCodeSlash } from "react-icons/io5";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";

const navigation = [
  { name: "Projects", href: "/projects", external: false },
  {
    name: "Personal Website",
    href: "https://www.ramzikarkoub.com/",
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ramzikarkoub/",
    external: true,
  },
  { name: "Github", href: "https://github.com/ramzikarkoub", external: true },
];

const darSelectedButton =
  "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium";
const hoverLightGray =
  "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <IoCodeSlash size={40} color="aliceblue" />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Button
                        key={item.name}
                        href={item.href}
                        name={item.name}
                        padding=""
                        target={item.external ? "_blank" : ""}
                        className={classNames(
                          router.pathname === item.href
                            ? darSelectedButton
                            : hoverLightGray
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Button
                  href="/contact"
                  name="contact"
                  target=""
                  padding="px-10"
                  className={classNames(
                    router.pathname === "/contact"
                      ? darSelectedButton + " hover:bg-gray-700"
                      : "text-white bg-green-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  )}
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className={classNames(
                    router.pathname === item.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
