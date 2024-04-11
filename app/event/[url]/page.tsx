import React from 'react';

import Link from 'next/link';

import Master from '@components/Layout/Master';
import Button from '@components/Button/Button';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';
import CardGroup from '@components/Card/CardGroup';

const Page = (): React.JSX.Element => (
  <Master>
    <div className='blur-cover'>
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
        className='event-cover cover-image flex flex-v-center flex-h-center'
      />
      <div className='cover-info'>
        <div
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
          className='cover-image image'
        />
        <Heading type={1} color='white' text='Event name goes here' />
        <Heading type={5} color='white' text='Tue, Sep 21, 2024 19:00' />
        <Heading type={6} color='white' text='Royal Albert Hall' />
      </div>
    </div>
    <Section className='white-background'>
      <div className='container'>
        <div className='event-details'>
          <div>
            <Heading type={4} color='gray' text='Event details' />
            <div className='paragraph-container gray'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>
          <div>
            <div className='ticket-box'>
              <div className='ticket-box-header'>
                <Heading type={5} color='gray' text='Tickets' />
              </div>
              <form method='POST' action='/buy' noValidate>
                <div className='ticket-box-content'>
                  <div className='ticket-box-line'>
                    <div className='quantity'>
                      <button type='button'>-</button>
                      <input type='text' name='q1' defaultValue='1' />
                      <button type='button'>+</button>
                    </div>
                    <span>Family</span>
                    <strong>£20</strong>
                  </div>
                  <div className='ticket-box-line'>
                    <div className='quantity'>
                      <button type='button'>-</button>
                      <input type='text' name='q2' defaultValue='1' />
                      <button type='button'>+</button>
                    </div>
                    <span>Adult</span>
                    <strong>£20</strong>
                  </div>
                  <div className='ticket-box-line'>
                    <div className='quantity'>
                      <button type='button'>-</button>
                      <input type='text' name='q3' defaultValue='1' />
                      <button type='button'>+</button>
                    </div>
                    <span>Child</span>
                    <strong>£20</strong>
                    <span
                      className='material-symbols-outlined icon'
                      title='Information about child tickets'
                    >
                      info
                    </span>
                  </div>
                </div>
                <div className='ticket-box-buttons'>
                  <Button
                    type='submit'
                    color='blue-filled'
                    text='Buy tickets'
                    rightIcon='arrow_forward'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section className='white-background'>
      <div className='container'>
        <Heading type={4} color='gray' text='Royal Albert Hall' />

        <Heading type={6} color='gray' text='Address' />
        <div className='paragraph-container'>
          <p className='gray'>Lorem ipsum dolor sit amet consecteteur adispicing elit.</p>
        </div>
        <Heading type={6} color='gray' text='How to get there?' />
        <div className='paragraph-container'>
          <p className='gray'>Lorem ipsum dolor sit amet consecteteur adispicing elit.</p>
          <p>
            <Link href='/venue/1' className='blue'>
              Venue details
            </Link>{' '}
            &bull;{' '}
            <a target='_blank' href='/' className='blue'>
              Get directions
            </a>
          </p>
        </div>
      </div>
    </Section>

    <CardGroup url='list' title='Other events' color='orange' background='gray'>
      <EventCard
        url='1'
        from='20'
        color='orange'
        when='Tue, Sep 21, 2024 19:00'
        name='Event name goes here'
        venue='Royal Albert Hall'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='25'
        color='orange'
        when='Wed, Aug 9, 2024 22:00'
        name='Event name goes here'
        venue='o2 Arena'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='10'
        color='orange'
        when='Sun, Mar 14, 2024 15:00'
        name='Event name goes here'
        venue='Wembley Stadium'
        image='https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='60'
        color='orange'
        when='Mon, Jul 2, 2024 20:00'
        name='Event name goes here'
        venue='Eventim Apollo'
        image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='20'
        color='orange'
        when='Tue, Sep 21, 2024 19:00'
        name='Event name goes here'
        venue='Royal Albert Hall'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='25'
        color='orange'
        when='Wed, Aug 9, 2024 22:00'
        name='Event name goes here'
        venue='o2 Arena'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
    </CardGroup>
  </Master>
);

const title = 'Event name goes here';
const canonical = 'https://modern-ticketing.com/event/1';
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
