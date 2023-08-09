import React from "react";
import { Metadata } from "next";
import getAllUsers from "../../../lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

const UsersPage = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  const content = (
    <section>
      <h2>
        <Link className="bg-green-600 shadow-inner p-1" href="/">
          Back to Home
        </Link>
      </h2>
      <br />
      <h2 className="font-bold text-center text-3xl bg-blue-300">Users List</h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p className="bg-yellow-400 m-1 text-center" key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
};

export default UsersPage;
