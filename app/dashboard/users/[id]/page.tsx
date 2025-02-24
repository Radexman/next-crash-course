const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <h1 className="text-3xl">User Details</h1>
      <h2 className="text-xl">User id: {id}</h2>
    </div>
  );
};

export default Page;
