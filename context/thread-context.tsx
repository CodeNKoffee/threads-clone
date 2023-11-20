import * as React from 'react';
import { Thread } from '../types/threads';
import { generateThread } from '../utils/generate-dummy-data';

export const ThreadsContext = React.createContext<Thread[]>([]);

ThreadsContext.Provider

export const ThreadProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [thread, setThread] = React.useState<Thread[]>([]);

  React.useEffect(() => {
    setThread(generateThread())
  }, []);

  return (
    <ThreadsContext.Provider value={thread}>
      {children}
    </ThreadsContext.Provider>
  )
}