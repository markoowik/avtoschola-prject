import { useEffect, useState } from "react";

import apiAdmin from "../api/apiAdmin.tsx";

interface Order {
  _id: string;
  status: "pending" | "paid";
  userId: {
    username: string;
    surname: string;
    email: string;
  };
  courseId: {
    title: string;
    price: number;
  };
}

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  // const token = localStorage.getItem("adminToken");
  const API_URL = "https://avto-school-backend.onrender.com/api";
  useEffect(() => {
    let isMounted = true; // флаг для защиты от обновления после размонтирования

    const loadOrders = async () => {
      try {
        const res = await apiAdmin.get(`${API_URL}/orders`);
        if (isMounted) {
          setOrders(res.data);
        }
      } catch (error) {
        console.error("Ошибка загрузки заказов:", error);
      }
    };

    loadOrders();

    return () => {
      isMounted = false; // при размонтировании компонента
    };
  }, []);

  const confirmPay = async (id: string) => {
    try {
      await apiAdmin.patch(`${API_URL}/orders/${id}/pay`);

      // После успешной оплаты обновляем список
      const res = await apiAdmin.get(`${API_URL}/orders`);
      setOrders(res.data);
    } catch (error) {
      console.error("Ошибка подтверждения оплаты:", error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Заявки на курсы</h1>

      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            border: "1px solid #ccc",
            marginBottom: 10,
            padding: 10,
            display: "flex",
            gap: 900,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <div>
            <p>
              Пользователь:{" "}
              <b>
                {order.userId.username} {order.userId.surname}
              </b>
            </p>
            <p>
              Email: <b>{order.userId.email}</b>
            </p>

            <p>
              Курс:{" "}
              <b>
                {order.courseId.title} ({order.courseId.price} ₸)
              </b>
            </p>
          </div>
          <div>
            <p
              style={{
                padding: "6px 12px",
                borderRadius: "12px",
                fontWeight: "bold",

                background:
                  order.status === "pending"
                    ? "rgba(255,165,0,0.15)"
                    : "rgba(0,200,0,0.15)",

                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                color: order.status === "pending" ? "#b26a00" : "#0f7a2f",
                textAlign: "center",
              }}
            >
              {order.status === "pending" ? "⏳ Ожидает" : "✅ Оплачен"}
            </p>

            {order.status === "pending" && (
              <button
                onClick={() => confirmPay(order._id)}
                style={{
                  marginTop: "6px",
                  padding: "6px 10px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#2f80ed",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Подтвердить оплату
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminOrders;
