import React, { Suspense } from "react";
import getUser from "../../../../lib/getUser";
import getUserPosts from "../../../../lib/getUserPosts";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import getAllUsers from "../../../../lib/getAllUsers";
import NotFound from "./not-found";
 
type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  if (!user) {
    return {
      title: "User not found",
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

const UserPage = async ({ params: { userId } }: Params) => {

  console.log("hello")
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  // const [user , userPosts] = await Promise.all([userData , userPostsData])

  const user = await userData;
  if (!user) {
    return NotFound();
  }
  return (
    <>
      <h2 className="bg-red-400">{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
};

export default UserPage;
// SSG
export const generateStaticParams = async () => {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
};
