import { UserAuth } from '../../context/AuthContext';
import QrReader from 'react-qr-scanner';
import { useState, useRef } from 'react';
import '../../styles/index.css';

const OCHome = () => {
  const { user } = UserAuth();
  const qrScannerRef = useRef(null);
  const [scannedResult, setScannedResult] = useState('');
  const [showScanner, setShowScanner] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedGift, setSelectedGift] = useState('');
  const [activeTab, setActiveTab] = useState('Give');

  const openScanner = () => {
    setShowOptions(false);
    setShowScanner(true);
  };

  const handleScanResult = (data) => {
    if (data) {
      console.log(data);
      setScannedResult(data.text);
      alert(data.text);

      setShowOptions(true);
      setShowScanner(false);
    }
  };

  const handleScanError = (err) => {
    console.error(err);
    alert(err);
  };

  const handleTabSelection = (tab) => {
    setActiveTab(tab);
    setShowOptions(true);
  };

  const handleEventSelection = (event) => {
    setSelectedEvent(event);
  };

  const handleGiftSelection = (gift) => {
    setSelectedGift(gift);
  };
  const handleGive = () => {
    //Logic remaining
  };
  const handleRedeem = () => {
    //Logic remaining
  };

  const availableEvents = [
    { name: 'Event 1', points: 10 },
    { name: 'Event 2', points: 20 },
    { name: 'Event 3', points: 15 },
    { name: 'Event 4', points: 30 },
  ];

  const redeemableItems = [
    { name: 'Gift Card', points: 50 },
    { name: 'Coupon - 20% off', points: 30 },
    { name: 'Product A', points: 40 },
    { name: 'Product B', points: 60 },
  ];

  return (
    <div className="flex flex-col justify-center h-screen bg-tq-base items-center">
      {showScanner && (
        <QrReader
          ref={qrScannerRef}
          delay={300}
          onError={handleScanError}
          onScan={handleScanResult}
          style={{ width: '100%' }}
          constraints={{
            audio: false,
            video: { facingMode: 'environment' },
          }}
          legacyMode
        />
      )}

      {showOptions && (
        <>
          <h1 className="text-center font-bold text-4xl ">TAQNEEQ 16.0</h1>
          <div className="flex my-8 rounded-sm shadow-lg">
            <div
              className={`cursor-pointer p-4 rounded-md px-8 ${
                activeTab === 'Give' ? 'bg-tq-blue  text-white' : ''
              }`}
              onClick={() => handleTabSelection('Give')}
            >
              Give
            </div>
            <div
              className={`cursor-pointer p-4  rounded-md px-8 ${
                activeTab === 'Redeem' ? 'bg-tq-red  text-white' : ''
              }`}
              onClick={() => handleTabSelection('Redeem')}
            >
              Redeem
            </div>
          </div>
          <div className="flex flex-col items-center">
            {activeTab === 'Give' && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Select an event:</h2>
                <select
                  className="mt-2 px-4 py-2 border rounded"
                  onChange={(e) => handleEventSelection(e.target.value)}
                >
                  <option value="">Select an event</option>
                  {availableEvents.map((event, index) => (
                    <option key={index} value={event.name}>
                      {event.name} - {event.points} points
                    </option>
                  ))}
                </select>
                {selectedEvent && (
                  <>
                    <h1>Selected Event: {selectedEvent}</h1>
                    <button
                      className="bg-tq-red rounded-md p-4 mx-auto text-center px-8 text-white"
                      onClick={handleGive}
                    >
                      Give
                    </button>
                  </>
                )}
              </div>
            )}
            {activeTab === 'Redeem' && (
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  Select a gift or item to redeem:
                </h2>
                <select
                  className="mt-2 px-4 py-2 border rounded"
                  onChange={(e) => handleGiftSelection(e.target.value)}
                >
                  <option value="">Select a gift or item</option>
                  {redeemableItems.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name} - {item.points} points
                    </option>
                  ))}
                </select>
                {selectedGift && (
                  <>
                    <h1>Selected Gift: {selectedGift}</h1>
                    <button
                      className="bg-tq-red rounded-md p-4 px-8 mx-auto text-white"
                      onClick={handleRedeem}
                    >
                      Redeem
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
          <p
            className="text-tq-blue underline  cursor-pointer"
            onClick={openScanner}
          >
            Click here to scan another QR
          </p>
        </>
      )}
    </div>
  );
};

export default OCHome;
