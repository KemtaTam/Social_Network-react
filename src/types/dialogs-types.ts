export type DialogType = {
	id: number;
	name: string;
	messagesData: Array<MessageType>
};

export type MessageType = {
	message: string
	photo: string
	userId: number,
	userName: string
  }
 
  