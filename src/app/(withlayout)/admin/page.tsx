import { getUserInfo } from "@/services/auth.service";

const AdminPage = () => {
  const { userId, role } = getUserInfo() as any;
  console.log(userId, role);
  return (
    <div>
      <h1>
        This is admin page:{userId},{role}
      </h1>
    </div>
  );
};

export default AdminPage;
