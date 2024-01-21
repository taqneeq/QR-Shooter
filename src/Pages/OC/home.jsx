import { UserAuth } from '../../context/AuthContext';
import QrReader from 'react-qr-scanner';
import { useState, useRef } from 'react';
import '../../styles/index.css';
import { doc, getDoc, updateDoc, getFirestore } from 'firebase/firestore';

const db = getFirestore();

const OCHome = () => {
  const { user } = UserAuth();
  const qrScannerRef = useRef(null);
  const [scannedUserId, setScannedUserId] = useState('');
  const [showScanner, setShowScanner] = useState(true);
  const [activeTab, setActiveTab] = useState('Give');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedGift, setSelectedGift] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const openScanner = () => {
    setShowScanner(true);
    setConfirmationMessage('');
  };

  const updateParticipantPoints = async (isGivingPoints) => {
    try {
      let pointsChange = 0;
      let selectedName = '';
      if (isGivingPoints) {
        pointsChange = availableEvents.find(event => event.name === selectedEvent)?.points || 0;
        selectedName = selectedEvent;
      } else {
        pointsChange = -1 * (redeemableItems.find(item => item.name === selectedGift)?.points || 0);
        selectedName = selectedGift;
      }

      const userRef = doc(db, 'Users', scannedUserId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const currentUserPoints = userSnap.data().points || 0;
        if (!isGivingPoints && currentUserPoints < Math.abs(pointsChange)) {
          setConfirmationMessage(`Insufficient points to redeem ${selectedName}.`);
          return;
        }
        const updatedPoints = currentUserPoints + pointsChange;
        await updateDoc(userRef, {
          points: updatedPoints
        });
        setConfirmationMessage(`Points ${isGivingPoints ? 'added' : 'deducted'} successfully for ${userSnap.data().email || 'user'}`);
      } else {
        setConfirmationMessage('User not found.');
      }
    } catch (error) {
      console.error('Error updating points:', error);
      setConfirmationMessage('Error updating points. Please try again.');
    }
  };

  const handleScanResult = (data) => {
    if (data) {
      setScannedUserId(data.text);
      setShowScanner(false);
      setConfirmationMessage('');
    }
  };

  const handleScanError = (err) => {
    console.error(err);
    setConfirmationMessage('Error scanning QR Code. Please try again.');
  };

  const handleTabSelection = (tab) => {
    setActiveTab(tab);
  };

  const handleEventSelection = (event) => {
    setSelectedEvent(event);
  };

  const handleGiftSelection = (gift) => {
    setSelectedGift(gift);
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

      {!showScanner && (
        <>
          <h1 className="text-center font-bold text-4xl">TAQNEEQ 16.0</h1>
          <div className="flex my-8 rounded-sm shadow-lg">
            <div
              className={`cursor-pointer p-4 rounded-md px-8 ${
                activeTab === 'Give' ? 'bg-tq-blue text-white' : ''
              }`}
              onClick={() => handleTabSelection('Give')}
            >
              Give
            </div>
            <div
              className={`cursor-pointer p-4 rounded-md px-8 ${
                activeTab === 'Redeem' ? 'bg-tq-red text-white' : ''
              }`}
              onClick={() => handleTabSelection('Redeem')}
            >
              Redeem
            </div>
          </div>
          {activeTab === 'Give' && (
            <div>
              <div className="text-lg font-semibold mb-2">Select an event:</div>
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
                    onClick={() => updateParticipantPoints(true)}
                  >
                    Give Points
                  </button>
                </>
              )}
            </div>
          )}
          {activeTab === 'Redeem' && (
            <div>
              <div className="text-lg font-semibold mb-2">Select a gift or item to redeem:</div>
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
                    className="bg-tq-red rounded-md p-4 mx-auto text-center px-8 text-white"
                    onClick={() => updateParticipantPoints(false)}
                  >
                    Redeem Points
                  </button>
                </>
              )}
            </div>
          )}
          {confirmationMessage && (
            <div className="mt-4 text-lg font-semibold text-tq-blue">
              {confirmationMessage}
            </div>
          )}
          <p
            className="text-tq-blue underline cursor-pointer mt-4"
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
