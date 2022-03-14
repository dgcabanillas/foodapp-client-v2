import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


export const useRouter = () => {
  const navigate = useNavigate();

  const back  = useCallback(() => { navigate(-1) }, [])

  const gotoHome      = useCallback(() => { navigate('/') }, [navigate])

  const gotoLogin     = useCallback(() => { navigate('/auth/login') }, [navigate])
  const gotoRecover   = useCallback(() => { navigate('/auth/recover') }, [navigate])
  const gotoRegister  = useCallback(() => { navigate('/auth/register') }, [navigate])

  return {
    back,

    gotoHome,

    gotoLogin,
    gotoRecover,
    gotoRegister
  }
}