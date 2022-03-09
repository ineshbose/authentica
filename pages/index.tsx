import { Button, Spacer } from '@geist-ui/core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="pt-64">
      <h1
        className="
          text-center
          text-4xl
          md:text-6xl
          font-extrabold
          leading-tighter
          tracking-tighter
          mb-4
        "
      >
        The Online Signature
      </h1>
      <h1
        className="
          text-center
          text-5xl
          md:text-8xl
          font-extrabold
          leading-tighter
          tracking-tighter
          mb-2
          md:mb-4
          bg-clip-text
          text-transparent
          bg-gradient-to-r
          from-red-400
          to-blue-500
        "
      >
        “ Authentication ”
      </h1>
      <h1
        className="
          text-center
          text-4xl
          md:text-6xl
          font-extrabold
          leading-tighter
          tracking-tighter
          mb-4
          leading-tight
        "
      >
        system for your documents
      </h1>
      <div className="max-w-3xl mx-auto my-14">
        <div className="mt-16 sm:mt-20 flex flex-wrap justify-center">
          <Button
            auto
            type="secondary"
            scale={2}
            onClick={() => router.push('/dashboard')}
            className="m-2"
          >
            Get Started
          </Button>
          <Spacer w={0.5} inline />
          <Button
            auto
            scale={2}
            onClick={() => router.push('/tutorial')}
            className="m-2"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
