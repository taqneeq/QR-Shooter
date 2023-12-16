import { UserAuth } from '../context/AuthContext';
import QRCode from 'react-qr-code';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const QR = () => {
  const { user } = UserAuth();

  return (
    <div className="bg-tq-base min-h-screen flex rounded-3xl">
      <div className=" bg-white h-fit rounded-3xl m-auto text-lg flex flex-col justify-center items-center p-3">
        {user.uid ? (
          <div className="flex flex-col items-center">
            <h1 className="text-3xl text-tq-text mb-4">
              Hey, {user.displayName || 'User'}
            </h1>
            <div className="shadow-tq-surface rounded-lg shadow-md p-4 mb-8">
              <QRCode
                value={user.uid ? user.uid : 'Loading..Please try again'}
              />
            </div>
            <p className="text-tq-text mt-2">
              Your total points: {user.points || 0}
            </p>
          </div>
        ) : (
          <p className="text-tq-text mt-4">User data not available.</p>
        )}
        <p className="text-tq-red mt-8 cursor-pointer hover:underline">
          Show this to OC to gain or redeem points!
        </p>
      </div>
    </div>
  );
};

export default QR;
