import { useCallback, useState } from 'react';

export const useToggle = (state = false) => {
  const [open, setOpen] = useState(state);

  const close = useCallback(() => { setOpen(false) }, [])
  const toggle = useCallback(() => { setOpen(!open) }, [open])
  
  return { open, toggle, close }
} 