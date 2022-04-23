import Login from './index'
import { useRouter } from "src/components/hooks/useRouter";

const { gotoRegister, gotoRecover, gotoHome } = useRouter();

const log=()=>{
    Login()
    gotoHome();
}

    
