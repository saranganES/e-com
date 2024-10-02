import { CartContextProvider } from './Cart';
import ToastContext from './ToastContext';
import { UserContextProvider } from './UserContext';

function ContextProvider({ children }: any) {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <ToastContext>{children}</ToastContext>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default ContextProvider;
