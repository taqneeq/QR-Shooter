import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const boxRef = useRef(null);

  const db = getFirestore();
  const auth = getAuth();

  const linkUidToFirestore = async (uid, email) => {
    const userRef = doc(db, 'Users', uid);
    await setDoc(userRef, { uid, email, points: 0, type: 'participant' }, { merge: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await linkUidToFirestore(user.uid, email);
      navigate('/Home');
    } catch (e) {
      setError(e.message);
      console.error(e.message);
    }
  };

  useEffect(() => {
    const box = boxRef.current;
    gsap.set(box, { opacity: 0 });
    gsap.to(box, {
      opacity: 1,
      duration: 0.5,
      delay: 0.3,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col m-auto items-center justify-center bg-tq-base overflow-hidden">
        <div
          className="flex min-h-fit w-full max-w-3xl flex-col items-center rounded-2xl p-10 text-center md:block  md:p-20 md:bg-white"
          ref={boxRef}
        >
          <h1 className="text-4xl font-bold text-tq-text my-10 md:text-6xl lg:text-7xl">
            Register To Continue{' '}
          </h1>
          <div className="divide-gray-00 mx-auto mt-5 max-w-md divide-y md:mt-14">
            <form
              onSubmit={handleSubmit}
              className="flex w-[70vw] flex-col gap-10 space-y-4 py-8 text-base leading-6 text-tq-surface sm:text-lg sm:leading-7 md:w-auto"
            >
              <div className="relative border-b-2 border-slate-600">
                <input
                  autoComplete="username"
                  id="email"
                  type="text"
                  name="username"
                  className="focus:border-rose-600 peer h-10 w-full bg-transparent font-medium text-tq-text placeholder-transparent focus:outline-none "
                  placeholder="Username"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  className="text-md peer-placeholder-shown:text-slate-440 absolute -top-6 left-0 text-slate-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl peer-focus:-top-6 peer-focus:text-sm peer-focus:text-slate-600"
                >
                  Username
                </label>
              </div>
              <div className="relative border-b-2 border-slate-600">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="focus:border-rose-600 peer h-10 w-full bg-transparent font-medium text-tq-text placeholder-transparent focus:outline-none "
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="text-md peer-placeholder-shown:text-slate-440 absolute -top-6 left-0 text-slate-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-xl peer-focus:-top-6 peer-focus:text-sm peer-focus:text-slate-600"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <button
                  className="rounded-md bg-tq-blue px-5 py-3 font-semibold text-white transition-colors hover:opacity-80"
                  type="submit"
                  value="Sign In"
                >
                  Submit
                </button>
              </div>
              <a
                href="/Login"
                className="font-medium text-slate-900 transition delay-150 ease-in-out hover:underline"
              >
                Already a member? Log In now
              </a>{' '}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
