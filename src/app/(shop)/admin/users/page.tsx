// https://tailwindcomponents.com/component/hoverable-table
import { redirect } from "next/navigation";
import { getPaginatedOrders } from "@/actions";
import { Title } from "@/components";
import { UsersTable } from "./ui/UsersTable";


export default async function UsersPage() {
  const { ok, orders = [] } = await getPaginatedOrders();

  if (!ok) {
    redirect("/auth/login");
  }
  

  return (
    <>
      <Title title="Mantenimiento de usuarios" />

      <div className="mb-10">
       <UsersTable users={ [] }  />
      </div>
    </>
  );
}
