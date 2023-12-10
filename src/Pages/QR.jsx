import { UserAuth } from '../context/AuthContext';
import QRCode from 'react-qr-code';

const QR = () => {
  const { user } = UserAuth();

  return (
    <div className="bg-tq-base h-screen  text-lg flex flex-col justify-center items-center p-4">
      {user.uid ? (
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-tq-text mb-4">
            Hey, {user.displayName||"User"}
          </h1>
          <div className="shadow-tq-surface rounded-lg shadow-md p-4 mb-8">
            <QRCode value={user.uid ? user.uid : 'Loading..Please try again'} />
          </div>
          <p className="text-tq-text mt-2">Your total points: {user.points||0}</p>
        </div>
      ) : (
        <p className="text-tq-text mt-4">User data not available.</p>
      )}
      <p className="text-tq-red mt-8 cursor-pointer hover:underline">
        Show this to OC to gain or redeem points!
      </p>
    </div>
  );
};

export default QR;
