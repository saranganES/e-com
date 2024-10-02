import { toast } from 'react-toastify';

export enum Status {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  ERROR = 'ERROR',
  INFO = 'INFO',
  WARNING = 'WARNING',
}

export const toastNotification = (status: string, message: string) => {
  switch (status) {
    case Status.SUCCESS:
      toast.success(message || 'Submitted Successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case Status.FAILED:
    case Status.ERROR:
      toast.error(message || 'Something went to wrong!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case Status.INFO:
      toast.info(message || 'Loading....', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      break;
    default:
      toast.warn(message || 'Warning Notification !', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
  }
};
