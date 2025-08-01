import ClipPlayer from '../components/ClipPlayer';

function Home() {
  const amountPaid = 200; // ये dynamic होगा real app में

  return (
    <div>
      <h1>Welcome to Desi Teen Patti 🎲</h1>
      <ClipPlayer amount={amountPaid} />
    </div>
  );
}

export default Home;
