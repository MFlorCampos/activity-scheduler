'use client';
import Header from '@/components/Header/Header';
import { Provider } from '@/contexts';
import TaskListContainer from '@/components/TaskListContainer/TaskListContainer';
import Weather from '@/components/Weather/Weather';
import Modal from '@/components/Modal/Modal';
import './page.scss';

export default function Home() {
  return (
    <>
      <Provider>
        <Header />
        <Modal />
        <main className="main">
          <div className="box">
            <div className="subHeader">
              <p className="subtitle">
                This app should show you the activities scheduled for these 3
                pitches
              </p>
              <Weather />
            </div>
            <TaskListContainer />
          </div>
        </main>
      </Provider>
    </>
  );
}
