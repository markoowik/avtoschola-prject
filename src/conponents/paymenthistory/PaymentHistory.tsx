// const PaymentHistory = ({ payments }) => (
//     <div className="modal">
//         <h3>История платежей</h3>
//         {payments.map(p => (
//             <div key={p._id}>
//                 <span>{new Date(p.createdAt).toLocaleDateString()}</span>
//                 <span>{p.amount} ₸</span>
//                 <span>{p.method}</span>
//             </div>
//         ))}
//     </div>
// );