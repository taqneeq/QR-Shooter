import { React, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import gsap from 'gsap/gsap-core';
const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState('25th Dec');

  const boxRef = useRef(null);
  useLayoutEffect(() => {
    const box = boxRef.current;

    gsap.to(box, {
      opacity: 1,
      duration: 0.9,
      delay: 0.5,
      ease: 'power2.inOut',
    });
  }, []);
  const scheduleData = {
    '25th Dec': [
      {
        time: '10:00 AM',
        event: 'AI in Healthcare',
        description: 'Revolutionizing healthcare through AI',
        imageUrl:
          'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        time: '12:00 PM',
        event: 'Blockchain Basics',
        description: 'Understanding the fundamentals of blockchain',
        imageUrl:
          'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        time: '3:00 PM',
        event: 'Cybersecurity Workshop',
        description: 'Enhancing online security awareness',
        imageUrl:
          'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    '26th Dec': [
      {
        time: '9:00 AM',
        event: 'Future of Robotics',
        description: 'Exploring advancements in robotics',
        imageUrl:
          'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        time: '2:00 PM',
        event: 'Quantum Computing Talk',
        description: 'Introduction to quantum computing',
        imageUrl:
          'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        time: '6:00 PM',
        event: 'Tech Entrepreneurship Panel',
        description: 'Insights on tech startups',
        imageUrl:
          'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
    '27th Dec': [
      {
        time: '10:00 AM',
        event: 'AI in Finance',
        description: 'Exploring AI in the finance sector',
        imageUrl:
          'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        time: '1:00 PM',
        event: 'Data Privacy Seminar',
        description: 'Discussion on data privacy laws and practices',
        imageUrl:
          'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        time: '4:00 PM',
        event: 'Virtual Reality Showcase',
        description: 'Experience the latest in virtual reality technology',
        imageUrl:
          'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="min-h-screen flex flex-col m-auto items-center justify-start bg-tq-base p-6 overflow-hidden md:overflow-visible">
      <div className="flex items-center mb-4">
        <Link to="/Home" className="flex items-center text-tq-blue">
          <BsArrowLeft className="mr-1" />
          Back to Home
        </Link> 
      </div>
      <div className="flex flex-col items-center pt-8">
        <div className="flex space-x-4">
          {Object.keys(scheduleData).map((day, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded ${
                selectedDay === day
                  ? 'bg-tq-blue text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => handleDayClick(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="mt-4">
          {selectedDay && (
            <div>
              <h2 className="text-lg font-semibold mb-2">{selectedDay}</h2>
              <div className="grid grid-cols-1 gap-4">
                {scheduleData[selectedDay].map((event, index) => (
                  <div
                    key={index}
                    className="flex bg-white rounded-lg shadow-md p-4 mb-4"
                  >
                    <img
                      src={event.imageUrl}
                      alt="Event Thumbnail"
                      className="w-40 h-40 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {event.event}
                      </h3>
                      <p className="text-gray-600 mb-2">{event.description}</p>
                      <p className="text-gray-500">
                        <span className="font-semibold">Time:</span>{' '}
                        {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
