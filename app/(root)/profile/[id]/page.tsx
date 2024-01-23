import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";

async function Page({params : {id}} : {params : {id : string}} ) {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(id);

  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <section  >
    </section>
  )
}

export default Page

