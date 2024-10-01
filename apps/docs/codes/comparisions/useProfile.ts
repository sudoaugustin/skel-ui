// import { useEffect, useState } from "react";

// type User = {
//   age: number;
//   avatar: string;
// };

// export default function useProfile() {
//   const [user, setUser] = useState<User>();

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setUser({
//         age: 20,
//         avatar:
//           "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       });
//     }, 5000);

//     return () => {
//       clearTimeout(timeout);
//     };
//   }, []);

//   return { user, isLoading: !user };
// }
