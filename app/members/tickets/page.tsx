import Link from 'next/link';

import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonGroup from '@components/Button/ButtonGroup';
import ButtonGroupItem from '@components/Button/ButtonGroupItem';

const Page = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='My tickets' />
          <p className='gray'>
            Before you can sign in, you must activate your account with the code sent to your email
            address. If you do not see the email in a few minutes, check your junk mail or spam
            folder.
          </p>
          <div className='button-container'>
            <ButtonGroup color='gray'>
              <ButtonGroupItem url='members/tickets' text='My tickets' active />
              <ButtonGroupItem url='members/account' text='My account' />
            </ButtonGroup>
          </div>
        </div>
      </div>
    </Section>
    <Section className='white-background'>
      <div className='container'>
        <div className='ticket-column'>
          <div>
            <h6>Event name goes here</h6>
            <p>
              <span className='material-symbols-outlined'>local_activity</span>
              <strong>x2</strong> Tickets in bundle
            </p>
            <p>
              <span className='material-symbols-outlined'>event</span>
              Tue, Sep 21, 2024 19:00
            </p>
            <p>
              <span className='material-symbols-outlined'>apartment</span>
              <Link href='/venue/1' className='blue'>
                Royal Albert Hall
              </Link>
            </p>
            <p>
              <span className='material-symbols-outlined'>receipt_long</span>
              <strong>Purchased at</strong> Wed, Aug 11, 2024 14:30
            </p>
          </div>
          <div className='actions'>
            <Link href='/members/tickets' title='Download tickets'>
              <span className='material-symbols-outlined'>download</span>
            </Link>
            <Link href='/members/tickets' title='Send tickets'>
              <span className='material-symbols-outlined'>forward_to_inbox</span>
            </Link>
          </div>
        </div>

        <div className='ticket-column'>
          <div>
            <h6>Event name goes here</h6>
            <p>
              <span className='material-symbols-outlined'>local_activity</span>
              <strong>x1</strong> Ticket in bundle
            </p>
            <p>
              <span className='material-symbols-outlined'>event</span>
              Tue, Sep 21, 2024 19:00
            </p>
            <p>
              <span className='material-symbols-outlined'>apartment</span>
              <Link href='/venue/1' className='blue'>
                Royal Albert Hall
              </Link>
            </p>
            <p>
              <span className='material-symbols-outlined'>receipt_long</span>
              <strong>Purchased at</strong> Wed, Aug 11, 2024 14:30
            </p>
          </div>
          <div className='actions'>
            <Link href='/members/tickets' title='Download tickets'>
              <span className='material-symbols-outlined'>download</span>
            </Link>
            <Link href='/members/tickets' title='Send tickets'>
              <span className='material-symbols-outlined'>forward_to_inbox</span>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'My tickets';
const canonical = 'https://modern-ticketing.com/members/tickets';
const description = 'Modern ticketing is a modern ticketing solution';

export const metadata = {
  title,
  description,
  keywords: 'modern ticketing',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'Modern Ticketing',
    images: 'https://modern-ticketing.com/logo192.png',
  },
};

export default Page;
