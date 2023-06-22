export type message = {
  message: string;
  id: string;
  sendTime: Date;
  sender: string;
  seenBy?: string; // isSeen
};
