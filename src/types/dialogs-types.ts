export type DialogType = {
	id: number;
	name: string;
	messagesData: Array<MessageType>
};
/* export type MessageType = {
	id: number;
	message: string;
}; */
export type MessageType = {
	message: string
	photo: string
	userId: number,
	userName: string
  }
 
/* export type DialogType = {
	id: number;
	name: string;
};
export type MessageType = {
	id: number;
	message: string;
}; */