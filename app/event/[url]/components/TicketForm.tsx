'use client';

import React, { type FormEvent } from 'react';

import Button from '@components/Button/Button';
import Loader from '@components/Loader/Loader';

interface IData {
  id: number;
  name: string;
  price: string;
  ordering: number;
  soldout?: boolean;
  quantity?: number;
  information?: string;
}

interface IProps {
  data: IData[];
}

const TicketForm = ({ data }: IProps): React.JSX.Element => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [formValues, setFormValues] = React.useState<IData[]>(data);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleDecrease = (ticket: IData): void => {
    const tickets: IData[] = formValues.filter((e: IData) => e.id !== ticket.id);

    let newTicket: IData;

    if (ticket?.quantity == null || isNaN(ticket.quantity)) {
      newTicket = { ...ticket, quantity: 0 };
    } else {
      if (ticket.quantity > 0) {
        const newQuantity: number = (ticket.quantity -= 1);

        newTicket = { ...ticket, quantity: newQuantity };
      } else {
        newTicket = { ...ticket, quantity: 0 };
      }
    }

    tickets.push(newTicket);

    setFormValues(orderArray(tickets));
  };

  const handleIncrease = (ticket: IData): void => {
    const tickets: IData[] = formValues.filter((e: IData) => e.id !== ticket.id);

    let newTicket: IData;

    if (ticket?.quantity == null || isNaN(ticket.quantity)) {
      newTicket = { ...ticket, quantity: 1 };
    } else {
      if (ticket.quantity < 9) {
        const newQuantity: number = (ticket.quantity += 1);

        newTicket = { ...ticket, quantity: newQuantity };
      } else {
        newTicket = { ...ticket, quantity: 9 };
      }
    }

    tickets.push(newTicket);

    setFormValues(orderArray(tickets));
  };

  const orderArray = (array: IData[]): IData[] => {
    return array.sort((a, b) => {
      return a.ordering - b.ordering;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();

    const quantity = formValues.reduce((sum, curr) => {
      let q = 0;

      if (curr.quantity != null) {
        q = sum + curr.quantity;
      }

      return q;
    }, 0);

    if (quantity > 0) {
      setLoading(true);

      document.location = '/buy';
    }
  };

  if (loading) {
    return <Loader type='inline' color='gray' text='Hang on a second' />;
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        void handleSubmit(e);
      }}
    >
      <div className='ticket-box-content'>
        {formValues?.map((ticket) => (
          <div key={ticket.id} className='ticket-box-line'>
            {ticket.soldout === true ? (
              <>
                <span className='material-symbols-outlined'>lock</span>
                <span>{ticket.name}</span>
                <strong>Sold out</strong>
                {ticket.information != null && (
                  <span className='material-symbols-outlined icon' title={ticket.information}>
                    info
                  </span>
                )}
              </>
            ) : (
              <>
                <div className='quantity'>
                  <button
                    type='button'
                    onClick={() => {
                      handleDecrease(ticket);
                    }}
                  >
                    -
                  </button>
                  <input
                    type='text'
                    name={`t-${ticket.id}`}
                    value={ticket.quantity ?? 0}
                    onChange={() => {}}
                  />
                  <button
                    type='button'
                    onClick={() => {
                      handleIncrease(ticket);
                    }}
                  >
                    +
                  </button>
                </div>
                <span>{ticket.name}</span>
                <strong>{ticket.price}</strong>
                {ticket.information != null && (
                  <span className='material-symbols-outlined icon' title={ticket.information}>
                    info
                  </span>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <div className='ticket-box-buttons'>
        {formValues.length > 0 ? (
          <Button type='submit' color='blue-filled' text='Buy tickets' rightIcon='arrow_forward' />
        ) : (
          <Button type='submit' color='disabled' text='Tickets not found' />
        )}
      </div>
    </form>
  );
};

export default TicketForm;
