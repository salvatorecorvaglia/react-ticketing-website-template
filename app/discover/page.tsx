import Input from '@components/Form/Input';
import Slider from '@components/Slider/Slider';
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import EventCard from '@components/Card/EventCard';
import CardGroup from '@components/Card/CardGroup';
import ButtonCircle from '@components/Button/ButtonCircle';

const Page = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Discover' />
          <p className='gray'>Discover, search and filter best events in London.</p>
        </div>
      </div>

      <div className='center'>
        <div className='container'>
          <div className='top-search'>
            <form noValidate>
              <div className='search-inputs flex flex-h-center flex-space-between'>
                <Input
                  type='text'
                  name='keyword'
                  value=''
                  maxLength={10}
                  placeholder='Event, venue, artist, keyword'
                  required
                />
                <button type='submit'>
                  <i className='material-symbols-outlined'>search</i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='circle-buttons'>
          <Slider>
            <ButtonCircle icon='theater_comedy' text='Theater' />
            <ButtonCircle icon='stadium' text='Concert' />
            <ButtonCircle icon='child_care' text='Kids' />
            <ButtonCircle icon='sports_football' text='Sports' />
            <ButtonCircle icon='attractions' text='Attractions' />
            <ButtonCircle icon='piano' text='Musical' />
            <ButtonCircle icon='festival' text='Festival' />
          </Slider>
        </div>
      </div>
    </Section>

    <CardGroup url='discover' title='Latest events' color='blue' background='gray'>
      <EventCard
        url='1'
        from='20'
        color='blue'
        when='Tue, Sep 21, 2024 19:00'
        name='Event name goes here'
        venue='Royal Albert Hall'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='25'
        color='blue'
        when='Wed, Aug 9, 2024 22:00'
        name='Event name goes here'
        venue='o2 Arena'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='10'
        color='blue'
        when='Sun, Mar 14, 2024 15:00'
        name='Event name goes here'
        venue='Wembley Stadium'
        image='https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='60'
        color='blue'
        when='Mon, Jul 2, 2024 20:00'
        name='Event name goes here'
        venue='Eventim Apollo'
        image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='20'
        color='blue'
        when='Tue, Sep 21, 2024 19:00'
        name='Event name goes here'
        venue='Royal Albert Hall'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='25'
        color='blue'
        when='Wed, Aug 9, 2024 22:00'
        name='Event name goes here'
        venue='o2 Arena'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
    </CardGroup>

    <CardGroup url='discover' title='More events' color='red' background='white'>
      <EventCard
        url='1'
        from='20'
        color='red'
        when='Tue, Sep 21, 2024 19:00'
        name='Event name goes here'
        venue='Royal Albert Hall'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='25'
        color='red'
        when='Wed, Aug 9, 2024 22:00'
        name='Event name goes here'
        venue='o2 Arena'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='10'
        color='red'
        when='Sun, Mar 14, 2024 15:00'
        name='Event name goes here'
        venue='Wembley Stadium'
        image='https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='60'
        color='red'
        when='Mon, Jul 2, 2024 20:00'
        name='Event name goes here'
        venue='Eventim Apollo'
        image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='20'
        color='red'
        when='Tue, Sep 21, 2024 19:00'
        name='Event name goes here'
        venue='Royal Albert Hall'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='25'
        color='red'
        when='Wed, Aug 9, 2024 22:00'
        name='Event name goes here'
        venue='o2 Arena'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
    </CardGroup>

    <CardGroup url='discover' title='Editors pick' color='orange' background='gray'>
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

    <CardGroup url='discover' title='For kids' color='purple' background='white'>
      <EventCard
        url='1'
        from='20'
        color='purple'
        when='Tue, Sep 21, 2024 19:00'
        name='Event name goes here'
        venue='Royal Albert Hall'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='25'
        color='purple'
        when='Wed, Aug 9, 2024 22:00'
        name='Event name goes here'
        venue='o2 Arena'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='10'
        color='purple'
        when='Sun, Mar 14, 2024 15:00'
        name='Event name goes here'
        venue='Wembley Stadium'
        image='https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='60'
        color='purple'
        when='Mon, Jul 2, 2024 20:00'
        name='Event name goes here'
        venue='Eventim Apollo'
        image='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='20'
        color='purple'
        when='Tue, Sep 21, 2024 19:00'
        name='Event name goes here'
        venue='Royal Albert Hall'
        image='https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <EventCard
        url='1'
        from='25'
        color='purple'
        when='Wed, Aug 9, 2024 22:00'
        name='Event name goes here'
        venue='o2 Arena'
        image='https://images.unsplash.com/photo-1472691681358-fdf00a4bfcfe?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
    </CardGroup>
  </Master>
);

const title = 'Discover';
const canonical = 'https://modern-ticketing.com/discover';
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
