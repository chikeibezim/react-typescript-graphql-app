import { useQuery } from 'urql';
import { GetUsersDocument } from './graphql/generated';
import UserDisplay from './components/UserDisplay';

function App(){

  //this uses the GeUserDocument query object to request data from your api and return
  //it in a properly typed variable
  //we no longer need the user type mport because the typngs is already bering specified
  //in the GetUsersDocument object.

  const [results] = useQuery({
    query: GetUsersDocument
  })

  return(
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {
        results.data?.users.map((user, i) => {
          return (
            <UserDisplay user={user} key={i} />
          )
        })
      }
    </div>
  )
}

export default App;