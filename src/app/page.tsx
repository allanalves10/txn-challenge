import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-10">Escolha uma Opção</h1>
      <div className="flex flex-col space-y-4">
        <Link
          href="/debouncing"
          className="
            bg-[rgb(75,192,192)] 
            text-white 
            font-semibold 
            py-2 
            px-4 
            rounded 
            shadow 
            hover:bg-[rgba(75,192,192,0.8)] 
            hover:shadow-lg 
            cursor-pointer 
            transition 
            duration-300
            text-center
          "
        >
          Gráfico com Debouncing
        </Link>
        <Link
          href="/mixed"
          className="
            bg-[rgb(75,192,192)] 
            text-white 
            font-semibold 
            py-2 
            px-4 
            rounded 
            shadow 
            hover:bg-[rgba(75,192,192,0.8)] 
            hover:shadow-lg 
            cursor-pointer 
            transition 
            duration-300
            text-center
          "
        >
          Gráfico Composto
        </Link>
        <Link
          href="/customPage"
          className="
            bg-[rgb(75,192,192)] 
            text-white 
            font-semibold 
            py-2 
            px-4 
            rounded 
            shadow 
            hover:bg-[rgba(75,192,192,0.8)] 
            hover:shadow-lg 
            cursor-pointer 
            transition 
            duration-300
            text-center
          "
        >
          Gráfico Personalizado
        </Link>
      </div>
    </div>
  );
};

export default Home;
