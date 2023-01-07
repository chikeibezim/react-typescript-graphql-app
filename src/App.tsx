import { User } from './types';
import UserDisplay from './components/UserDisplay';

function App(){

  const users: User[] = [{
    name: `Prisma Fan`,
    messages: [
      {
        body: "Prisma Rocks!"
      },
      {
        body: "Did i mention i love Prisma"
      },
      {
        body: "Did i mention i love Prisma"
      }
    ]
  }];

  return(
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {
        users.map((user, i) => {
          return (
            <UserDisplay user={user} key={i} />
          )
        })
      }
    </div>
  )
}

export default App;