import withIndexing from "src/components/HOC/withIndexing";

const Home = () => {
  return (
    <div>
      <h1> HOME </h1>   
    </div>
  )
}

export default withIndexing(Home, 'home');