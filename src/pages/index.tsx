import { TTickets } from "@/types/types";
import { useEffect, useState } from "react";
import axiosInstance from "services/axiosInstance";

type Iprops = {
  tickets: TTickets;
};

export default function Home({ tickets }: Iprops) {
  const [ticketList, setTicketList] = useState<TTickets[]>([]);
  useEffect(() => {
    axiosInstance.get("/tickets").then((data) => setTicketList(data.data));
  }, []);
  console.log(ticketList);
  return (
    <>
      {ticketList.map((ticket) => (
        <p className="text-white font-bold" key={ticket.id}>
          {ticket.title}
        </p>
      ))}
    </>
  );
}

// export const getServerSideProps = async () => {
//   try {
//     const tickets = await axiosInstance.get("/tickets");
//     if (tickets.data) {
//       console.log(tickets);
//       return {
//         props: {
//           tickets: tickets.data,
//         },
//       };
//     }
//   } catch (error) {
//     return { notFound: true };
//   }
// };
