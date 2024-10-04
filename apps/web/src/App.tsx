import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from 'ui-kit';

function App() {
  return (
    <main className="min-h-screen h-full flex items-center justify-center  bg-[#0B1120]">
      <div className="text-center">
        <button
          className="
    text-white 
    font-inter 
    text-[14px] 
    font-medium 
    leading-normal 
    tracking-[-0.3px] 
    inline-flex 
    px-4 
    py-1.5 
    items-center 
    gap-2 
    rounded-full 
    border 
    border-[#FBAB7E] 
    bg-gradient-radial 
    mb-5
    from-[#bd34fe1a] 
    to-[#bd34fe00]
    shadow-md
    shadow-[#fbac7e44]
  "
        >
          <span className="text-xs -mt-0.5 font-extralight">Powered by</span>
          <img
            className="h-3 w-auto"
            src="https://www.vegaitglobal.com/media/kemh5m2d/vegait_logo_white.png?quality=80"
          />
        </button>

        <h1
          className="
       text-center 

    font-semibold 
    bg-gradient-to-b 
    from-white 
    to-[#ffffff4f] 
    bg-clip-text 
    text-transparent 
    cursor-default 
    text-[64px] 
    leading-[81px] 
    tracking-[-1.28px] 
    px-5 
    mb-4 

    "
        >
          Welcome to{' '}
          <span
            className="
         bg-[#FBAB7E] bg-gradient-to-r from-[#FBAB7E] to-[#F7CE68]
    bg-clip-text 
    text-transparent "
          >
            Leo
          </span>
        </h1>
        <p
          className="       bg-[#FBAB7E] text-lg bg-gradient-to-r from-[#FBAB7E] to-[#F7CE68]
    bg-clip-text 
    text-transparent  max-w-md text-center mx-auto mb-10"
        >
          Jumpstart your next enterprise project with our feature-packed,
          high-performance React boilerplate - Leo!
        </p>
        <AlertDialogDemo />
      </div>
    </main>
  );
}

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Get Started</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default App;
