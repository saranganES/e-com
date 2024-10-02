import { useRouter } from 'next/router';

const usePreventSameRouteNavigation = () => {
  const router = useRouter();

  const navigate = (url: string) => {
    if (router.pathname !== url) {
      router.push(url);
    }
  };

  return navigate;
};

export default usePreventSameRouteNavigation;
