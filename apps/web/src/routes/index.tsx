import { createFileRoute } from '@tanstack/react-router';
import type { FC, PropsWithChildren } from 'react';
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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'ui-kit';

import { Copy, GithubIcon } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/')({
  component: Index,
});

export const Title: FC<PropsWithChildren> = ({ children }) => (
  <h1 className="text-center  font-semibold bg-gradient-to-b from-white to-[#ffffff4f] bg-clip-text text-transparent cursor-default text-[64px] leading-[81px] tracking-[-1.28px] px-5 mb-4">
    {children}
  </h1>
);

function Index() {
  return (
    <div className="h-full flex flex-1 items-center justify-center -mt-10">
      <div className="text-center h-full">
        <a
          href="https://www.vegaitglobal.com"
          target="_blanc"
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
        </a>

        <Title>
          Welcome to{' '}
          <span
            className="
         bg-[#FBAB7E] bg-gradient-to-r from-[#FBAB7E] to-[#F7CE68]
    bg-clip-text 
    text-transparent "
          >
            Leo
          </span>
        </Title>
        <p
          className="bg-[#FBAB7E] text-lg bg-gradient-to-r from-[#FBAB7E] to-[#F7CE68]
    bg-clip-text 
    text-transparent  max-w-md text-center mx-auto mb-10"
        >
          Jumpstart your next enterprise project with our feature-packed,
          high-performance React boilerplate - Leo!
        </p>
        <div className="flex gap-3 w-full h-14 max-w-96 mx-auto">
          <CopyCommand />

          <Button
            variant={'outline'}
            // size={'icon'}
            className="aspect-square h-full"
          >
            <a
              href="https://github.com/v-sekulic/vega-react-starter"
              target="_blanc"
            >
              <GithubIcon />
            </a>
          </Button>
          {/* <AlertDialogDemo /> */}
        </div>
      </div>
    </div>
  );
}

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="h-full">
          Get Started
        </Button>
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
const CopyCommand = () => {
  const [copied, setCopied] = useState(false);
  const command = 'npx vega-leo-cli';

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <TooltipProvider>
      <div className="relative flex items-center bg-[#1e293b] rounded-lg px-4 py-2 flex-1 justify-between">
        <code className="text-[#d4d4d8] font-mono text-lg">{command}</code>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={handleCopy}
              variant="ghost"
              size={'icon'}
              className="ml-2 p-0 text-[#d4d4d8] hover:text-[#a3a3a3] transition-all"
            >
              <Copy size={20} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {copied ? 'Copied!' : 'Copy to clipboard'}
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};
