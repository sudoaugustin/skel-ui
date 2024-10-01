import { useEffect, useState } from "react";

type User = {
  age: number;
  name: string;
  email: string;
};

export default function useUsers() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setUsers(data);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return { users, isLoading: !users };
}

const data = [
  {
    name: "Alice Johnson",
    age: 29,
    email: "alice.johnson@example.com",
  },
  {
    name: "Bob Smith",
    age: 34,
    email: "bob.smith@example.com",
  },
  {
    name: "Catherine Lee",
    age: 22,
    email: "catherine.lee@example.com",
  },
  {
    name: "David Brown",
    age: 40,
    email: "david.brown@example.com",
  },
  {
    name: "Emily Davis",
    age: 27,
    email: "emily.davis@example.com",
  },
  {
    name: "Mary Stella",
    age: 27,
    email: "mary.stella@example.com",
  },
];
