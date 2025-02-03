import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import AdminLayout from "@/components/AdminLayout/AdminLayout";
import ReservationsManager from "@/components/ReservationsManager/ReservationsManager";

const ReservationsPage = () => {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <ReservationsManager />
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default ReservationsPage;
