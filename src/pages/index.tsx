import NewTicketForm from "@/components/NewTicketForm";
import TicketLign from "@/components/TicketLign";
import { TTickets } from "@/types/types";
import useApi from "useapifetcher";
import { useState } from "react";
import { ticketsHandler } from "services/axiosTools";
import { Accordion } from "react-accessible-accordion";
import { useAuth } from "@/context/UserContext";
import Link from "next/link";

type Iprops = {
  tickets: TTickets;
};

export default function Home({ tickets }: Iprops) {
  const [displayForm, setDisplayForm] = useState<Boolean>(false);

  const { data: ticketsList, refetch } = useApi({
    queryFn: () => ticketsHandler.getAll(),
  });

  const { isAuth } = useAuth();
  if (isAuth !== true)
    return (
      <div className="flex justify-center text-gray-300  h-full font-bold text-xl text-center">
        <Link href="/auth/signin">
          Welcome to the wild ticketing tool - Please log In
        </Link>
      </div>
    );
  if (!ticketsList)
    return (
      <div className="text-gray-300  h-full font-bold text-xl text-center">
        <p>Your teacher is a master and have solved all your tickets!</p>
        <div className="w-1/3 flex items-center justify-center m-auto mt-10">
          <button
            onClick={() => setDisplayForm(true)}
            className=" shadow-inner shadow-white text-gray-300 h-12 w-auto p-3 rounded-lg "
          >
            Créer un nouveau ticket
          </button>
        </div>
        <NewTicketForm refetch={refetch} displayForm={displayForm} />
      </div>
    );
  console.log(ticketsList);
  return (
    <>
      <Accordion>
        {ticketsList.map((ticket) => (
          <TicketLign key={ticket.id} ticket={ticket} />
        ))}
      </Accordion>
      <div className="w-1/3 flex items-center justify-center m-auto mt-10">
        <button
          onClick={() => setDisplayForm(true)}
          className=" shadow-inner shadow-white text-gray-300 h-12 w-auto p-3 rounded-lg "
        >
          Créer un nouveau ticket
        </button>
      </div>
      <NewTicketForm refetch={refetch} displayForm={displayForm} />
    </>
  );
}
