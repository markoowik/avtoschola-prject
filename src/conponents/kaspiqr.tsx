import { useState, useEffect } from "react";
import axios from "axios";

interface KaspiPaymentProps {
    orderId: string;
}

export default function KaspiPayment({ orderId }: KaspiPaymentProps) {
    const [status, setStatus] = useState<"pending" | "paid">("pending");
    const [qrCode, setQrCode] = useState("");
    const [loading, setLoading] = useState(false);

    const API_URL = "https://avto-school-backend.onrender.com/api";

    const fetchStatus = async () => {
        try {
            const res = await axios.get(`${API_URL}/payment/status/${orderId}`);
            setStatus(res.data.status);
            setQrCode(res.data.qrCode);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchStatus();
        const interval = setInterval(fetchStatus, 5000);
        return () => clearInterval(interval);
    }, []);

    const handlePaid = async () => {
        setLoading(true);
        try {
            const res = await axios.post("/api/payment/confirm", { orderId });
            setStatus(res.data.order.status);
            alert("Платёж подтверждён!");
        } catch (err) {
            console.error(err);
            alert("Ошибка подтверждения");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: 50 }}>
            <h2>Оплата через Kaspi QR</h2>
            {qrCode && <img src={qrCode} alt="Kaspi QR" style={{ width: 200, margin: "20px 0" }} />}
            <div>
                {status === "paid" ? (
                    <span style={{ color: "green", fontWeight: "bold" }}>Оплачено ✅</span>
                ) : (
                    <button
                        onClick={handlePaid}
                        disabled={loading}
                        style={{ padding: "10px 20px", fontSize: 16 }}
                    >
                        {loading ? "Проверка..." : "Я оплатил"}
                    </button>
                )}
            </div>
        </div>
    );
}
